/*
    1. Print out "Program started" at the start of your code
    2. Create a Promise that resolves after 3 seconds
       and rejects after 2 seconds
    3. Log out the promise while it's pending
    4. Print out "Program in progress..." as well

    5. Print out "Program complete" if the promise fulfills
    6. Print out "Program failure" if the promise rejects

    HINT: Use setTimeout for the delay
*/
console.log("Program started");
const promiseObj = new Promise((res, rej) => {
  setTimeout(() => {
    res();
  }, 3000);

  setTimeout(() => {
    rej();
  }, 2000);
});

console.log(promiseObj);

console.log("Program in progress....");

promiseObj
  .then(() => {
    console.log("promise resolfed");
  })
  .catch(() => {
    console.log("promise rejected");
  });
