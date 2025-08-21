const stream = require("stream");
const { Readable, Writable } = stream;
const fs = require("node:fs");

class CustomFileReadable extends Readable {
  constructor({ highWaterMark, fileName }) {
    super({ highWaterMark });
    this.fileName = fileName;
    this.fd = null;
  }

  _construct(callback) {
    fs.open(this.fileName, "r", (err, fd) => {
      //if there is error then invoke the callback with error
      if (err) return callback(err);
      //if there is no error then set the fd
      // also invoke the callback to tell everything was  good
      this.fd = fd;
      callback();
    });
  }

  //read size bytes
  _read(size) {
    //fill this buffer everyting you read from the file
    const buff = Buffer.alloc(size);

    /**
        When you invoke the this.push() the "data" event is fired
        this.push(Buffer.from("random data"))
        to stop reading just push null  and you will be done reading
        this.push(null);
     */

    fs.read(this.fd, buff, 0, size, null, (err, bytesRead) => {
      if (err) {
        //here we dont have callbck you we can'nt invoke
        // the callback with the err

        //to thell that error has happend call
        // the destroy methods with error
        return this.destroy(err);
      } else {
        //push the filled buffer into internal buffer of stream

        if (bytesRead > 0) {
          this.push(buff.subarray(0, bytesRead));
        } else {
          this.push(null);
        }

        /**
         * When you invoke the this.push() the "data" event is fired
         */
      }
    });
  }

  _destroy(err, callback) {
    /**
     * this mehods is called automaticlly when stream is destroyed due to
     * 1. due to and error
     * 2 explicitly calling stream.destory()
     *
     * Its job is to clean up any underlying resouce
     */

    if (this.fd) {
      fs.close(this.fd, (closeErr) => {
        // the callabk should be called with original error
        //or error coming from closig the file

        return callback(closeErr || err);
      });
    } else {
      //If there is no file descriptor just call the callback
      callback(err);
    }
  }
}

const readStream = new CustomFileReadable({
  highWaterMark: 2,
  fileName: "./text.txt",
});

// readStream.on("data", (chunk) => {
//   console.log("chunk recieved====>", {
//     data: chunk.toString("utf-8"),
//     length: chunk.length,
//   });
// });
(async () => {
  try {
    for await (const element of readStream) {
      console.log("elemtnt", { element });
    }
    // This line will only run after the loop has completed,
    // which means the stream has ended.
    console.log("Stream finished reading (from async iterator).");
  } catch (error) {
    console.error(error);
  }
})();

readStream.on("end", () => {
  console.log("stream finised reding");
});
