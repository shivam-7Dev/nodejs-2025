const fs = require("fs/promises");

(async () => {
  console.time("time");
  const sourceFileHandler = await fs.open("./big.txt", "r");

  const destinationFileHandler = await fs.open("copy.txt", "w");

  const readableStream = await sourceFileHandler.createReadStream();

  const wirteStream = await destinationFileHandler.createWriteStream();

  readableStream.on("data", (data) => {
    if (!wirteStream.write(data)) {
      readableStream.pause();
    }
  });

  wirteStream.on("drain", () => {
    readableStream.resume();
  });
  readableStream.on("end", () => {
    console.timeEnd("time");
  });
})();
