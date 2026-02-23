# Memory Leaks with Event Listeners (Node.js)

## Core idea

In Node, every time we call emitter.on(), we attach a new listener.
If we don’t remove it, it stays in memory.

## Common mistake (backend route example)

````javascript
app.get(”/events”, (req, res) => {
    emitter.on(“data”, (payload) => {
        res.write(JSON.stringify(payload));
    });
});
````

What’s the problem
• Each request adds a new listener.
• We never remove it.
• After many requests, listeners accumulate.
• Memory usage increases.
• The same event triggers multiple callbacks.
• Eventually we may see:
MaxListenersExceededWarning

This is a classic memory leak pattern in Node.

Why it’s dangerous
• Memory keeps growing.
• Performance degrades.
• We may try to write to responses that are already closed.
• Can lead to crashes.

## Correct pattern

We must clean up the listener when the request finishes or the client disconnects.

Example:

````javascript
app.get(”/events”, (req, res) => {
    const handler = (payload) => {
        res.write(JSON.stringify(payload));
    };

    emitter.on(“data”, handler);

    req.on(“close”, () => {
        emitter.off(“data”, handler);
    });
});
````

Now the listener is removed when the request ends.

Important reminders
• Always remove listeners you manually add.
• If the event should fire only once, use emitter.once().
• Be careful with long-lived emitters shared across requests.

## emitter.once()

Using once() prevents accumulation if the event fires, because the listener removes itself. However, if the event never fires or the request ends early, the listener remains attached. We should still clean it up explicitly when the request closes.
