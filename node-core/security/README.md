# Security Basics — Backend (Node.js)

## SQL Injection

SQL Injection happens when user input is directly concatenated into a SQL query.

### Example (vulnerable)

````javascript
const query = SELECT * FROM users WHERE id = ${req.params.id};
````

If an attacker sends:
id = 1 OR 1=1

The query becomes:

````sql
SELECT * FROM users WHERE id = 1 OR 1=1
````

This can expose all data.

Worse example:

````sql
id = 1; DROP TABLE users;
````

How to prevent it

Use parameterized queries (prepared statements).

Example:

````sql
db.query(“SELECT * FROM users WHERE id = ?”, [req.params.id]);
````

or (PostgreSQL):

````sql
db.query(“SELECT * FROM users WHERE id = $1”, [req.params.id]);
````

With parameterization, user input is treated as data, not executable SQL.

Other security basics:

• Always validate input (params, body, query).

• Never trust client input.

• Use least-privilege database users.

• Do not expose internal error details.

• Hash passwords (bcrypt), never store plain text.

• Use HTTPS.

• Rate limit sensitive endpoints (login, reset password).

[see more](./other-security-basics.md)

Key principle

Validate → Parameterize → Handle errors safely.

### Validation / Sanitization / Parameterization

Validation ensures input has the correct format.
Sanitization cleans potentially dangerous content.
Parameterization ensures user input is treated as data in SQL queries rather than executable code.
