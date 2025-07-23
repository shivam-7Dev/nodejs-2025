/**
 * To queue a callback in the timer queue,
 * we use setTimeout(callback, 0) or setInterval(callback, 0).
 */

setTimeout(() => {
  console.log("setTimeout callback 1");
  process.nextTick(() => {
    console.log("nested NextTick callback inside setTimeout callback 1");
  });
}, 0);

Promise.resolve().then(() => {
  console.log("Promise callback 1");
});

Promise.resolve().then(() => {
  console.log("Promise callback 2");
  process.nextTick(() => {
    console.log("This is nested nextTick callback inside promise callback 2");
  });
  Promise.resolve().then(() => {
    console.log("Nested Promise callback inside promise callback 2");
  });
  setTimeout(() => {
    console.log("nested setTimeout callback 1 inside promise callback 2");
  }, 0);
});

Promise.resolve().then(() => {
  console.log("Promise callback 3");
  setTimeout(() => {
    console.log("nested setTimeout callback inside promise callback 3");
  }, 0);
});

process.nextTick(() => {
  console.log("NextTick callback 1");
});

process.nextTick(() => {
  console.log("NextTick callback 2");
  process.nextTick(() => {
    console.log("This is nested nextTick callback inside nextTick callback 2");
  });
});

process.nextTick(() => {
  console.log("NextTick callback 3");
});

setTimeout(() => {
  console.log("setTimeout callback 2");
  process.nextTick(() => {
    console.log("nested NextTick callback inside setTimeout callback 2");
  });
}, 0);

/**
 * Expected Output Order:
 *
 * "NextTick callback 1"
 * "NextTick callback 2"
 * "NextTick callback 3"
 * "This is nested nextTick callback inside nextTick callback 2"
 * "Promise callback 1"
 * "Promise callback 2"
 * "Promise callback 3"
 * "Nested Promise callback inside promise callback 2"
 * "This is nested nextTick callback inside promise callback 2"
 * "setTimeout callback 1"
 *  "nested NextTick callback inside setTimeout callback 1"
 * "setTimeout callback 2"
 *  "nested NextTick callback inside setTimeout callback 2"
 * "nested setTimeout callback 1 inside promise callback 2"
 * "nested setTimeout callback inside promise callback 3"
 */
