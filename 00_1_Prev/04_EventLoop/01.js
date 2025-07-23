/**
 * Additional Information:
 * - The event loop is the mechanism that allows Node.js to perform non-blocking I/O operations.
 * - It continuously checks for events and executes the corresponding callbacks.
 * - The event loop has multiple phases, each with its own queue of callbacks to execute.
 * - The phases are executed in a specific order, and the event loop repeats this order continuously.
 */

/**
 * Event loop execution order in Node.js:
 *
 * 1. Any callback in the microtask queue will be executed. First tasks in the nextTick queue and only then tasks in the promise queue.
 * 2. All callbacks in the timer queue will be executed before any callbacks in the I/O queue.
 * 3. Callbacks in the microtask queue, if present, are executed after the execution of every callback in the timer queue. Again, first tasks in the nextTick queue and then tasks in the promise queue.
 * 4. All callbacks in the I/O queue will be executed.
 * 5. Callbacks in the microtask queue, if present, are executed after the execution of every callback in the I/O queue. NextTick queue followed by Promise queue.
 * 6. All callbacks in the check queue will be executed.
 * 7. Callbacks in the microtask queue, if present, are executed after the execution of every callback in the check queue. Again, first tasks in the nextTick queue and then tasks in the promise queue.
 * 8. All callbacks in the close queue will be executed.
 * 9. For one final time in the same loop, the microtask queue is executed. NextTick queue followed by the Promise queue.
 */

/**
 * Microtask queue:
 * - process.nextTick
 * - Promise
 * - Object.observe
 * - MutationObserver
 *
 * Timer queue:
 * - setTimeout
 * - setInterval
 *
 * I/O queue:
 * - fs callbacks
 * - stream callbacks
 * - setImmediate
 *
 * Check queue:
 * - setImmediate
 *
 * Close queue:
 * - close callbacks
 */

/**
 * The idle phase in the event loop:
 * - The idle phase is a period where the event loop is waiting for I/O events to occur.
 * - During this phase, the event loop is idle and not executing any callbacks.
 * - This phase is not explicitly mentioned in the event loop execution order but is an implicit part of the event loop's behavior.
 */

/**
 * ASCII Art Representation of Node.js Event Loop Phases:
 *
 *       +-------------------+
 *       |                   |
 *       |   Timer Phase     | <--- setTimeout, setInterval
 *       |                   |
 *       +-------------------+
 *               |
 *               v
 * +-------------------+     +-------------------+
 * |                   |     |                   |
 * | Pending Callbacks |<--->|  Microtask Phase  | <--- process.nextTick, Promises
 * |                   |     |                   |
 * +-------------------+     +-------------------+
 *               |
 *               v
 *       +-------------------+
 *       |                   |
 *       |  Idle, Prepare    | <--- Internal use
 *       |                   |
 *       +-------------------+
 *               |
 *               v
 *       +-------------------+
 *       |                   |
 *       |    Poll Phase     | <--- Retrieve new I/O events, execute I/O callbacks
 *       |                   |
 *       +-------------------+
 *               |
 *               v
 *       +-------------------+
 *       |                   |
 *       |    Check Phase    | <--- setImmediate
 *       |                   |
 *       +-------------------+
 *               |
 *               v
 *       +-------------------+
 *       |                   |
 *       | Close Callbacks   | <--- socket.on('close', ...)
 *       |                   |
 *       +-------------------+
 */
