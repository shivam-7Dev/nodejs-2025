/**
 * Allocating Huge Buffer
 *
 */
const { Buffer, constants } = require("buffer");

const oneKilobyte = 1024; // 1 KB in bytes
const oneMegabyte = 1024 * 1024; // 1 MB in bytes
const oneGigabyte = 1024 * 1024 * 1024; // 1 GB in bytes

const buffer = Buffer.alloc(oneGigabyte); // 1 KB buffer

setInterval(() => {
  //writing to buffer every 5  seconds
  for (let i = 0; i < oneGigabyte; i++) {
    buffer[i] = i;
  }
  console.log("Buffer filled");
}, 5000);
// const hugeBuffer = Buffer.alloc(oneGigabyte); // 1 GB buffer

console.log(constants.MAX_LENGTH);
console.log(`Process ID: ${process.pid}`);
