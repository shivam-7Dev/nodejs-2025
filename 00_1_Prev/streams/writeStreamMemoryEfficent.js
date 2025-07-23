const fsPromises = require("fs/promises");

(async () => {
  console.time("writeManyPromise.js");

  // 1. open a file and get a fileHandle which is file descriptor
  const fileHandle = await fsPromises.open(
    "writeManyStreamsMemoryEfficent.txt",
    "w"
  );

  // 2. Create a write stream from the file handle
  const writableStream = fileHandle.createWriteStream();
  /**
   * we have two properties available on the writable stream object:
   * Those two properties show how much of that internal buffer is filled
   *
   * writableStream.writableLength: Returns the number of bytes that have been written to the internal buffer but have not been processed yet.
   * writableStream.writablehighWaterMark: Returns the highWaterMark value that was passed to the stream's constructor when the stream was created.
   * writablehighWaterMark is the size of internal buffer
   *
   * Note:  writableStream.write()
   *  1. writableStream.write() method returns a boolean value indicating whether it is okay to write to the stream.
   *  2. writableStream.write() method returns false if the internal buffer is full and cannot accept more data.
   * 3. writableStream.write() method returns true if the data was successfully written to the internal buffer.
   * true means you can write more data to the stream
   * false means that the internal buffer is full
   *  and you should wait for the drain event to be emitted before writing more data.
   * 
        console.log(writableStream.writableLength); // 0
        const buff = Buffer.alloc(16384, "a");
        console.log(writableStream.write(buff));
        console.log(writableStream.writableLength); // 16380
        console.log(writableStream.writableHighWaterMark); // 16384
        writableStream.on("drain", () => {
            //drain event is emitted when the internal buffer is empty 
            // and you can write more data to the streams buffer

            console.log("drain");
        });
   */
  console.log(writableStream.writableLength); // 0
  console.log(writableStream.writableHighWaterMark); // size of internal buffer

  //   3. Write data to the write stream one million times
  //   for (let i = 0; i < 10000000; i++) {
  //     writableStream.write(`Hello World ${i} \n`);
  //     // we need to check if the writableStream.write() returns false
  //     // if it returns false then we need to wait for the drain event to be emitted before writing more data.
  //     // if it returns true then we can write more data to the stream
  //     // if the internal buffer is full, the writableStream.write() method returns false
  //   }

  let i = 0;

  const write = () => {
    while (i <= 10000000) {
      // break out of while loop if writableStream.write() returns false
      const canWriteMore = writableStream.write(`Hello World ${i} \n`);
      if (!canWriteMore) {
        i++;
        break;
      }
      if (i === 10000000) {
        writableStream.end();

        //.end() will emit finish event when all data is flushed to the underlying system
      }
      i++;
    }
  };
  write();
  let count = 0;

  writableStream.on("drain", () => {
    //drain event is emitted when the internal buffer is empty
    // and you can write more data to the streams buffer
    count++;
    write();
  });

  writableStream.on("finish", () => {
    console.log("Write stream is finished writing data");
    console.log("drain event count:", count);
    console.timeEnd("writeManyPromise.js"); // writeManyPromise.js: 14.552s => writeManyPromise.js: 3:51.838 (m:ss.mmm) for 10000000
  });
})();
