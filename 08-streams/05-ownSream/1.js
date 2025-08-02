const fs = require("fs/promises");

(async () => {
  try {
    const destFIleHandler = await fs.open("dest.txt", "w"); // this is not sream yet

    const fullFileDataBuffer = await fs.readFile("./millionWrite.txt"); // this loads full file into memory at once

    //writing the complete  buffer into destincation in once
    await destFIleHandler.write(fullFileDataBuffer);
  } catch (error) {
    console.error(error);
  }
})();
