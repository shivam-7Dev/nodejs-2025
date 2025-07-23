const fs = require("node:fs");
console.time("writeManySync");

for (let i = 0; i < 1000000; i++) {
  fs.writeFileSync("writeMany.txt", `Hello World ${i} \n`, { flag: "a" });
  // writeManySync: 21:09.314 (m:ss.mmm)
}

console.timeEnd("writeManySync");
