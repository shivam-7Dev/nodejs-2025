const stream = require("stream");
const { Writable } = stream;

const fs = require("fs");

class CustomWritable extends Writable {
  constructor({ highWaterMark, fileName }) {
    super({ highWaterMark });
    this.fileName = fileName;
    this.fd = null;

    this.chunks = [];
    this.bufferSize = 0;
    this.flushThreshold = highWaterMark || 16 * 1024;
  }
  //_construct?(callback: (error?: Error | null) => void): void;
  _construct(callback) {
    fs.open(this.fileName, "w", (err, fd) => {
      if (err) {
        return callback(err);
      } else {
        this.fd = fd;
        callback();
      }
    });
  }
  /**
  _write(chunk: any, encoding: BufferEncoding, callback: (error?: Error | null) => void): void;
    
    Push chunks into your buffer
    Check if the accumulated size ≥ your batching threshold
    If yes → combine chunks into a single Buffer and fs.write it
    Call the callback() only after writing
    On _final, flush any remaining buffered data
 */
  _write(chunk, encoding, callback) {
    /**
     * do write operatoin and when you are done
     * invoke the callback without anyting
     * to signal success
     *
     * when you do destStream.write("shivam");
     * this chuck will be recieved here
     */

    // If chunk is string, convert to Buffer
    if (typeof chunk === "string") {
      chunk = Buffer.from(chunk, encoding);
    }
    // Add to buffer
    this.chunks.push(chunk);
    this.bufferSize += chunk.length;

    // If buffer reached threshold, flush to file
    if (this.bufferSize >= this.flushThreshold) {
      this._flushBuffer(callback);
    } else {
      // We don't flush yet, but must still tell stream we're ready
      callback();
    }

    callback();
  }

  _flushBuffer(callback) {
    const buffer = Buffer.concat(this.chunks, this.bufferSize);

    fs.write(this.fd, buffer, (err) => {
      if (err) return callback(err);
      this.chunks = [];
      this.bufferSize = 0;
      callback();
    });
  }

  _final(callback) {
    // Flush any remaining data
    if (this.bufferSize > 0) {
      this._flushBuffer(callback);
    } else {
      callback();
    }
  }

  _destroy(err, callback) {
    if (this.fd) {
      fs.close(this.fd, (closeErr) => callback(closeErr || err));
    } else {
      callback(err);
    }
  }
}

const destStream = new CustomWritable({
  highWaterMark: 8, // 8 bytes before flushing
  fileName: "./custom-data.txt",
});

destStream.on("drain", () => {
  console.log("Stream drained");
});

destStream.write("shivam"); // won’t write yet (buffer < 8 bytes)
destStream.write(" moredata"); // flush triggered (total > 8 bytes)
destStream.end(" lastchunk");
