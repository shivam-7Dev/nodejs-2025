const fs = require("fs/promises");

//build your own stream soluting without using streams

/**
 * note:
 *  fs.copy() uses stream inisde it
 *  1. fs.readFile() reads full file into memory in one go and gives you buffer
 *    and you can wirte that buffer to some destination file
 * 
 *  2.
 */

(async () => {
  try {
    const destFIleHandler = await fs.open("dest.txt", "w"); // this is not sream yet
    const fullFileDataBuffer = await fs.readFile("./millionWrite.txt"); // this loads full file into memory at once

    
  } catch (error) {
    console.error(error);
  }
})();
