/**
 * The thread pool is used to handle operations that are not CPU-bound, such as:
 * - I/O operations
 * - File system tasks
 * - Network requests
 *
 * Node.js uses the libuv library to manage the thread pool. libuv is responsible for handling asynchronous I/O operations.
 *
 * By default, the thread pool has 4 threads. This can be configured using the UV_THREADPOOL_SIZE environment variable.
 *
 * Tasks handled by the thread pool include:
 * - File system operations (fs module)
 * - DNS lookups
 * - Compression
 * - More...
 *
 * Event Loop: The thread pool works alongside the event loop. While the event loop handles non-blocking I/O operations, the thread pool handles blocking operations asynchronously.
 */

/**
 * How It Works:
 * 1. Offloading to Thread Pool: When you call an asynchronous function like fs.readFile, the actual file reading operation is offloaded to the thread pool.
 * 2. Thread Pool Execution: One of the threads in the thread pool performs the file reading operation.
 * 3. Completion: Once the file reading operation is complete, the thread pool thread signals the completion of the task.
 * 4. Callback Execution: The completion of the task is then queued as an event in the event loop.
 * 5. Event Loop: The event loop picks up the event and executes the associated callback in the main thread.
 *
 * The thread pool does not execute JavaScript code directly. Instead, it handles the underlying I/O operations,
 * and once those operations are complete, the results are passed back to the main thread (event loop), which then executes the callback function.
 */

const fs = require("fs");

// Example: Using the thread pool to read a file asynchronously
fs.readFile("./example.txt", "utf8", (err, data) => {
  // This callback is executed in the main thread once the file reading operation is complete
  // this callback is not executed in the thread pool

  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File content:", data);
  console.log("------------------------------");
});
