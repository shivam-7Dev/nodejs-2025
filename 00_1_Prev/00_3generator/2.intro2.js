const interFunction = function* () {
  let i = 0;
  while (true) {
    yield i;
    i++;
  }
};

const interObj = interFunction();

for (const item of interObj) {
  console.log(item);
}
