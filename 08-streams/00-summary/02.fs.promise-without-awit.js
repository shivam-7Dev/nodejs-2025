const fs = require("fs/promises");

(async () => {
  console.time("time");
  //open the file fist and then wirte the data in it
  const fileHandler = await fs.open("./02.million-baisc.txt", "w");
  console.log(await fileHandler.stat());
  for (let index = 0; index < 1000000; index++) {
    //write the buffer without avating
    //if dont avait loop will keep running
    fileHandler.write(`${index} \n`);
  }
  console.timeEnd("time");
})();

/**
 * Without using await
 * time taken: 12.95
 *
 * memory usage: 4 GB
 */

/**
 * Here we are not await ing (i.e waiting for write to be comlete)
 * For loop will run very quickly queueing up  1,000,00 write operation
 * in memeory almost instantly
 *
 * console.time here is only measuring the time to start all those write
 * operation
 *
 *
 * this will consule a lot of memeory
 */
