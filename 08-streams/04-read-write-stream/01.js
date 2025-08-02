const fs = require("fs/promises");

(async () => {
  console.time("time");
  const fileHandler = await fs.open("big.txt", "w");

  const wirteStream = await fileHandler.createWriteStream();

  for (let index = 0; index < 20000000; index++) {
    if (!wirteStream.write(`${index}\n`)) {
      await new Promise((resolve, reject) => {
        wirteStream.once("drain", () => {
          resolve();
        });
      });
    }
  }
  console.timeEnd("time");
})();
