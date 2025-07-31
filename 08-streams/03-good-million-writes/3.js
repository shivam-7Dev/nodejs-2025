const fs = require("fs/promises");

(async () => {
  console.time("time");

  const fileHandler = await fs.open("good3.txt", "w");
  const writeStream = fileHandler.createWriteStream({
    highWaterMark: 16 * 1024 * 1024, // 16 MB
  });

  let i = 0;
  function writeData() {
    let ok = true;
    while (i < 1000000 && ok) {
      ok = writeStream.write(`${i}\n`);
      i++;
    }
    if (i < 1000000) {
      writeStream.once("drain", writeData);
    } else {
      writeStream.end();
      fileHandler.close();
      console.timeEnd("time");
    }
  }

  writeData();
})();
