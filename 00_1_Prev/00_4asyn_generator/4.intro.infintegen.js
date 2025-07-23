const number = async function* (params) {
  let i = 0;

  while (true) {
    yield new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(i);
      }, 1000);
    });
    i += 5;
  }
};

(async () => {
  for await (const element of number()) {
    console.log({ element });
  }
})();
