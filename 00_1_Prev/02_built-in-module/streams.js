/**
 * reading and writing to a file using streams
 */

const fs = require("node:fs");

//create a readable stream

const readableStream = fs.createReadStream("./from.txt", {
  encoding: "utf-8",
  highWaterMark: 2,
});

//create writable stream

const writableStream1 = fs.createWriteStream("./to1.txt");
const writableStream2 = fs.createWriteStream("./to.txt");

//pipe the read stream to write stream
readableStream.pipe(writableStream1);

//intead of piping on to the readabel stream you can listem to the data event on the readable stream

readableStream.on("data", (chunk) => {
  console.log(chunk);
  writableStream2.write(chunk);
});
