const generator = function* () {
  yield new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("one");
      resolve(1);
    }, 1000);
  });

  yield new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("two");
      resolve(2);
    }, 1000);
  });

  yield new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("three");
      resolve(3);
    }, 1000);
  });
};

const iter = generator();
for (const item of iter) {
  console.log(item);
}

const iter2 = generator();
console.log(iter2.next().value);
console.log(iter2.next().value);
console.log(iter2.next().value);
console.log(iter2.next().value);
console.log(iter2.next().value);

(async () => {
  const iter3 = generator();

  for (const element of iter3) {
    const data = await element;
    console.log({ data });
  }
})();

(async () => {
  const iter4 = generator();

  for await (const element of iter4) {
    // const data = await element;
    console.log({ element });
  }
})();

(async () => {
  for await (const element of generator()) {
    // const data = await element;
    console.log({ element });
  }
})();
