const fs = require("fs/promises");

const executeOnce = () => {
  let count = 1;

  return (cb) => {
    if (count === 1) {
      cb();
      count++;
    }
  };
};

(async () => {
  const once = executeOnce();
  const sourceFileHandler = await fs.open("./big.txt", "r");

  const destinationFileHandler = await fs.open("./selective-write.txt", "w");

  const readableStream = sourceFileHandler.createReadStream();

  const wirteStream = destinationFileHandler.createWriteStream();

  //read data from read stream and selective write data

  readableStream.on("data", (data) => {
    const dataString = data.toString();
    once(() => {
      console.log(dataString);
    });
    // process the data and wirte to file
  });

  wirteStream.on("drain", () => {
    readableStream.resume();
  });
})();
