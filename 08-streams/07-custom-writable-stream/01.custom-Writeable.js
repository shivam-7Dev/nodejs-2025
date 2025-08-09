const { Duplex, Readable, Writable, Transform } = require("stream");
const fs = require("fs");

class CustomFileWritable extends Writable {
  //highWaterMark determine the size of buffer
  //fileName is the destination where the stream writes
  constructor({ highWaterMark, fileName }) {
    super({ highWaterMark });
    this.fileName = fileName;
    this.fd = null;
    this.chunk = [];
    this.chunkSize = 0;
    this.numberOfWrites = 0;
  }

  _construct(callback) {
    /**
     * THis method runs after constructor() method and before any other method
     * NOTE=> until you invoke the callback() other methods will be paused
     * so this means you can not call the .write() etc. unless you call the
     * callback methods in the _constructor
     *
     *
     * You can use this method to initialise your data
     * like opening your file or opening your resource etc
     * YOU CAN USE THIS TO EXECUTE SOME ASYN CODE ALSO
     */

    fs.open(this.fileName, "w", (err, fd) => {
      if (err) {
        callback(err);

        //if you dont pass anyting to callback this means consturct was successfull
        // and you can execute the other methods
        //but when you call the callback(err) then you can not execute ths other mehtods
      } else {
        this.fd = fd;

        //no arguments it means construct was successful
        callback();
      }
    });
  }
  /**
   * when you do this.write() _write method will be called
   * THis method excepts threee arguments
   * chunk: any,
   * encoding: BufferEncoding,
   * callback: (error?: Error | null) => void {execpts error or null}
   * callback() => this means you are done writing and you should move on
   *
   */
  _write(chunk, encoding, callback) {
    //do the write operation
    //when you are done then call the  callback funtion
    /**
     * push the data into chuck until it reaches the highwater mark value
     * when it reaches the high water mark value then write to file
     * using the file descriptor
     */

    this.chunk.push(chunk);
    this.chunkSize += chunk.length;
    //if chuncksize is greater then highWaterMark then write to the file
    //and empty the chunks
    if (this.chunkSize > this.highWaterMark) {
      fs.write(this.fd, Buffer.concat(this.chunk), (err) => {
        if (err) {
          return callback(err);
        }
        this.chunk = [];
        this.chunkSize = 0;
        ++this.numberOfWrites;
        callback();
      });
    } else {
      callback();
    }

    /**
     * if you dont let the write to finsinsh and call the  Readable.wirte() again
     * before calling the callback() then node will buffer the data internally
     *
     * lets say if you put callback() in setTimeout for 5 sec then
     * anyting you write  in that 5 seconds will be buffered internall
     *
     *
     * when you invoke the callback() you get the drain event
     *
     * NOTE: you should not emmit events from child classes from child class
     * dont do => this.emit("drain") NEVER DO THIS
     * DO NOT OVER RIDE THE ORIGINAL write() method
     *
     * if you want to do something custom the use _write()
     * DO not call the _write() method on instance
     */
  }
  //this will run when .end() is called on our stram object
  //this will be called before when stream is about to get closed
  _final(callback) {
    fs.write(this.fd, Buffer.concat(this.chunk), (error) => {
      if (error) {
        return callback(error);
      } else {
        this.chunk = [];
        ++this.numberOfWrites;
        callback();
      }
    });
  }

  _destroy(err, callback) {
    console.log("the number writes was", this.numberOfWrites);
    if (this.fd) {
      fs.close(this.fd, (error) => {
        if (error) {
          callback(error || err);
        }
      });
    } else {
      callback(err);
    }
  }
}

const destinationStream = new CustomFileWritable({
  highWaterMark: 10,
  fileName: "./test.txt",
});

destinationStream.on("drain", () => {
  console.log("draining the data=====");
});
destinationStream.on("finish", () => {
  console.log("finsht the stream");
});
destinationStream.write("this is custom writable \n");
destinationStream.write("this is custom writable");
destinationStream.write("this is custom writable");
destinationStream.write("this is custom writable");
destinationStream.write("this is custom writable");
destinationStream.write("this is custom writable");
destinationStream.write("this is custom writable");
destinationStream.write("this is custom writable");
