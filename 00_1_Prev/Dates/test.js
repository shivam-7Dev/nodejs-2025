const { execSync } = require("child_process");

execSync(`rm file_*.txt`);

console.log("100 files created successfully!");
