/**
 * In node js each file is moudle but they are isolated by default
 *
 * Note: we load a module by require() function
 * require(./path)=> is a synchronous  operation that loads, compiles
 * execute(first time), and caches a module, making its module.exports available
 * to calling file.
 * By require() we are basically executing the code in that module
 *
 */

require("./math.js");

const add = require("./01.moduleExport.js");
console.log(add(1, 3));

require("./02.moduleScope-batman.js");
require("./02.moduleScope-superman.js");

const counter1 = require("./04.module.cahing.js");
const counter2 = require("./04.module.cahing.js");

counter1.increment(); // Count: 1
counter2.increment(); // Count: 2
console.log(counter1 === counter2);

const { add: add2, sub, mul, name } = require("./05.importExportPattern.js");
console.log(add2(5, 5)); //10
console.log(sub(5, 5)); //0
console.log(mul(5, 5)); //25
// console.log({ name });

/**
 * Both counter1 and counter2 get the same instance of the module
 * because Node.js caches the module after the first require.
 * The count variable is shared, so incrementing via either reference
 *  affects the same state.
 * The last line prints true, confirming both variables
 *  point to the same cached object.
 */
