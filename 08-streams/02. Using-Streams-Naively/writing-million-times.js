const fs = require("fs/promises");

//writing a million times using streams

/**
 * steps to write a million times
 * using streams in bad way
 *
 * 1. open a file which you want to write in
 * 2. do not directly write into it
 * 3. open a readable stream from it
 * 4. wite into that readable stream
 */

(async () => {
  console.time("time");
  //open the file in write mode
  //file will be created if it does not exitst in read mode
  const fileHandler = await fs.open("millionWrite.txt", "w");

  //create a readable write stream from the file hadnles
  const writeAbleStream = fileHandler.createWriteStream();

  //run loop a million times
  for (let index = 0; index < 1000000; index++) {
    //create buffer because writeable stream takes buffer or string
    const buffToWrite = Buffer.from(`${index}`);
    writeAbleStream.write(buffToWrite);
  }
  console.timeEnd("time");

  writeAbleStream.on("drain", () => {
    console.log("draining the stream");
  });
})();
