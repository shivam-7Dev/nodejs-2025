/**
 * Every module in node.js gets wrapped in an IIFE before being loaded
 *
 * IIFE helps keep top-level variables scoped to the module rather than the
 * global object
 */

/**
 *IFFE that wraps every module contains 5 parameters which are pretty
 *
 * important for the functioning of a module
 *
    (function(exports, require, module, __filename, __dirname) {
    // Content of math.js goes here
    });
 *
 * exports: An object that is initially an empty object({}).
 *          You can add properties to this object to export functionality
 *          from the module. Its shorhand for module.exports
 * 
 * require: The require function itself, so the module can load other module
 * 
 * module: A reference to the current module object.
 *         module.exports is the actual object that require() returns
 * 
 * 
 * __filename: convenience varaible which represent 
 *              the absolute path of current module/file
 * 
 * __dirname: convenience variuable which represents the 
 *             absolute path of current directorly 
 *
 */

console.log({
  dirname: __dirname,
  fileName: __filename,
});
