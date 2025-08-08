const fs = require("fs");

/**
 * THIS IS BLOCKING CODE
 * THIS BLOCKS THE MAIN THREAD
 */
(() => {
  console.time("time");

  //wrting million times using callbackk
  fs.open("./03.callback-million.txt", "w", (err, fd) => {
    //here fd is just a number
    //unlike promise version where fd is filehadler object
    if (err) {
      console.log("err", err);
      return;
    }
    for (let index = 0; index < 1000000; index++) {
      // fd.write(`${index} \n`);
      fs.writeSync(fd, `${index} \n`);
    }
    console.timeEnd("time");
  });
})();

/**
 * stats on linux
 * time take: time: time: time: 1.281s
 * cpu: 16%
 * memory(ram): 48 Mb
 */

/**
 * Here were are synchornously wirting
 * this means we are waiting for write to complete
 * This does not queue up all the writes in memeory
 * and this saves memeory
 * But this blocks the main thread
 * this is not good for CPU as its Blocking
 */
