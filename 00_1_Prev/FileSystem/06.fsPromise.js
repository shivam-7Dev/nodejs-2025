const fsPromise = require("fs/promises");

const path = require("path");

const filePath = path.join(__dirname, "./data.txt");

//open file

(async () => {
  const fileHandle = await fsPromise.open(filePath, "r");
  try {
    const fileSize = await fileHandle.stat();

    const buffer = Buffer.alloc(fileSize.size);

    // read data from the file and store in the buffer
    /**
   *  buffer:
        The buffer into which the data will be read.
         This is a Buffer object that you have created to hold the data read from the file.
    * 0 (second parameter):
        The offset in the buffer at which to start writing the data. 
        In this case, it is 0, meaning the data will be written starting from the beginning of the buffer.
        
    * fileSize.size (third parameter):

        The number of bytes to read from the file. 
        This should be the size of the file or the amount of data you want to read.
       
    * 0 (fourth parameter):

        The position in the file from which to start reading.
         In this case, it is 0, meaning the reading will start from the beginning of the file.
   */
    await fileHandle.read(buffer, 0, fileSize.size, 0);

    // Convert the buffer to a string and log it
    console.log(buffer.toString("utf8"));

    // Close the file
    await fileHandle.close();
  } catch (error) {}
})();
