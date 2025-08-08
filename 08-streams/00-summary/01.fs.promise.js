const fs = require("fs/promises");

(async () => {
  console.time("time");
  //open the file fist and then wirte the data in it
  const fileHandler = await fs.open("./01.million-baisc.txt", "w");
  console.log(Object.getOwnPropertyNames(fileHandler));
  console.log(await fileHandler.stat());
  for (let index = 0; index < 1000000; index++) {
    //write the buffer
    await fileHandler.write(`${index} \n`);
  }
  console.timeEnd("time");
})();

/**
 * This will consume less memory because buffer is small and its
 * diretly being written to destination
 *
 */

/**
 * stats on linux
 * time take: time: time: 17.212s
 * cpu: 16%
 * memory(ram): 48 Mb
 */

/**
 * In fs/promises example fs.open returns a FileHandle object.
 * This object is a wrapper around the numeric file descriptor
 * and provides convenient methods like .write(), .stat(), and .close()
 * directly on the object itself.
 */
