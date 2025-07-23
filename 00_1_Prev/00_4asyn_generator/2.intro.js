const arr = [1, 2, 4, 5, 6, 7, 8];

(async () => {
  const fetchchunk = function* (chunksize, sec) {
    let i = 0;
    while (i <= arr.length) {
      const chunk = arr.slice(i, i + chunksize);

      yield new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(chunk);
        }, sec * 1000);
      });

      i += chunksize;
    }
  };
  //this works but not recommened
  for (const chuck of fetchchunk(2, 1)) {
    const data = await chuck;
    console.log({ data });
  }
  //this reads better
  for await (const data of fetchchunk(2, 1)) {
    console.log({ data });
  }
})();

(async () => {
  const fetchchunk = function (start, end, delay) {
    return new Promise((resolve, reject) => {
      const chunk = arr.slice(start, end);
      setTimeout(() => {
        resolve(chunk);
      }, delay * 1000);
    });
  };

  let i = 0;
  while (i < arr.length) {
    const chunk = await fetchchunk(i, i + 2, 3);
    console.log({ chunkyyyy: chunk });
    i += 2;
  }
})();
