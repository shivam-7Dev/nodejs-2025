/**
 * To queue a callback in the nextTick queue, we use process.nextTick(callback).
 * When this function is pushed to the call stack, the callback is enqueued to the nextTick queue.
 * Example:
 * process.nextTick(() => {
 *   console.log(`NextTick callback`);
 * });
 */

/**
 * To queue a callback in the promise queue, we use Promise.resolve().then(callback).
 * When the promise is resolved, the callback is pushed to the promise queue.
 * Example:
 * Promise.resolve().then(() => {
 *   console.log(`Promise callback`);
 * });
 */

console.log("Start");

Promise.resolve().then(() => {
  console.log("Promise callback 1");
});

Promise.resolve().then(() => {
  console.log("Promise callback 2");
});

process.nextTick(() => {
  console.log("NextTick callback 1");
});

process.nextTick(() => {
  console.log("NextTick callback 2");
});

console.log("End");

/**
 * Expected Output Order:
 *
 * 1. Start
 * 2. End
 * 3. NextTick callback 1
 * 4. NextTick callback 2
 * 5. Promise callback 1
 * 6. Promise callback 2
 */

/**
 * Inference:
 * - All user-written synchronous JavaScript code takes priority over async code that the runtime would like to execute.
 * - All callbacks in the nextTick queue are executed before the promise queue.
 * - If new microtasks are added during processing (either nextTick or Promise), they will also be processed before moving on.
 * - This is called "microtask queue draining"
 *
 * Example Code:
 * function recursiveNextTick() {
 *   process.nextTick(() => {
 *     console.log('NextTick callback');
 *     recursiveNextTick(); // Continuously adds more nextTick callbacks
 *   });
 * }
 *
 * recursiveNextTick();
 *
 * setTimeout(() => {
 *   console.log('Timeout callback');
 * }, 1000);
 */
