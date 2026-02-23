# Blocking vs Non-Blocking (Node.js)

## Core idea

Node is single-threaded for the event loop. If I run blocking work on the main thread, the server can’t process other requests while it’s busy.

## Blocking example (bad for big files)

````javascript
app.get(”/report”, (req, res) => {
    const data = fs.readFileSync(“bigfile.json”);
    res.send(data);
});
````

Why it’s a problem
• fs.readFileSync blocks the event loop until the file is fully read.
• With a large file (ex: 500MB), the server becomes unresponsive during the read.
• Under load, this kills throughput and latency.

## Better approaches

1. Streaming (best for huge files)

````javascript
app.get(”/report”, (req, res, next) => {
    const stream = fs.createReadStream(“bigfile.json”);
    stream.on(“error”, next);
    stream.pipe(res);
});
````

2. Async read (still loads entire file in memory)

````javascript
app.get(”/report”, async (req, res, next) => {
    try {
        const data = await fs.promises.readFile(“bigfile.json”);
        res.send(data);
    } catch (err) {
        next(err);
    }
});
````

## Key reminder
• “Sync function without await” is still synchronous. There is nothing to await.
• Sync I/O blocks. Async I/O allows the event loop to keep handling other work.
