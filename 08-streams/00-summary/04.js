const fs = require("fs");

(async () => {
  console.time("time");

  fs.open("./04.callback-.txt", "w", (err, fd) => {
    if (err) {
      console.log("err", err);
      return;
    }

    for (let index = 0; index < 1000000; index++) {
      //use the callback version wirte
      fs.write(fd, `${index} \n`, (err, written, str) => {});
    }
    console.timeEnd("time");
  });
})();

/**
 * memeory(ram): 1 GB[High memory usaage]
 * cup: 50%
 * time: 3.282s
 */

/**
 * This is callback version this will not wait
 * For loop will run very quickly queueing up  1,000,00 write operation
 * in memeory almost instantly
 * this will consule a lot of memeory
 */
