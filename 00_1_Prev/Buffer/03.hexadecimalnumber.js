/**
 * Hexadecimal numbers are numbers that are represented in base 16. The numbers range from 0-9 and then A-F.
 * 16 means that it requires 16 digits to represent the number.
 * 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F
 * 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
 * It is base 16 number system.
 *
 * Conversion between hexadecimal and binary is insanely easy.
 * Each hexadecimal digit corresponds to 4 binary digits.
 * Each 4 bits you pick only one hexadecimal digit can represent it:
 * 0000 -> 0
 * 0001 -> 1
 * 0010 -> 2
 * 0011 -> 3
 * 0100 -> 4
 * 0101 -> 5
 * 0110 -> 6
 * 0111 -> 7
 * 1000 -> 8
 * 1001 -> 9
 * 1010 -> A
 * 1011 -> B
 * 1100 -> C
 * 1101 -> D
 * 1110 -> E
 * 1111 -> F
 *
 * So if you have 4000 bits you can represent it with 1000 hexadecimal digits.
 * This reduces the number of digits you need to represent a number.
 * Hexadecimal numbers are used in many places in computing, such as in HTML color codes.
 * If you want to look at the raw content of the memory in a computer, you should prefer hexadecimal numbers.
 * Instead of seeing in 0 and 1 which are a lot of characters, you can see in hexadecimal numbers which are fewer characters.
 *
 * To tell a number is hexadecimal, you can use 0x prefix.
 * 0x10 -> 16
 * 0x1A -> 26
 * 0x is not part of the number
 *
 * 0x456 -> 4 * 16^2 + 5 * 16^1 + 6 * 16^0 = 1126
 * 0xfa3c -> 15 * 16^3 + 10 * 16^2 + 3 * 16^1 + 12 * 16^0 = 64060
 * 0xffffff -> 15 * 16^5 + 15 * 16^4 + 15 * 16^3 + 15 * 16^2 + 15 * 16^1 + 15 * 16^0 = 16777215
 * 0xfffffff into binary -> 111111111111111111111111
 * Group binary digits into groups of 4 from right to left (because 1 hexadecimal digit = 4 binary bits):
 * 1111111111 ⇒ 0000 0011 1111 1111 (Add leading zeroes to make the total bits a multiple of 4.)
 * Convert each group of 4 bits into a hexadecimal digit:
 * 0000 0011 1111 1111 ⇒ 0x3FF
 *
 * Pro Tip:
 * To quickly convert any binary number to hexadecimal:
 * Group the binary digits into sets of 4 bits (add leading zeroes if necessary).
 * Use a binary-to-hex lookup table for each group.
 */

// Function to convert hexadecimal to decimal
function hexToDecimal(hex) {
  return parseInt(hex, 16);
}

// Example usage
console.log(hexToDecimal("0x456")); // Output: 1126
console.log(hexToDecimal("0xfa3c")); // Output: 64060
