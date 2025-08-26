import fs from "node:fs/promises";
import { Writable } from "node:stream";

class FileReader extends Writable {
  constructor({ fileName, highWaterMark }) {
    super({ highWaterMark });
    this.fileName = fileName;

    this.chunks = [];
    this.bufferSize = null;
    this.fileHandler = null;
  }

  /**
     this function will be callled fist
    all other fuction will not be executed till this is done executing
    f you dont invoke the callback then you cannoit write to the stream
    invoking the callback will signal error event
    invoking the callback will null means success
   */
  async _construct(callback) {
    try {
      const fileHandler = await fs.open(this.fileName, "w");
      this.fileHandler = fileHandler;
      callback();
    } catch (error) {
      callback(error);
    }
  }

  async _write(chunk, encoding, callback) {
    //this mehdos will be called when read() is called
    try {
    } catch (error) {
      callback(error);
    }
  }

  async _final() {
    //this method is callled when the end() is called
  }
  async _destroy() {}
}
