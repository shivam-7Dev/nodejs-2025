const fs = require("node:fs");
const data = "I am creating  new file and writging this data to that file";
fs.writeFile("./newfile.txt", data, (error) => {
  if (error) {
    console.error("Error writing file:", error);
    return;
  }
  console.log("File written successfully");
});
