const fs = require("node:fs/promises");

console.time("writeManyAsync");

(async () => {
  const fileHandle = await fs.open("writeManyAsync.txt", "w");

  for (let i = 0; i < 1000000; i++) {
    await fileHandle.write(`Hello World ${i} \n`);
  }
  console.timeEnd("writeManyAsync");
  //writeManyAsync: 1:24.804 (m:ss.mmm)
})();
