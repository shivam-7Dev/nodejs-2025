const fs = require("node:fs/promises");

(async () => {
  console.time("writeManyPromise.js");
  // 1. open a file and get a fileHandle which is file descriptor
  const fileHandle = await fs.open("writManyStreams.txt", "w");

  // 2. Create a write stream from the file handle
  const writeStream = fileHandle.createWriteStream();

  // 3. Write data to the write stream one million times
  for (let i = 0; i < 1000000000; i++) {
    writeStream.write(`Hello World ${i} \n`);
  }
  console.timeEnd("writeManyPromise.js");
  //writeManyPromise.js: 904.524ms
})();

/**
 * Streams are an abstract interface for working with streaming data in Node.js. 
 * Streams are objects that let you read data from a source or write data to a destination in continuous fashion.
 * An abstract interface typically means a design or framework that outlines how something should work without being tied to specific details
 * It defines a set of functionalities or methods that must be implemented but does not provide the actual implementation.
 * In Node.js, the Stream module provides an abstract layer to handle data streams
 * which can represent sequences of data being read or written continuously (like files, network requests, or process input/output). 


 */
