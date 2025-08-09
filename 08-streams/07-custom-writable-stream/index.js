const { Writable } = require("stream");
const fs = require("fs/promises");

class FileWritable extends Writable {
  constructor({ highWaterMark, filePath }) {
    super({ highWaterMark });
    this.filePath = filePath;
    this.fd = null; // File descriptor
  }

  // This method is called when the stream is first used.
  // It's good practice for setup tasks like opening a file.
  _construct(callback) {
    fs.open(this.filePath, "w")
      .then((fileHandler) => {
        this.fd = fileHandler;
        callback(); // Signal success
      })
      .catch(callback); // Signal error
  }

  // This is the core method that must be implemented.
  // It handles the actual writing of a chunk of data.
  _write(chunk, encoding, callback) {
    // The callback is crucial. You MUST call it to signal
    // that you are ready for the next chunk.
    this.fd.write(chunk, (err) => {
      if (err) {
        return callback(err); // Signal an error
      }
      callback(); // Signal success
    });
  }

  // This is called right before the stream is destroyed.
  // Perfect for cleanup tasks.
  _destroy(err, callback) {
    if (this.fd) {
      this.fd.close((closeErr) => {
        // The callback receives the original error OR the new close error.
        callback(err || closeErr);
      });
    } else {
      callback(err);
    }
  }
}

// --- Usage ---
(async () => {
  const stream = new FileWritable({ filePath: "custom-text.txt" });
  stream.write("Hello, ");
  stream.write("World!");
  stream.end("\n-- End of Stream --");

  stream.on("finish", () => {
    console.log("Stream finished writing.");
  });
})();
