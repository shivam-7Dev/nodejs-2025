console.log("one");
const fetchData = (n) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("resolved");
    }, n);
  });
};
console.log("two");

const asynFetchData = async () => {
  console.log("three");
  const data = await fetchData(2000);
  console.log({ data });
};

console.log("four");

asynFetchData();

console.log("five");

/**
 * output
 
    one
    two
    four
    three
    five
    { data: 'resolved' }

 */

// Key Concepts to Remember

/**
 * 1 async Functions Always Return a Promise
 
    async function getValue() {
    return "hello"; // This function actually returns Promise.resolve("hello")
    }

    async function getError() {
    throw new Error("oops"); // This returns Promise.reject(new Error("oops"))
    }
  */

/**
 * 2 await Pauses Only the async Function
 */

/**
 * 3 Use try...catch for Error Handling:
 * This is one of the biggest benefits of async/await.
 * It allows you to handle errors from asynchronous operations using
 * the same try...catch syntax as synchronous code
 */

/**
 * 4 Forgetting await
 
    // WRONG
    const data = fetchData(2000); // data is a pending Promise, not "resolved"
    console.log(data); // Logs: Promise { <pending> }

    // CORRECT
    const data = await fetchData(2000);
    console.log(data); // Logs: "resolved"

 */

/**
 * Inefficient Sequential awaits:
 * 
 * If you have multiple independent async operations,
 *  awaiting them one by one will run them in sequence, which is slower.
 * Use Promise.all() to run them concurrently.
 * 
    // SLOW: task2 waits for task1 to finish
    const result1 = await task1();
    const result2 = await task2();

    // FAST: Both tasks start at the same time
    const [result1, result2] = await Promise.all([task1(), task2()]);
 */

/**
 * await Inside forEach Doesn't Work as Expected
 * You cannot use await inside a forEach loop to pause execution.
 * The loop will not wait for the promise to resolve.
 * 
 *  Use a for...of loop instead.
 * 
    const ids = [1, 2, 3];

    // WRONG: This will not wait. It logs "Done" immediately.
    ids.forEach(async (id) => {
    await someAsyncFunction(id);
    });
    
    console.log("Done");

    // CORRECT: This will wait for each item to process.
    async function processIds() {
        for (const id of ids) {
            await someAsyncFunction(id);
        }
 */
