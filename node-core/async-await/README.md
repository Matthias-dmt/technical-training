# Async Await Quick Recap

Async always returns Promise
Example:

````javacript
async function f() {
  return 42;
}

console.log(f()); // Promise

// How to extract value

// Option 1
f().then(value => console.log(value));

// Option 2
(async () => {
  const value = await f();
  console.log(value);
})();
````

Common pitfalls:

• forgetting await
• not handling errors
• unhandled promise rejections
