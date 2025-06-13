const add = (a, b) => a + b;

const sub = (a, b) => a - b;

const mul = (a, b) => a * b;

// module.exports.name = "shivam";
// module.exports = add; //default export(common js format)

module.exports = { add, sub, mul };

/**
 * 1. when you have to import single variable or function
 *     use=> module.exports= variable
 *
 *  module.exports =(a, b) => a + b; // this is also valid
 *
 * 2. when you have to export more that one variable or  function
 *  user=> module.exports={var1,var2,...,varN}
 *
 * 3. you can directly attach a variale or function to module.exports
 *  module.exports.name="shivam"
 *
 * user exports={} // this will not work
 * exports is just a reference to module.exports
 * but use is sparing
 */
