/*
    1. Create a generator function called "countTo10" that will
       yield the numbers 0-10 (inclusive) then stop.

    2. Create the generator object by calling the generator
       function and iterate through the generator using a
       for...of loop.
*/

const countTo10 = function* () {
  let i = 0;
  while (i < 10) {
    yield i;
    i++;
  }
};

for (const number of countTo10()) {
  console.log(number);
}
