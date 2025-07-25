const fs = require("node:fs/promises");

const createFile = async (fileData) => {
  try {
    const path = fileData.split(" ").pop();
    await fs.writeFile(path, "");
    /**
     * if file already exist the writeFileData will append data
     *
     */
    console.log("file create for path", path);
  } catch (error) {
    console.log("error creating file", error);
  }
};

const deleteFile = (path) => {};

const moveFile = (path) => {};

const createFileAndAppData = (path, data) => {};

const appendDataToFile = (path, data) => {};

(async () => {
  try {
    //wathc for changes in the command file
    const watcher = fs.watch("./command.txt");
    //open file in read mode
    const fileHandler = await fs.open("./command.txt", "r");

    fileHandler.on("changeEvent", async () => {
      //file has changed this means you have to read from the file
      const { size } = await fileHandler.stat();
      const buff = Buffer.alloc(size);
      const offset = 0;
      const position = 0;
      const lenght = buff.byteLength;

      await fileHandler.read(buff, offset, lenght, position);

      const fileData = buff.toString("utf-8");

      //check for different cases here

      if (fileData.includes("create file")) {
        //get the file path and call the create file funciton
        createFile(fileData);
      }
    });

    for await (const event of watcher) {
      if (event.eventType == "change") {
        fileHandler.emit("changeEvent");
      }
    }
  } catch (error) {
    console.error(error);
  }
})();
