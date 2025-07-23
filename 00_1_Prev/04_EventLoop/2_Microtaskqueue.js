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
});

Promise.resolve().then(() => {
  console.log("Promise callback 3");
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

/**
 * Expected Output Order:
 *
 * 1. NextTick callback 1
 * 2. NextTick callback 2
 * 3. NextTick callback 3
 * 4. This is nested nextTick callback inside nextTick callback 2
 * 5. Promise callback 1
 * 6. Promise callback 2
 * 7. Promise callback 3
 * 8. Nested Promise callback inside promise callback 2
 * 9. This is nested nextTick callback inside promise callback 2
 */
