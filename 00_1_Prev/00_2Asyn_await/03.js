/*
    1. Create a function called "fetchFast" that returns 
       a Promise that resolves with the String "Fast Done!"
       after 2 seconds
    2. Create a function called "fetchSlow" that returns 
       a Promise that resolves with the String "Slow Done"
       after 6 seconds 
    3. Print out "Program starting..."
    
    4. Create an async function that uses await to wait for
       the data to comes back from "fetchFast" then log out
       the data. Then use await to wait for the data to come
       back from "fetchSlow" and log it out right after.

    5. Call the async function you created
    6. Log out "Program complete!"

    7. How long does this take and why?
    8. How could you speed it up?
*/

const fetchFast = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("fast done!");
    }, 2000);
  });
};

const fetchSlow = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Slow done");
    }, 6000);
  });
};

console.log("Program started");

(async () => {
  const data = await fetchFast();
  console.log({ data });
  const data2 = await fetchSlow();
  console.log({ data2 });
})();

(async () => {
  const data = fetchFast();

  const data2 = fetchSlow();

  const all = await Promise.all([data, data2]);
  console.log({ all });
})();
