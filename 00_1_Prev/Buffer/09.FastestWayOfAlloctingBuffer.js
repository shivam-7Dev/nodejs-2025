/**
 * fastest way of allocating buffer
 * Buffer.allocUnsafe(size)
 *
 */
const buffer = Buffer.alloc(10, 2); // allocating 10 bytes
/**
 * this will allocate 10 bytes of memory and fill it with 2
 * this filling with 2 takes time and is not the fastest way of allocating buffer
 */
console.log(buffer); // prints <Buffer 02 02 02 02 02 02 02 02 02 02>

const buffer1 = Buffer.allocUnsafe(1024 * 1024); // allocating one megabyte of memory
/**
 * this will allocate 10 bytes of memory but it does not fill it with any value
 * this is the fastest way of allocating buffer
 * allocUnsafe is not bothered with 0ing out of filling the location with any value
 * there could be some existing data in the memory location that is allocated
 */

console.log(buffer1); // prints <Buffer 00 00 00 00 00 00 00 00 00 00>

for (let i = 0; i < buffer1.length; i++) {
  if (buffer1[i] !== 0) {
    console.log("buffer1 is not empty", buffer1[i].toString(2));
  }
}

console.log(Buffer.poolSize); // prints 8192
/**
 * Buffer.allocUnsafe() uses a pool of pre-allocated memory to allocate new Buffers
 * this pool is called the slab allocator
 * the slab allocator is a memory management mechanism intended for the efficient memory allocation of kernel objects
 * the slab allocator is a collection of fixed-size memory blocks
 * the slab allocator is used to reduce fragmentation and improve memory allocation performance
 *
 */
