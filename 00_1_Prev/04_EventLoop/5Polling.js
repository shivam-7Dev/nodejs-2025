/**
 * To queue a function in the check phase, we use setImmediate(callback).
 * The check phase is executed after the poll phase.
 */

const fs = require("fs");

fs.readFile(__filename, "utf-8", (error, data) => {
  console.log("readfile cb");
});

setTimeout(() => {
  console.log("setTimeout callback 1");
}, 10);

setTimeout(() => {
  console.log("setTimeout callback 2");
  process.nextTick(() => {
    console.log("nested nextTick callback in setTimeout 2");
  });
}, 0);

process.nextTick(() => {
  console.log("nextTick callback 1");
});

Promise.resolve().then(() => {
  console.log("Promise resolve callback 1");
});

setImmediate(() => {
  console.log("setImmediate callback 1");
});

/**
 * Expected Output:
 *
 * 1. nextTick callback 1
 * 2. Promise resolve callback 1
 * 3. setTimeout callback 2
 * 4. nested nextTick callback in setTimeout 2
 * 5. setImmediate callback 1
 * 6. readfile cb
 * 7. setTimeout callback 1
 */

/**
 * Explanation:
 *
 * - First, all the statements are executed on the call stack.
 * - This results in callbacks being queued up in appropriate queues.
 * - Note: Callbacks of the I/O queue are not directly pushed into the queue but are pushed only after the polling phase.
 * - When the control first enters the event loop, it first checks the microtask queue and executes all the callbacks in it.
 * - nextTick queue gets priority over the promise queue.
 * - When both queues are empty, the event loop moves to the timer queue and executes all the callbacks in it.
 * - When the control reaches the I/O queue, we expect the readfile cb to be present because file reading is finished by the time the event loop reaches the I/O queue.
 * - But in reality, the event loop has to poll to check if I/O operations are complete and queue up only the completed callbacks in the I/O queue.
 * - This means when the control enters the I/O queue for the first time, it is still empty.
 * - Since it is empty, the control moves to the polling part, and if any I/O operation is done, then the event loop queues up the callback in the I/O queue.
 * - Control then proceeds to the check queue and executes the callbacks in it.
 * - If it finds any callback, then it executes it and then again checks the microtask queue.
 */

/**
 * Inference:
 * - I/O events are polled, and the callback functions are added to the I/O queue only after the I/O is complete.
 */
