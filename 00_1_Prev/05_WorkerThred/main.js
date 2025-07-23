const { Worker } = require("node:worker_threads");

// Create a new worker instance
const worker = new Worker("./worker.js");

// Send a message to the worker
worker.postMessage(40); // Example input for the Fibonacci calculation

worker.on("message", (message) => {
  console.log("Message from worker:", message);
});

worker.on("error", (error) => {
  console.error("Worker error:", error);
});

worker.on("exit", (code) => {
  if (code !== 0) {
    console.error(`Worker stopped with exit code ${code}`);
  }
});
