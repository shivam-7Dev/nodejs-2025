const { parentPort } = require("node:worker_threads");

console.log("Worker loading");

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Listen for messages from the parent thread
parentPort.on("message", (n) => {
  console.log("Message from parent:", n);
  const result = fibonacci(n);
  parentPort.postMessage(result);
});

console.log("Worker loaded");

/**
 * When you create a new Worker("path to worker file"),
 * any top-level code in the worker file executes immediately.
 * But code inside event handlers won't run until triggered.
 *
 * Worker threads allow you to run JavaScript in parallel on multiple threads.
 * They can be used to perform CPU-intensive operations without blocking the main thread.
 *
 * Communication between the main thread and worker threads is done via message passing.
 * The parent thread can send messages to the worker using worker.postMessage(),
 * and the worker can send messages back using parentPort.postMessage().
 *
 * Worker threads are useful for tasks like:
 * - CPU-intensive calculations
 * - Processing large data sets
 * - Running background tasks
 */
