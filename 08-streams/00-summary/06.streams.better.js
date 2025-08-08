const fs = require("fs/promises");

(async () => {
  console.time("time");
  try {
    const fileHandler = await fs.open("06.streams.good.txt", "w");
    const writStream = fileHandler.createWriteStream();

    for (let index = 0; index < 1000000; index++) {
      //write to streams diretly witout the considering backpressure

      if (!writStream.write(`${index}\n`)) {
        await new Promise((resolve, reject) => {
          writStream.once("drain", () => {
            resolve();
          });
        });
      }

      if (index == 1000000 - 1) {
        writStream.end();
      }
    }
    writStream.on("finish", () => {
      console.timeEnd("time");
    });
  } catch (error) {
    console.error(error);
  }
})();

/**
 * Time Taken==> time: 592.324ms
 * memeory(RAM)=> 96MB
 */
