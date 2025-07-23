const fs = require("fs");

setTimeout(() => {
  console.log("setTimeout callback 1");
}, 0);

fs.readFile(__filename, (err, data) => {
  console.log("readfile cb");
});

/**
 * Event Loop Phases:
 *
 * 1. Timers Phase:
 *    - Executes callbacks from setTimeout or setInterval that are ready.
 *    - setTimeout callback is queued for this phase.
 *
 * 2. I/O Callbacks Phase:
 *    - Handles callbacks from completed I/O operations (e.g., fs.readFile).
 *
 * Note:
 * - You cannot guarantee that the callback function for setTimeout with 0 milliseconds delay will run before the callback passed to readFile.
 * - When running setTimeout with a delay of 0ms and an I/O async method, the order of execution is not guaranteed.
 * - In the DOMTimer::DOMTimer implementation, the interval is calculated as:
 *   double intervalMilliseconds = std::max(oneMillisecond, interval * oneMillisecond);
 * - So if we pass 0 milliseconds, it will be the max of 0 and 1 millisecond, which is 1 millisecond.
 * - This results in a 1 millisecond setTimeout delay.
 * - Therefore, when we set a 0 millisecond delay, it overwrites to 1 millisecond.
 * - If the event loop enters at 0.05 milliseconds, then 1 millisecond has not passed, and the control moves to the I/O phase. If we have a readFile callback, then it will be executed.
 */

/**
 * expected output:
 * setTimeout callback 1
 * readfile cb
 *
 * Note: The order of execution is not guaranteed.
 *
 *
 */
