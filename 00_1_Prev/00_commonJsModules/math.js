console.log("math.js is loading");
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
console.log("math.js is loaded");

module.exports = { add, subtract, multiply, divide };

/**
 * Expose Functionality: module.exports is used to expose the module's functionality to other modules.
    Return Value: module.exports is the return value of the require function.
    Public API: module.exports represents the public API of the module.
    Interface: module.exports serves as the interface of the module.
    Contract: module.exports acts as the contract of the module, defining what is accessible to other modules.

 */
