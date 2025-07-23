/**
 * The I/O queue in Node.js is used to handle callbacks related to I/O operations. Here are the primary ways to queue up a callback function inside the I/O queue:
 *
 * File System Operations:
 * - fs.readFile()
 * - fs.writeFile()
 * - fs.appendFile()
 * - fs.stat()
 * - fs.readdir()
 *
 * Network Operations:
 * - net module operations (e.g., net.createServer())
 * - http module operations (e.g., http.get(), http.request())
 *
 * Other I/O Operations:
 * - dns.lookup()
 * - stream operations (e.g., stream.on('data'), stream.on('end'))
 * - database operations (e.g., querying a database)
 * - child_process operations (e.g., child_process.exec(), child_process.spawn())
 */

// Example of adding a callback to the I/O queue using fs.readFile
const fs = require("fs");

fs.readFile(__filename, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("readfile cb");
});

process.nextTick(() => {
  console.log("NextTick callback 1");
});

Promise.resolve().then(() => {
  console.log("Promise callback 1");
});

/**
 *
 * Expected Output Order:
 * 1. NextTick callback 1
 * 2. Promise callback 1
 * 3. readfile cb
 */
