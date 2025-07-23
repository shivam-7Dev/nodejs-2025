const crypto = require("node:crypto");

const os = require("node:os");

// Get the number of CPU cores
const numCPUs = os.cpus().length;
console.log(`Number of CPU cores: ${numCPUs}`); //8

// Example: Using the thread pool to perform cryptographic operations
process.env.UV_THREADPOOL_SIZE = 8; // Set the thread pool size to 8
const start = Date.now();

const Max_CALL = 8;

for (let i = 0; i < Max_CALL; i++) {
  crypto.pbkdf2(`password`, "salt", 100000, 64, "sha512", (err, derivedKey) => {
    if (err) {
      console.error("Error generating key:", err);
      return;
    }
    console.log("Time taken:", Date.now() - start, "ms");
  });
}

// const start = Date.now();

// crypto.pbkdf2Sync("password", "salt", 100000, 64, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 64, "sha512");

// console.log("Time taken:", Date.now() - start, "ms");

// pbkdf2 is a cpu intensive method is offloaded to  libuvs thread pool
