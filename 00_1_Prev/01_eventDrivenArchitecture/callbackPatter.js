const greet = (callback) => {
  const data = {
    name: "John Doe",
  };
  callback(data);
};

greet((data) => {
  console.log("This is a callback function");
  console.log(data);
});

/**
 * A callback function is a function that is passed to another function(HOC) as a parameter
 * and is executed after some operation has been completed.
 *
 * Why do we need callback functions?
 * - To handle asynchronous operations
 * - To maintain the order of execution of functions in a program
 * - To handle events and event-driven programming
 *
 * There are two types of callback functions:
 * - Synchronous Callbacks: Passed to functions like map, filter, reduce, etc.
 * - Asynchronous Callbacks: Passed to functions like setTimeout, setInterval, etc.
 *
 * Node.js has an async nature, so it uses callback functions to handle events and async operations.
 */
