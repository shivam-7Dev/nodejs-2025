const fs = require("node:fs/promises");

const CREATE_FILE = "create";
const RENAME_FILE = "rename"; //same as move
const DELETE_FILE = "delete";
const APPEND_DATA = "append";
const createFilewithData = async (path) => {
  try {
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
const createfile = async (contentArray) => {
  try {
    const filePath = contentArray.pop();
    console.log({ filePath });

    /**
     * create file long way.
     * open file in read mode and then close it
     */

    // const fileHandler = await fs.open(filePath, "r");

    // await fileHandler.write(" ");
    // await fileHandler.close();

    createFilewithData(filePath);
    console.log("file created");
  } catch (error) {
    console.log("error creating file", error);
  }
};

const renamefile = async (contentArray) => {
  console.log({ contentArray });
};

const deleteFile = async (contentArray) => {
  try {
    if (!Array.isArray(contentArray) || contentArray.length === 0) {
      console.log("No file path provided.");
      return;
    }

    const filePath = contentArray[contentArray.length - 1]; // Do not mutate the array
    console.log({ filePath });

    await fs.unlink(filePath);
    console.log("File deleted successfully.");
  } catch (error) {
    if (error.code === "ENOENT") {
      console.log("File does not exist:", error.path);
    } else {
      console.log("Error deleting file:", error);
    }
  }
};
const appendData = async (contentArray) => {
  console.log({ contentArray });
};

//watch for changes in command.txt file
const readBufferAndTakeAction = (buff) => {
  const content = buff.toString("utf-8");

  const contentArray = content.split(" ");
  if (content.includes(CREATE_FILE)) {
    createfile(contentArray);
  } else if (content.includes(RENAME_FILE)) {
    renamefile(contentArray);
  } else if (content.includes(DELETE_FILE)) {
    deleteFile(contentArray);
  } else if (content.includes(APPEND_DATA)) {
    appendData(contentArray);
  }
};

(async () => {
  try {
    const fileHandler = await fs.open("./command.txt", "r");
    fileHandler.on("changeEvent", async () => {
      /**
       * read the file: 2 ways
       * read full data at once in memory
       * read with the help of streams
       */
      const { size } = await fileHandler.stat();
      console.log(size);

      //creat buffer of the size

      const buff = Buffer.alloc(size);
      const offset = 0;
      const lenght = buff.byteLength;
      const readPosition = 0;

      console.log({ buff, offset, lenght, readPosition });
      //full the buffer above with the data
      await fileHandler.read(buff, offset, lenght, readPosition);
      readBufferAndTakeAction(buff);
    });
    const watcherObj = await fs.watch("./command.txt");

    for await (const event of watcherObj) {
      if (event.eventType === "change") {
        fileHandler.emit("changeEvent");
      }
    }
  } catch (error) {
    console.error({ error });
  }
})();
