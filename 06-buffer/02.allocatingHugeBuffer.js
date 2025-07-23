const { Buffer } = require("node:buffer");
const buffersize = 2 * 1024 * 1014 * 1024;
//bytes
(() => {
  const buffer = Buffer.alloc(buffersize);
  setInterval(() => {
    //fill the buffer
    for (let index = 0; index < buffer.length; index++) {
      buffer[index] = index;
    }
    // buffer.fill(5000)  //diretly fill all elements of buffer

    console.log("buffer filled");
  }, 5000);
})();
