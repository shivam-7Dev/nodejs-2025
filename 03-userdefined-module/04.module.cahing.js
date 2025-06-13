//import and export pattern

let count = 0;

function increment() {
  count++;
  console.log({ count });
}

module.exports = { increment };
