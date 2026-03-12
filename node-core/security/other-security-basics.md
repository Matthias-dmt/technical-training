# Security Basics — Backend (Quick Recap)

General mindset
• Never trust client input.
• Always validate on the backend.
• Assume users can call the API directly.

## 1.Input Validation

Validate params, body and query before using them.

Example:

````javascript
if (!Number.isInteger(Number(req.params.id))) {
    return res.status(400).json({ error: “Invalid id” });
}
````

Why:
• Prevent crashes
• Prevent unexpected behavior
• Reduce attack surface

Validation checks format and required fields.
It does not modify the value. It rejects invalid input.

## 2.SQL Injection & Parameterization

[sql injection](./README.md)

## 3.Sanitization

Sanitization means cleaning unsafe characters.

Example:
• Removing HTML tags to prevent XSS
• Trimming unexpected whitespace

Validation = check format
Sanitization = clean unsafe content

## 4.Least Privilege Principle

Database user should only have required permissions.

Example:
• API user should not have DROP TABLE permission.
• Separate read-only vs write roles if possible.

If compromised, damage is limited.

## 5.Error Handling & Information Leakage

Do not expose internal errors to client.

Bad:

````javascript
res.json({ error: err.stack });
````

Good:

````javascript
res.status(500).json({ error: “Internal Server Error” });
````

Log detailed errors internally.

## 6.Password Security

•Never store plain text passwords.
• Use bcrypt or argon2.
• Use proper salt and cost factor.

Example concept:

````javascript
hashedPassword = await bcrypt.hash(password, 10);
````

## 7.HTTPS

Always use HTTPS in production.

Why:
• Protect credentials
• Protect tokens
• Prevent man-in-the-middle attacks

## 8. Rate Limiting

Sensitive endpoints:

• Login

• Password reset

• OTP verification

Protect with:

• Rate limiting

• Lockout strategy

• Possibly captcha

Prevents brute-force attacks.
