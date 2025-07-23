/**
 * Character Set and Character Encoding: An In-depth Explanation
 * When working with text data in computing, two concepts play a fundamental role in how text is represented, stored, and transmitted: character sets and character encodings. These terms are closely related but refer to different aspects of text representation.
 *
 * 1. What is a Character Set?
 *
 * Definition:
 * A character set is a collection of characters that a system recognizes and uses.
 * It defines the repertoire or inventory of characters—letters, numbers, symbols, punctuation marks,
 * and even control characters like tabs and line breaks—that are available for use.
 * Or character is a mapping of characters to their unique code points (numeric values).
 * It is just a standard that maps characters to their respective code points.
 * Language experts and standards organizations like Unicode Consortium define character sets.
 *
 *
 *
 * Purpose:
 * A character set determines what characters you can work with in a specific context, such as programming, databases, or text files.
 * For example, English requires characters like A-Z, a-z, digits (0-9), and punctuation marks.
 * But other languages, such as Chinese or Arabic, require thousands of additional characters.
 *
 * Examples of Character Sets:
 * ASCII (American Standard Code for Information Interchange):
 * - One of the earliest character sets.
 * - Contains 128 characters, including:
 *   - Uppercase and lowercase English letters (A-Z, a-z)
 *   - Digits (0-9)
 *   - Punctuation marks (e.g., !, @, #, etc.)
 *   - Control characters (e.g., newline, tab)
 * - ASCII was limited to English and could not handle characters for other languages.
 *
 * Extended ASCII:
 * - An expanded version of ASCII that includes 256 characters (128 extra characters for symbols, accents, and basic non-English letters).
 *
 * Unicode:
 * - A modern and comprehensive character set.
 * - Covers over 143,000 characters, supporting almost every language in the world, including:
 *   - Latin alphabets (used in English, French, etc.)
 *   - Chinese, Japanese, Korean (CJK) characters
 *   - Arabic, Hebrew, Devanagari (used in Hindi and Sanskrit), and many others.
 * - Unicode also includes emojis, mathematical symbols, and ancient scripts.
 *
 * 2. What is Character Encoding?
 * Definition:
 * character encoding system is built in every operating system and programming language.
 * A character encoding is a method of mapping characters from a character set into a sequence of bytes (binary data)
 * so they can be stored in a computer or transmitted over a network.
 *
 * In simpler terms:
 * If a character set defines what characters exist, character encoding specifies how those characters are represented in binary form.
 *
 * Purpose:
 * Computers can only process and store binary data (0s and 1s).
 * Character encoding provides the rules to convert human-readable characters into machine-readable binary format and back again.
 *
 * Examples of Character Encodings:
 * ASCII character Encoding:
 * - Each character is encoded as a single byte (8 bits).
 * - Example: The letter A is encoded as 65 in decimal or 01000001 in binary.
 *
 * UTF-8  character encoding(Unicode Transformation Format - 8-bit):
 * - A widely used encoding for Unicode.
 * - Uses 1 to 4 bytes to represent a character:
 *   - 1 byte for common characters (e.g., English letters)
 *   - 2-4 bytes for less common characters (e.g., emojis, Chinese characters)
 * - Example:
 *   - A → 01000001 (1 byte)
 *   - अ (Hindi character) → 11100000 10100001 10000101 (3 bytes)
 *
 * UTF-16:
 * - Another encoding for Unicode.
 * - Uses 2 or 4 bytes for each character.
 * - Commonly used in systems like Windows.
 *
 * UTF-32:
 * - Uses 4 bytes (32 bits) for every character, regardless of its complexity.
 * - Simple but inefficient in terms of storage.
 *
 * ISO 8859-1 (Latin-1):
 * - An older encoding for Western European languages.
 * - Uses 1 byte per character but supports only 256 characters.
 *
 * Key Differences Between Character Set and Character Encoding
 *
 * | Aspect       | Character Set                             | Character Encoding                          |
 * |--------------|-------------------------------------------|---------------------------------------------|
 * | Definition   | A list of characters that are recognized. | The rules for converting characters into binary data. |
 * | Purpose      | Defines what characters exist.            | Defines how characters are stored or transmitted. |
 * | Examples     | ASCII, Unicode                            | ASCII, UTF-8, UTF-16, ISO 8859-1            |
 * | Focus        | Focuses on the characters themselves.     | Focuses on binary representation.           |
 *
 * How They Work Together
 * Step 1: The Character Set Defines the Characters
 * - For example, in Unicode, the character A is assigned a code point of U+0041.
 *
 * Step 2: The Character Encoding Maps the Code Point to Bytes
 * - In UTF-8, the code point U+0041 is represented as the single byte 01000001.
 * - In UTF-16, the same code point is represented as 00000000 01000001 (2 bytes).
 *
 * Real-World Example
 * Suppose you write the word "Hello, 🌍" (Hello with an Earth emoji) in a file:
 *
 * Character Set:
 * - You are using the Unicode character set because it includes H, e, l, o, and the emoji 🌍.
 *
 * Character Encoding:
 * - If encoded in UTF-8, the binary representation is:
 *   - H -> 01001000
 *   - e -> 01100101
 *   - l -> 01101100
 *   - o -> 01101111
 *   - , -> 00101100
 *   - Space -> 00100000
 *   - 🌍 -> 11110000 10011111 10001000 10001101 (4 bytes for the emoji)
 * - The file would store these binary sequences.
 *
 * Challenges with Character Sets and Encodings
 * - Mismatched Encodings:
 *   - If a file encoded in UTF-8 is read as ISO 8859-1, special characters (like emojis) may appear as garbled text.
 *
 * - Storage and Transmission:
 *   - Using inefficient encodings (e.g., UTF-32) can lead to unnecessarily large file sizes.
 *
 * - Backward Compatibility:
 *   - Older systems may only support limited character sets like ASCII, causing issues with Unicode characters.
 *
 * Why Character Encoding Matters
 * - Globalization: Applications must support multiple languages and scripts.
 * - Data Integrity: Ensures text data is stored and transmitted correctly.
 * - Compatibility: Prevents text from appearing as "mojibake" (garbled characters).
 *
 * Conclusion
 * In summary:
 * - Character Set: Defines what characters exist and assigns them unique code points.
 * - Character Encoding: Specifies how those code points are represented in binary for storage or transmission.
 * - Together, they form the backbone of how text data is processed, ensuring that people worldwide can write and communicate in their preferred languages.
 */
