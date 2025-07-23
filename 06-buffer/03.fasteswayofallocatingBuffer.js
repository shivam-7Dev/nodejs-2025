const { Buffer } = require("node:buffer");

(() => {
  //   console.log({
  //     "constants.MAX_LENGTH ": constants.MAX_LENGTH,
  //   });
  const buffer = Buffer.alloc(100);
  console.log({ buffer });
  //this will alloc buffer of n bytes
  //if you dont provide fill(second argument ) then it is zero filled
  //this filling with 0(default) of user passed value take time
})();

(() => {
  const unsafeBuffer = Buffer.allocUnsafe(100);
  /**
   * Its highly possilbe that there is some data in elements in the buffer
   * because node does not zero out the buffer when allocating through allocunsafe
   */
  console.log({ unsafeBuffer: unsafeBuffer }); //results will very

  unsafeBuffer.fill(0); //to zero out the elements inside the buffer
  console.log({ unsafeBuffer });
})();
(() => {
  const buff = Buffer.alloc(5, 25);
  for (let index = 0; index < buff.length; index++) {
    console.log({
      type: typeof buff[index],
      value: buff[index],
      binary: buff[index].toString(2),
      hex: buff[index].toString(16),
    });
  }
})();
(() => {
  console.log("converting stuff to binary");
  console.log((8).toString(2)); // "1000"   (binary)
  console.log((255).toString(16)); // "ff"   (hexadecimal)
  console.log((10).toString(8)); // "12"     (octal)
})();

(() => {
  const buff = Buffer.from("shivam");
  console.log(buff);

  const buf1 = Buffer.alloc(10);
  const buf2 = Buffer.alloc(14);
  const buf3 = Buffer.alloc(18);
  const totalLength = buf1.length + buf2.length + buf3.length;

  console.log(totalLength);
  // Prints: 42

  const bufA = Buffer.concat([buf1, buf2, buf3], totalLength);

  console.log(bufA);
  // Prints: <Buffer 00 00 00 00 ...>
  console.log(bufA.length);
  // Prints: 42
  /**
   * Buffer.concat() may also use the internal Buffer pool
   *  like Buffer.allocUnsafe() does.
   * Buffer.from(string) may also use the internal Buffer pool
   * like Buffer.allocUnsafe() does.
   * even they are using alloc unsafe but they are safe
   * because they fill the buffer immedeatily
   * also they dont consume more memory
   */
})();
