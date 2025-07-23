/*
    1. Create a generator function called "randomNumber"
       that will generate a new random number infinitely

    2. Use a loop to generate 10 random numbers using the
       generator Object you get from calling "randomNumber"
*/

const randomNumber = function* () {
  while (true) {
    yield Math.floor(Math.random() * 10);
  }
};

const randIter = randomNumber();

for (let index = 0; index < 10; index++) {
  console.log(randIter.next().value);
}
