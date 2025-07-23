const { Buffer } = require("node:buffer");
(() => {
  console.log("===number===");
  console.log(Buffer.poolSize); //8192
  console.log("===number===");
})();

(() => {
  console.log("===one===");
  const buffer = Buffer.alloc(7);
  buffer[0] = 69; //decimal
  buffer[1] = 0b01000110;
  buffer[2] = 0x47;
  buffer[3] = 72;
  console.log(buffer.toString("utf-8")); //EFGH
  console.log("===one===");
})();

(() => {
  console.log("===Two===");
  const buffer = Buffer.from("EFGH"); //utf-8 is default encoding
  console.log(buffer.toString("utf-8")); //EFGH

  const buffer2 = Buffer.from("EFGH", "utf-8");
  console.log(buffer2.toString("utf-8"));

  const buffer3 = Buffer.from("shivam 😃💁", "utf-16le");
  console.log(buffer3.toString("utf-16le")); //shivam 😃💁
  console.log(buffer3.toString("utf-8")); //shivam =��=؁�

  console.log("===TWO===");
})();

(() => {
  console.log("*******Start*********");

  /**
 (method) BufferConstructor.alloc(size: number, fill?: string | Uint8Array | number, encoding?: BufferEncoding): Buffer<ArrayBuffer>
 */
  const memoryContainer = Buffer.alloc(4); //4 bytes(32 bits)
  console.log(memoryContainer); //<Buffer 00 00 00 00>
  memoryContainer[0] = 0xf4;
  memoryContainer[1] = 0x34;
  memoryContainer[2] = 0x00;
  memoryContainer[3] = 0xff; // 1111 1111 // 255 decimal

  console.log({
    ascii: memoryContainer.toString("ascii"),
    base64: memoryContainer.toString("base64"),
    utf8: memoryContainer.toString("utf-8"),
    hex: memoryContainer.toString("hex"),
  });

  /**
   * minimum decimal value buffer can hold is 0(decimal)
   * max decimal value buffer can hold is 255(decimal)
   * because size of an element of buffer is 8bit(one byte)
   * and max a byte can store is 255
   */
  console.log("======END==========");
})();

(() => {
  console.log("*******Start*********");
  // 0100 1000 0110 1001 0010 0001
  const buffer = Buffer.alloc(3);
  buffer[0] = 0x48;
  buffer[1] = 0x69;
  buffer[2] = 0x21;
  // run the buffer through character encoder
  console.log(buffer.toString("utf-8")); //Hi!

  console.log("======END==========");
})();

(() => {
  console.log("*******Binary Writing Examples*********");

  const buffer = Buffer.alloc(3);

  // Method 1: Using binary literals (ES6+)
  buffer[0] = 0b01001000; // Binary literal for 72 (H)
  buffer[1] = 0b01101001; // Binary literal for 105 (i)
  buffer[2] = 0b00100001; // Binary literal for 33 (!)

  console.log("Method 1 - Binary literals:", buffer.toString("utf-8")); // Hi!

  // Method 2: Using parseInt with binary strings
  const buffer2 = Buffer.alloc(3);
  buffer2[0] = parseInt("01001000", 2); // Convert binary string to decimal
  buffer2[1] = parseInt("01101001", 2);
  buffer2[2] = parseInt("00100001", 2);

  console.log("Method 2 - parseInt:", buffer2.toString("utf-8")); // Hi!

  // Method 3: Using Buffer.from with an array of binary values
  const binaryValues = [
    0b01001000, // H
    0b01101001, // i
    0b00100001, // !
  ];
  const buffer3 = Buffer.from(binaryValues);

  console.log("Method 3 - Buffer.from:", buffer3.toString("utf-8")); // Hi!

  // Method 4: Helper function for easier binary writing
  function writeBinary(buffer, index, binaryString) {
    buffer[index] = parseInt(binaryString, 2);
  }

  const buffer4 = Buffer.alloc(3);
  writeBinary(buffer4, 0, "01001000"); // H
  writeBinary(buffer4, 1, "01101001"); // i
  writeBinary(buffer4, 2, "00100001"); // !

  console.log("Method 4 - Helper function:", buffer4.toString("utf-8")); // Hi!

  console.log("======END==========");
})();

(() => {
  console.log("*******Different Input Formats*********");

  const buffer = Buffer.alloc(5);

  // 1. Decimal numbers
  buffer[0] = 72; // Decimal → stored as byte

  // 2. Hexadecimal numbers
  buffer[1] = 0x65; // Hex → stored as byte

  // 3. Binary literals
  buffer[2] = 0b01101100; // Binary → stored as byte

  // 4. Octal numbers
  buffer[3] = 0o154; // Octal → stored as byte

  // 5. Character codes
  buffer[4] = "o".charCodeAt(0); // String → ASCII → stored as byte

  console.log("Result:", buffer.toString("utf-8")); // "Hello"
  console.log("Raw bytes:", Array.from(buffer)); // [72, 101, 108, 108, 111]

  // You can also write strings directly
  const buffer2 = Buffer.from("Hello", "utf-8");
  console.log("From string:", buffer2); // <Buffer 48 65 6c 6c 6f>

  // Or write arrays of any number format
  const buffer3 = Buffer.from([0x48, 101, 0b01101100, 0o154, 111]);
  console.log("Mixed formats:", buffer3.toString("utf-8")); // "Hello"

  console.log("======END==========");
})();
