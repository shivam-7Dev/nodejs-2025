const fs = require("node:fs");
console.log("Reading file contents...");
fs.readFile("./index.txt", "utf-8", (error, data) => {
  if (error) {
    console.log("Error reading file:", error);
  }
  console.log("File contents:", data);
});
console.log("File read operation started.");
