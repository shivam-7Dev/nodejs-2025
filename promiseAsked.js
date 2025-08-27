console.log("a");

setTimeout(() => {
  console.log("setTioumout");
}, 1000);

Promise.resolve()
  .then(() => {
    console.log("B");
    return "passedvalue";
  })
  .then((data) => {
    console.log(data);
  });

(async () => {
  console.log("atul");
  await new Promise((resolve, reject) => {
    console.log("awaitin===");
    setTimeout(() => {
      console.log("******");
      resolve();
    }, 1000);

    console.log("awaitin===");
  });
  console.log("after wati");
})();

console.log("G");
