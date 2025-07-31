const robot = require("robotjs");

// const fiveMinutesInMs = 5 * 60 * 1000;
// const pressIntervalInMs = 100; // Press the key every 100ms

// console.log("Starting: Will press '1' continuously for 5 minutes.");

// // Set up an interval to press the key repeatedly
// const intervalId = setInterval(() => {
//   robot.keyTap("1");
// }, pressIntervalInMs);

// // Set up a timeout to stop the script after 5 minutes
// setTimeout(() => {
//   clearInterval(intervalId);
//   console.log("Finished after 5 minutes.");
// }, fiveMinutesInMs);
console.log("Simulating a Caps Lock key press...");

// For modifier keys on Linux, it's often more reliable to toggle
// the key down and then up, instead of using keyTap.
robot.keyToggle("capslock", "down");
robot.keyToggle("capslock", "up");

console.log("Caps Lock key press simulated.");
