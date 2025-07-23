const arr = [7, 8, 9];

const genFuntion = function* () {
  yield 1;
  yield* [1, 2, 3, 4, 5];
  yield 6;
  yield* arr;
};

const iter = genFuntion();

for (const item of iter) {
  console.log(item);
}
