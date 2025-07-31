const fs = require("fs/promises");

(async () => {
  console.time("time");

  const fileHandler = await fs.open("good2.txt", "w");

  const writeStream = fileHandler.createWriteStream({
    highWaterMark: 16 * 1024 * 1024, // 16 MB
  });
  let i = 0;
  const wirteDate = async function () {
    while (i < 1000000) {
      if (!writeStream.write(`${i}\n`)) {
        i++;

        break;
      }
      i++;
    }
  };

  wirteDate();
  writeStream.on("drain", wirteDate);
})();
