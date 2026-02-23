# Express — Production Patterns

Async error handling

Problem:

app.get(”/user/:id”, async (req, res) => {
const user = await getUser(req.params.id);
res.json(user);
});

If getUser throws, the request may hang.

Proper version:

````javascript
app.get(”/user/:id”, async (req, res, next) => {
    try {
        const user = await getUser(req.params.id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        res.json(user);
    } catch (err) {
        next(err);
    }
});
````

And global error middleware:

````javascript
app.use((err, req, res, next) => {
    res.status(500).json({ error: “Internal Server Error” });
});
````

Input validation

Always validate params / body / query.

Example:

````javascript
if (!Number.isInteger(Number(req.params.id))) {
    return res.status(400).json({ error: “Invalid id” });
}
````

Don’t trust client input.

Other backend good practices
• Return correct HTTP status codes (400, 404, 500).
• Do not expose raw DB objects blindly.
• Separate route handler from business logic.
• Keep functions small and testable.
