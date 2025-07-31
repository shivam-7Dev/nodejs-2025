const fs = require("fs/promises");

(async () => {
  console.time("time");

  const fileHandler = await fs.open("good.txt", "w");

  const writeStream = fileHandler.createWriteStream({
    highWaterMark: 16 * 1024 * 1024, // 16 MB
  });

  console.log(writeStream.writableHighWaterMark); //16777216
  console.log(writeStream.writableLength); //0
  //   for (let index = 0; index < 1000_000_000; index++) {
  //     if (!writeStream.write(`${index}\n`)) {
  //       await new Promise((resolve) => writeStream.once("drain", resolve));
  //     }
  //   }

  //   writeStream.end();
  //   await new Promise((resolve) => writeStream.on("finish", resolve));

  //   await fileHandler.close();
  //   console.timeEnd("time");
})();
