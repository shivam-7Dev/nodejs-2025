const fs = require("node:fs");

const data = fs.readFileSync("./index.txt", "utf-8");
console.log(data);

/**
 * reading from a file and at the same time writing to another file
 */

fs.readFile("./index.txt", "utf-8", (error, data) => {
  /**
   * The approach you are using to read and write files with fs.readFile and fs.writeFile
   * reads the entire file into memory before writing it to another file.
   *
   * This can be problematic for large files due to the following reasons:
   * (Memory Usage) => :Reading a large file into memory all at once can consume a significant amount of RAM,
   *                     potentially leading to memory exhaustion and crashes if the file is too large.
   * (Performance) => Reading and writing large files in one go can be slow and inefficient,
   *                  as it requires loading the entire file into memory before any processing can begin.
   */
  if (error) {
    console.log("Error reading file:", error);
  }

  console.log("File contents:", data);

  fs.writeFile("./test1.txt", data, (error) => {
    if (error) {
      console.log("Error writing file:", error);
    }
    console.log("File written successfully");
  });
});
