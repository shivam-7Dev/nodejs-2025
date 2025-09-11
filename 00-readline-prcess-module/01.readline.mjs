import { createInterface } from "node:readline/promises";
// or: const { createInterface } = require('node:readline/promises');

const processData = (line) => {
  console.log(`Received: ${line}`);
};

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  // Other options (below)
});

// rl.on("line", (line) => {
//   processData(line);
// });

(async () => {
  try {
    const mass = await rl.question("what is mass ");
    const acceleration = await rl.question("what is the acc ");
    const force = Number(mass) * Number(acceleration);
    console.log("force is", force);
  } catch (error) {
    console.error(error);
  }
})();
