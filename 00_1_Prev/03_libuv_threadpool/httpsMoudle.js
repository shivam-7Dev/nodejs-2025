const https = require("node:https");

const start = Date.now();
const Max_CALL = 8;

for (let i = 0; i < Max_CALL; i++) {
  https
    .request("https://www.google.com", (res) => {
      res.on("data", (chunk) => {
        //   console.log("chunk", chunk);
      });
      res.on("end", () => {
        console.log("Time taken:", Date.now() - start, "ms");
      });
    })
    .end();
}

/**
 * Although both crypto.pbkdf2 and https.request are async,
 * the https.request is not offloaded to the thread pool.
 */

/**
 * Explanation:
 *
 * crypto.pbkdf2 (CPU-bound operation):
 * - Offloaded to Thread Pool: The crypto.pbkdf2 function is a CPU-bound operation that is offloaded to the thread pool managed by libuv. This allows the main event loop to remain responsive while the computation is performed in a separate thread.
 *
 * https.request (I/O-bound operation):
 * - Not Offloaded to Thread Pool: The https.request function is an I/O-bound operation that relies on the underlying system's networking stack. It is handled by the event loop and does not use the thread pool.
 * - Instead, it uses non-blocking I/O to perform network operations asynchronously. libuv delegates the network I/O to the operating system's networking stack, which is designed to handle such operations efficiently.
 * - Polling the Kernel: libuv uses mechanisms like epoll (on Linux), kqueue (on macOS and FreeBSD), IOCP (on Windows), and others to efficiently poll the kernel for the status of network operations. These mechanisms allow libuv to be notified when a network operation (such as an HTTP request) has completed, without blocking the main thread.
 *
 * Summary:
 * - Thread Pool: Used for CPU-bound tasks and some I/O-bound tasks like file system operations, DNS lookups, and compression.
 * - Event Loop: Handles non-blocking I/O operations like network requests, timers, and other asynchronous events.
 */

/**
 * In Node.js, async methods are handled by libuv.
 * They are handled in two different ways:
 * 1. Native async mechanism (non-blocking I/O)
 * 2. Thread Pool (CPU-bound tasks)
 *
 * Whenever possible, Node.js uses the native async mechanism in the OS to avoid blocking the main thread.
 * Relying on the native async mechanism is more efficient than using the thread pool.
 *
 * On the other hand, if there is no native async support and the task is file I/O or CPU-bound, libuv uses the thread pool to avoid blocking the main thread.
 * Although the thread pool preserves asynchronicity with respect to the main thread, it can still become a bottleneck if all threads are busy.
 */
