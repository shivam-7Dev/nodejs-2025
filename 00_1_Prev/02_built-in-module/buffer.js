/**
 * Buffer is a global class in Node.js.
 * A temporary storage area in memory that holds raw binary data.
 * Buffers have a fixed size and the entire data is loaded in memory at once.
 * They are like a bucket of water.
 */

const buffer = Buffer.from("Hello, World!");
console.log(buffer); // <Buffer 48 65 6c 6c 6f 2c 20 57 6f 72 6c 64 21>
console.log(buffer.toString()); // Hello, World!
console.log(buffer.toJSON());
/**
 * {
 *   type: 'Buffer',
 *   data: [
 *     72, 101, 108, 108, 111,
 *     44,  32,  87, 111, 114,
 *    108, 100,  33
 *   ]
 * }
 */

/**
 * Buffers hold binary data, but Node.js converts them to decimal or hexadecimal
 * so that it does not flood the console.
 */

// -------- BUFFER EXAMPLES --------

// 1. Creating buffers
const buf1 = Buffer.from("Hello World");
console.log("Buffer 1:", buf1);
console.log("As string:", buf1.toString());

// 2. Working with buffer methods
const buf2 = Buffer.alloc(5); // Create empty buffer of length 5
buf2.write("Hi");
console.log("Buffer 2:", buf2);

// 3. Buffer concatenation
const buf3 = Buffer.from(" Node.js");
const combined = Buffer.concat([buf1, buf3]);
console.log("Combined buffer as string:", combined.toString());

/**
 * Additional Information:
 * - Buffers are useful for handling binary data, such as reading from or writing to files, network protocols, or other binary data.
 * - Buffers are not resizable. Once you create a buffer, you cannot change its size.
 * - Buffers can be created from strings, arrays, or other buffers.
 * - Buffers provide various methods for reading and writing data, such as readUInt8, writeUInt8, etc.
 */

/**
 * Stream:
 * A way to handle data flow.
 * Processes data in chunks(buffer).
 * No size limitation.
 * Data processed piece by piece.
 * Like a water pipe.
 *
 * Relationship:
 * Streams use buffers internally.
 * Each 'chunk' in a stream is a buffer.
 * Buffers are the building blocks of streams.
 */

// ✅ Recommended ways
const buff1 = Buffer.from("Hello"); // From string
const buff2 = Buffer.alloc(5); // Allocate and zero-fill
const buff3 = Buffer.allocUnsafe(5); // Allocate without zeroing

// ❌ Deprecated way - Don't use
// const buf4 = new Buffer("Hello");             // Security/reliability risks

// Why Buffer.from() instead of new Buffer()?
// 1. Better security (prevents uninitialized memory exposure)
// 2. Clearer intentions
// 3. More predictable behavior
