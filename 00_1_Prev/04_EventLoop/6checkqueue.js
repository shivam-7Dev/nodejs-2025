const fs = require("node:fs");

fs.readFile(__filename, (error, data) => {
  console.log("readfile callback");

  setImmediate(() => {
    console.log("nested immediate");
  });
});

process.nextTick(() => {
  console.log("nextTick callback 1");
});
process.nextTick(() => {
  console.log("nextTick callback 2");
});

Promise.resolve().then(() => {
  console.log("promise callback");
});

setTimeout(() => {
  console.log("setTimeout callback");
}, 0);

/**
    nextTick callback 1
    nextTick callback 2
    promise callback
    setTimeout callback
    readfile callback
    nested immediate
 */
