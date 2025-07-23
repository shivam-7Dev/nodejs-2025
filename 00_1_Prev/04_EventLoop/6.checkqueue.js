setImmediate(() => {
  console.log("setImmediate callback 1");
});
setImmediate(() => {
  console.log("setImmediate callback 2");
  process.nextTick(() => {
    console.log("nextTick callback 1");
  });
  Promise.resolve().then(() => {
    console.log("promise callback");
  });
});
setImmediate(() => {
  console.log("setImmediate callback 3");
});

/**
    setImmediate callback 1
    setImmediate callback 2
    nextTick callback 1
    promise callback
    setImmediate callback 3
 */
