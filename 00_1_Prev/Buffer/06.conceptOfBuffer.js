/**
 * concept of buffer
 *
 * In Node.js, a Buffer is a global object that is used to handle binary data directly.
 * Buffers are especially useful because JavaScript (prior to ES6) did not have a mechanism to directly manipulate raw binary data,
 * as its primary data type for strings is UTF-16 encoded text.
 * Buffers enable Node.js to interact with streams of data like files, sockets, or any binary protocols.
 */

/**
 * What is a buffer?
 * A Buffer is a temporary storage location in memory that is used to store data while it is being transferred from one place to another.
 * It is a global class that can be accessed in an application without importing any module.
 * Buffers are used to store raw binary data.
 * The data stored in a Buffer object can be in any format like JSON, image, video, audio, etc.
 * Buffers are used to read or write data to or from streams, file systems, and other sources.
 * Buffers are used to manipulate binary data directly.
 * Buffers are instances of the Buffer class in Node.js.
 * Buffers are similar to arrays of integers but correspond to raw memory allocations outside the V8 heap.
 * Buffers are used to store data in the form of integers, floats, and other data types.
 * A Buffer is a fixed-size chunk of memory allocated outside the JavaScript V8 engine.
 * Specifically designed to deal with binary data.
 * A Buffer is essentially a sequence of bytes that allows reading and writing of raw data.
 */

/**
 * Why do we need buffers?
 * JavaScript's Limitation: JavaScript's native string handling is designed for Unicode and not efficient for raw binary data. A buffer bridges this gap by enabling raw access to binary data.
 *
 * Streaming Data: When dealing with large files or network requests, you cannot load the entire data into memory at once. Instead, data is processed in smaller chunks (streams). Buffers store these chunks temporarily.
 *
 * Interacting with C++ Libraries: Node.js bindings to native modules written in C++ use buffers to exchange data.
 */

/**
 * Key characteristics of buffers
 * Raw Binary Data: Buffers store raw bytes. Each byte is represented as a number between 0 and 255.
 * Fixed Size: Once created, the size of a buffer cannot be changed.
 * Direct Memory Access: Buffers allow direct access to memory, making operations like file I/O or network transfers faster.
 * Global Object: You don’t need to import or require anything to use buffers. They are globally available in Node.js.
 */

/**
 * Note
 * In Node.js, the default size of a buffer is not fixed because buffers are typically created with a specified size or from existing data.
 * However, when you allocate a new buffer without specifying the size, you must provide the size explicitly.
 * const buffer = Buffer.alloc(10); // Creates a buffer of 10 bytes
 * buffer are very similar to arrays that means they have elements that can be accessed by index.
 * so buffer has different elements just like an array
 * In node js each element in buffer holds 8 bits and exactly 8 bits
 * so each element in buffer is one byte (0 to 255)
 * once you allocate the buffer you can't change the size of the buffer
 * if you add extra stuff to the buffer then node will discard the extra part because
 * it does not have extra space to store the extra data
 *
 *
 * Buffer are datastructure just like other data structure in node js like array, object, string
 * They are data structure speciafically designed to handle binary data
 *
 */
// Example usage of Buffer

const buffer = Buffer.alloc(10); // Creates a buffer of 10 bytes

const bufferFromString = Buffer.from("Hello, World!"); // Size is determined by the length of the string

console.log(bufferFromString.length); // Prints: 13
console.log(Object.getOwnPropertyNames(bufferFromString.__proto__));
/**
 * [
  'constructor',      'readBigUInt64LE',  'readBigUInt64BE',  'readBigUint64LE',
  'readBigUint64BE',  'readBigInt64LE',   'readBigInt64BE',   'writeBigUInt64LE',
  'writeBigUInt64BE', 'writeBigUint64LE', 'writeBigUint64BE', 'writeBigInt64LE',
  'writeBigInt64BE',  'readUIntLE',       'readUInt32LE',     'readUInt16LE',
  'readUInt8',        'readUIntBE',       'readUInt32BE',     'readUInt16BE',
  'readUintLE',       'readUint32LE',     'readUint16LE',     'readUint8',
  'readUintBE',       'readUint32BE',     'readUint16BE',     'readIntLE',
  'readInt32LE',      'readInt16LE',      'readInt8',         'readIntBE',
  'readInt32BE',      'readInt16BE',      'writeUIntLE',      'writeUInt32LE',
  'writeUInt16LE',    'writeUInt8',       'writeUIntBE',      'writeUInt32BE',
  'writeUInt16BE',    'writeUintLE',      'writeUint32LE',    'writeUint16LE',
  'writeUint8',       'writeUintBE',      'writeUint32BE',    'writeUint16BE',
  'writeIntLE',       'writeInt32LE',     'writeInt16LE',     'writeInt8',
  'writeIntBE',       'writeInt32BE',     'writeInt16BE',     'readFloatLE',
  'readFloatBE',      'readDoubleLE',     'readDoubleBE',     'writeFloatLE',
  'writeFloatBE',     'writeDoubleLE',    'writeDoubleBE',    'asciiSlice',
  'base64Slice',      'base64urlSlice',   'latin1Slice',      'hexSlice',
  'ucs2Slice',        'utf8Slice',        'asciiWrite',       'base64Write',
  'base64urlWrite',   'latin1Write',      'hexWrite',         'ucs2Write',
  'utf8Write',        'parent',           'offset',           'copy',
  'toString',         'equals',           'inspect',    
      'compare',
  'indexOf',          'lastIndexOf',      'includes',   
      'fill',
  'write',            'toJSON',           'subarray',   
      'slice',
  'swap16',           'swap32',           'swap64',     
      'toLocaleString'
]
 */

const bufferFromArray = Buffer.from([1, 2, 3, 4, 5]); // Size is determined by the length of the array
console.log(bufferFromArray.length); // Prints: 5

// 0100 1000 0110 1001 0010 0001  // 3 bytes (24 bits) of binary data
// write this binary data to the buffer

//create  a buffer of 3 bytes (24 bits)

const buffer1 = Buffer.alloc(3);

buffer1[0] = 0b01001000;
buffer1[1] = 0b01101001;
buffer1[2] = 0b00100001;
console.log(buffer1.toString()); // Prints: Hi!

const buff = Buffer.from([0b01001000, 0b01101001, 0b00100001]);
console.log(buff.toString()); // Prints: Hi!
