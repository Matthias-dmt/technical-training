# Event Loop Quick Recap

Execution order:

1. Synchronous code (call stack)
2. Drain all Microtasks (Promises, queueMicrotask, process.nextTick)
3. Macrotasks (setTimeout, setInterval, I/O callbacks)

JavaScript runs synchronous code first. Then it processes microtasks. After that, it executes one macrotask. After each macrotask, it drains the microtask queue again before moving to the next macrotask.

````javascript
console.log("1");

setTimeout(() => {
  console.log("4");
}, 0);

Promise.resolve().then(() => console.log("3"))

console.log("2");
````
