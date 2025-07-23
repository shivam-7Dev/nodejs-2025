/**
 * The Node.js event loop does not have exactly 6 queues, but it does have multiple phases, each with its own queue for callbacks. Here is a more accurate breakdown:
 */

/**
 * Node.js Event Loop Phases and Queues:
 *
 * 1. Timers Phase:
 *    - Queue for setTimeout and setInterval callbacks.
 *
 * 2. Pending Callbacks Phase:
 *    - Queue for I/O callbacks deferred to the next loop iteration.
 *
 * 3. Idle, Prepare Phase:
 *    - Internal use only, not typically exposed to user code.
 *
 * 4. Poll Phase:
 *    - Queue for retrieving new I/O events and executing I/O-related callbacks (excluding close callbacks, timers, and setImmediate).
 *
 * 5. Check Phase:
 *    - Queue for setImmediate callbacks.
 *
 * 6. Close Callbacks Phase:
 *    - Queue for close event callbacks (e.g., socket.on('close', ...)).
 */

/**
 * Microtasks Queue:
 * - Separate from the main event loop phases.
 * - Includes process.nextTick and resolved Promises.
 * - Executed after each phase of the event loop.
 */

/**
 * Summary:
 * - The event loop has multiple phases, each with its own queue.
 * - Microtasks queue is separate and runs after each phase.
 */

console.log("Start");

// Timers Phase
setTimeout(() => {
  console.log("Timeout callback");
}, 0);

// Check Phase
setImmediate(() => {
  console.log("Immediate callback");
});

// Microtasks Queue
Promise.resolve().then(() => {
  console.log("Promise callback");
});

process.nextTick(() => {
  console.log("NextTick callback");
});

console.log("End");

/**
 * This example demonstrates the order of execution:
 *
 * 1. Synchronous code
 * 2. process.nextTick
 * 3. Promises (microtasks)
 * 4. setTimeout
 * 5. setImmediate
 */

/**
 * Additional Information:
 * - The event loop is the mechanism that allows Node.js to perform non-blocking I/O operations.
 * - It continuously checks for events and executes the corresponding callbacks.
 * - The event loop has multiple phases, each with its own queue of callbacks to execute.
 * - The phases are executed in a specific order, and the event loop repeats this order continuously.
 */
