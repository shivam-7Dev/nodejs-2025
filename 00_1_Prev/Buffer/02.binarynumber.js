// binary number or base 2 number system is used to represent data in computers
/**
 * 2^0 = 1
 * 2^1 = 2
 * 2^2 = 4
 * 2^3 = 8
 * 2^4 = 16
 * 2^5 = 32
 * 2^6 = 64
 * 2^7 = 128
 * 2^8 = 256
 */

/**
 * 1 bit: 0 or 1
 * 1 byte: 8 bits or 2^3 bits
 * 1 kilobyte (KB): 1024 bytes (2^10)
 * 1 megabyte (MB): 1024 kilobytes (2^20)
 * 1 gigabyte (GB): 1024 megabytes (2^30)
 * 1 terabyte (TB): 1024 gigabytes (2^40)
 * 1 petabyte (PB): 1024 terabytes (2^50)
 */

/**
 * Converting Binary to Decimal:
 * - To convert a binary number to decimal, multiply each bit by 2 raised to the power of its position (from right to left).
 * - Add the results together to get the decimal equivalent.
 * - For example, the binary number 1010 is converted to decimal as follows:
 *  1 * 2^3 + 0 * 2^2 + 1 * 2^1 + 0 * 2^0 = 8 + 0 + 2 + 0 = 10
 * - Therefore, the binary number 1010 is equivalent to the decimal number 10.
 */

// Function to convert binary to decimal
function binaryToDecimal(binary) {
  let decimal = 0;
  for (let i = 0; i < binary.length; i++) {
    decimal += parseInt(binary[binary.length - 1 - i]) * Math.pow(2, i);
  }
  return decimal;
}

// Example usage
console.log(binaryToDecimal("1010")); // Output: 10
