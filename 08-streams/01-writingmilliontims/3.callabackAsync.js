const fs = require("fs");

(() => {
  console.time("million");
  console.log("million write callback");

  fs.open("./million-write.callback3.txt", "w", (err, fd) => {
    if (err) {
      console.log("error opein file", err);
      return;
    }

    for (let index = 0; index < 1000000; index++) {
      fs.write(fd, `${index} \n`, () => {});
    }

    console.timeEnd("million");
  });
})();

/*
million write callback
million: 2.059s
memory:800 MB

this takes a lot of memory becasue a million call backs are pillied up in memory

 */

/**
🧠 How fs.write(fd, data, callback) works:

fs.write() is asynchronous, and internally it hands off the write to libuv,
 which manages an OS-level write operation.

If you loop over 1 million fs.write() calls without waiting for the callback to complete
or using any kind of backpressure, Node: Queues all those 1 million chunks in memory.
Continues sending them to the I/O thread pool.
The OS can’t write that fast to disk, so memory starts building up with pending writes.

💥 This causes high memory usage — you’re not literally buffering the whole file in memory
 but you're buffering 1 million pending write tasks (with their data) before disk can catch up.
 */
