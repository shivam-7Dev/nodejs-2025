const fs = require("fs");

fs.readFile(__filename, "utf-8", (error, data) => {
  console.log("readfile cb");
});

setTimeout(() => {
  console.log("setTimeout callback 1");
}, 10);

setTimeout(() => {
  console.log("setTimeout callback 2");
  process.nextTick(() => {
    console.log("nested nextTick callback in setTimeout 2");
  });
}, 0);

process.nextTick(() => {
  console.log("nextTick callback 1");
});

Promise.resolve().then(() => {
  console.log("Promise resolve callback 1");
});

/**
 * Expected Output:
 *
 * 1. nextTick callback 1
 * 2. Promise resolve callback 1
 * 3. setTimeout callback 2
 * 4. nested nextTick callback in setTimeout 2
 * 5. readfile cb
 * 6. setTimeout callback 1
 */
