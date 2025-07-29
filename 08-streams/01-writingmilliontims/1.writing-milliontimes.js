const fs = require("fs/promises");

(async () => {
  console.log(`Process ID: ${process.pid}`); // Get the process ID here
  console.time("task");
  console.log("writing milion times");
  //open file to be written

  const fileHandler = await fs.open("./million-write.promise.txt", "w");

  const { size } = await fileHandler.stat();
  console.log("size before starting", size);

  //run loop 1 million times

  for (let index = 0; index < 1000000; index++) {
    await fileHandler.write(`${index} \n`);
  }
  const { size: size2 } = await fileHandler.stat();
  console.log("size after finish", size2);
  console.timeEnd("task");
})();

/**
Process ID: 4349
writing milion times
size before starting 0
size after finish 7888890
task: 7.844s
node memory: 55 MB


Each write call is awaited, which lets the Node.js event loop wait for the OS to flush the data before proceeding.

This means only one line is in memory at a time — very memory-efficient.

But because you're writing 1 million lines sequentially, it takes more time overall.

💡 Result: Low memory usage, high time due to waiting on each write
 */
