const fs = require("fs/promises");

(async () => {
  console.time("time");
  try {
    const fileHandler = await fs.open("05.streams.navive.js", "w");
    const writStream = fileHandler.createWriteStream();

    for (let index = 0; index < 1000000; index++) {
      //write to streams diretly witout the considering backpressure

      writStream.write(`${index}\n`);

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
 * memeory(RAM)=> 3.2gb
 */
