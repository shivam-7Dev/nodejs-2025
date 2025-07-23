const math = require("./math");
/**
 * The require function is used to load and cache JavaScript modules.
 * When you require a module, Node.js looks for the module in the following order:
 * 1. Core modules
 * 2. Files or folders
 * 3. node_modules folder
 * The role of the require function is to load the module and execute its code.
 * The require function returns the module.exports object.
 * The module.exports object is the API of the module.
 * The module.exports object is used to expose the module's functionality to other modules.
 * The module.exports object is the return value of the require function.
 * The module.exports object is the public API of the module.
 * The module.exports object is the interface of the module.
 * The module.exports object is the contract of the module.
 * The module.exports object is the public interface of the module.
 * The module.exports object is the public face of the module.
 *
 */

console.log("index.js is loading");
console.log(math.add(1, 2));
console.log(math.subtract(1, 2));
console.log(math.multiply(1, 2));
console.log(math.divide(1, 2));

console.log("index.js is loaded");
