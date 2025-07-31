const fs = require("fs/promises");

(async () => {
  console.time("time");

  const fileHandler = await fs.open("millionWrite.txt", "w");
  const writeAbleStream = fileHandler.createWriteStream();

  for (let index = 0; index < 1_000_000; index++) {
    const buffToWrite = Buffer.from(`${index}\n`);
    const canContinue = writeAbleStream.write(buffToWrite);

    if (!canContinue) {
      await new Promise((resolve) => writeAbleStream.once("drain", resolve));
    }
  }

  writeAbleStream.end();

  writeAbleStream.on("finish", () => {
    const used = process.memoryUsage();
    console.timeEnd("time");
    console.log("Memory usage (MB):");
    for (let key in used) {
      console.log(`${key}: ${(used[key] / 1024 / 1024).toFixed(2)} MB`);
    }
  });
})();
