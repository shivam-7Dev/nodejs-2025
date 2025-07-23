const asynGen = async function* () {
  yield new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
  yield new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 1000);
  });
  yield new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(3);
    }, 1000);
  });
};

(async () => {
  for await (const element of asynGen()) {
    console.log({ element });
  }
})();

/**
//this will not work
 * for of loop is only applicable normal iterator
 * to iterate over asyn generator you have to use for await of loop
 * 
 * 
 * but for await of loop will work on normal iterator also
 */

// (async () => {
//   for (const element of asynGen()) {
//     const data = await element;
//     console.log({ data });
//   }
// })();
