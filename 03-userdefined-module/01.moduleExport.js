const add = (a, b) => a + b;

const sub = (a, b) => a - b;

const mul = (a, b) => a * b;

module.exports = add; //default export(common js format)

/**
 * require() returns the value of module.exports from that module
 * when you capture the value of require() the constant  name can be anyting
 * module.exports is the default export can it can be referred by any name
 * when you are requiring it
 */
