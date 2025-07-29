// Summary of Node.js Buffer Concepts

(() => {
  /**
   * Concept 1: What is a Buffer?
   *
   * - A Buffer is a global class in Node.js used to handle raw binary data.
   * - It represents a fixed-size chunk of memory allocated outside the V8 JavaScript engine heap.
   * - Each element in a Buffer is a single byte (8 bits).
   * - The value of each byte can range from 0 (decimal) to 255 (decimal).
   */
  console.log("--- Concept 1: What is a Buffer? ---");
  const buf = Buffer.alloc(4); // Allocates 4 bytes, initialized to zeros
  console.log(buf); // <Buffer 00 00 00 00>
  console.log(`Buffer element size: 1 byte (0-255)`);
  console.log("--------------------------------------\n");
})();

(() => {
  /**
   * Concept 2: Allocating Buffers (Safe vs. Unsafe)
   *
   * There are three main ways to create a Buffer.
   */
  console.log("--- Concept 2: Allocating Buffers ---");

  // Method A: Buffer.alloc(size, [fill]) - The SAFE way
  // - Allocates a new buffer of `size` bytes.
  // - It is "safe" because it automatically fills the buffer with zeros,
  //   preventing old, sensitive data from being exposed.
  // - This zero-filling process makes it slightly slower than allocUnsafe.
  const safeBuffer = Buffer.alloc(10);
  console.log("Buffer.alloc(10):", safeBuffer);

  // Method B: Buffer.allocUnsafe(size) - The FAST way
  // - Allocates a new buffer of `size` bytes without initializing it.
  // - It's faster but "unsafe" because the allocated memory segment might
  //   contain old data from other parts of your system.
  // - You MUST fill it yourself before using it to avoid data leaks.
  const unsafeBuffer = Buffer.allocUnsafe(10);
  console.log("Buffer.allocUnsafe(10) (may contain old data):", unsafeBuffer);
  unsafeBuffer.fill(0); // Always fill an unsafe buffer!
  console.log("Unsafe buffer after .fill(0):", unsafeBuffer);

  // Method C: Buffer.from(data, [encoding])
  // - Creates a buffer from a string, array, or another buffer.
  // - This is safe because the buffer is immediately filled with the provided data.
  const fromStringBuffer = Buffer.from("Hello");
  console.log('Buffer.from("Hello"):', fromStringBuffer); // <Buffer 48 65 6c 6c 6f>
  console.log("---------------------------------------\n");
})();

(() => {
  /**
   * Concept 3: Writing to a Buffer
   *
   * - You can write data to a buffer index by index, just like an array.
   * - The JavaScript engine automatically converts numbers from any base
   *   (decimal, hex, binary, octal) into a single byte value for storage.
   */
  console.log("--- Concept 3: Writing to a Buffer ---");
  const writeBuf = Buffer.alloc(5);

  writeBuf[0] = 72; // Decimal
  writeBuf[1] = 0x65; // Hexadecimal for 'e'
  writeBuf[2] = 0b01101100; // Binary for 'l'
  writeBuf[3] = 0o154; // Octal for 'l'
  writeBuf[4] = "o".charCodeAt(0); // From a character code

  // All the above formats are stored as bytes (0-255).
  console.log("Raw byte values:", Array.from(writeBuf)); // [ 72, 101, 108, 108, 111 ]
  console.log("Decoded as string:", writeBuf.toString("utf-8")); // "Hello"
  console.log("--------------------------------------\n");
})();

(() => {
  /**
   * Concept 4: Reading from a Buffer & Character Encoding
   *
   * - The `.toString(encoding)` method decodes the binary data into a human-readable string.
   * - You MUST use the correct encoding that matches how the data was created.
   * - Using the wrong encoding will result in garbled text ("mojibake").
   */
  console.log("--- Concept 4: Reading & Encoding ---");
  const multiByteString = "shivam 😃";
  const utf8Buffer = Buffer.from(multiByteString, "utf-8");
  const utf16Buffer = Buffer.from(multiByteString, "utf-16le");

  console.log("Original String:", multiByteString);
  console.log("UTF-8 Buffer Length:", utf8Buffer.length); // 11 bytes
  console.log("UTF-16LE Buffer Length:", utf16Buffer.length); // 14 bytes

  // Correctly decoding the UTF-16LE buffer
  console.log("Correct decoding (utf-16le):", utf16Buffer.toString("utf-16le"));

  // Incorrectly decoding the UTF-16LE buffer as UTF-8
  console.log("Incorrect decoding (as utf-8):", utf16Buffer.toString("utf-8"));
  console.log("-------------------------------------\n");
})();

(() => {
  /**
   * Concept 5: Buffer Operations and Number Conversions
   *
   * - `Buffer.concat()` joins multiple buffers into one.
   * - The `.toString(radix)` method on a number converts it to a string
   *   representation in a different base (like binary or hex).
   */
  console.log("--- Concept 5: Operations & Conversions ---");
  const buf1 = Buffer.from("Hello");
  const buf2 = Buffer.from(" World");
  const combinedBuf = Buffer.concat([buf1, buf2]);
  console.log("Concatenated Buffer:", combinedBuf.toString());

  const myNumber = 255;
  console.log(`Number ${myNumber} in different bases:`);
  console.log(" -> Binary:", myNumber.toString(2)); // "11111111"
  console.log(" -> Hex:", myNumber.toString(16)); // "ff"
  console.log("-------------------------------------------\n");
})();
