const fs = require("fs/promises");

(async () => {
  console.time("start");
  console.time("start1");
  //open file  in read mode
  const fileHandleRead = await fs.open(
    "./writeManyStreamsMemoryEfficent.txt",
    "r"
  );

  // create read stream from the file descriptor
  const readStreamRead = fileHandleRead.createReadStream({
    highWaterMark: 64 * 1024,
  }); //64kb

  //open file in writeMode
  const fileHandleWrite = await fs.open("./dest.txt", "w");
  //create writeable stream
  const writeStream = fileHandleWrite.createWriteStream();

  readStreamRead.on("data", (chunk) => {
    // writeStream.write(chunk, () => {
    //   console.log("chunk written");
    // });
    // you should not do it like this
    // because hard drive have faster read speed than write speed
    // this will create back pressure
    /**
     * Backpressure occurs when the data source (e.g., a readable stream) produces data faster than the destination (e.g., a writable stream) can handle it.
     *  This can lead to memory buildup and potential crashes if not managed properly
     */

    const canContinue = writeStream.write(chunk);
    if (!canContinue) {
      // Pause the readable stream if the writable stream is overwhelmed
      readStreamRead.pause();
      writeStream.once("drain", () => {
        // Resume the readable stream once the writable stream is ready
        readStreamRead.resume();
      });
    }
  });

  readStreamRead.on("end", () => {
    console.timeEnd("start1");
  });
})();
