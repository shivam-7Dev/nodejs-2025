const promise = new Promise((res, rej) => {
  res("resolved");

  setTimeout(() => {
    rej("resolved");
  }, 1000);
});
console.log(promise);
const data = promise
  .then((data) => {
    console.log({ data });
  })
  .catch((err) => {
    console.log("promise rejected");
  });
console.log(promise);
