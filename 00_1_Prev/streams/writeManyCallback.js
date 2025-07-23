const fs = require("node:fs");

console.time("writeManyCallback");

fs.open("writeManyCallback.txt", "w", (err, fd) => {
  if (err) {
    console.log(err);
    return;
  }
  for (let i = 0; i < 1000000; i++) {
    fs.writeSync(fd, `Hello World ${i} \n`, (err) => {
      if (err) {
        console.log(err);
        return;
      }
    });
  }

  console.timeEnd("writeManyCallback");
  //writeManyCallback: 14.083s
});
