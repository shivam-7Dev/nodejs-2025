const fs = require("fs/promises");

(async () => {
  const destinationFileHandler = await fs.open("text-big.txt", "w");

  const writeAbleStream = await destinationFileHandler.createWriteStream();

  for (let index = 0; index < 50_000_000; index++) {
    if (!writeAbleStream.write(`${index} `)) {
      await new Promise((resolve, reject) => {
        writeAbleStream.once("drain", () => {
          resolve();
        });
      });
    }
  }
})();
