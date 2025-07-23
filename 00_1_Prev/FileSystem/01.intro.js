const fs = require("node:fs");
const path = require("node:path");

const pathToFile = path.join(__dirname, "data.txt");

// fs.readFile(pathToFile, "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

const filePath = path.join(__dirname, "./data.txt");

// Read the file with encoding set to null to get a Buffer
fs.readFile(filePath, { encoding: null }, (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data.length); // Outputs the raw buffer data
  console.log(data.toString("utf8")); // Converts the buffer to a string and outputs it
});
