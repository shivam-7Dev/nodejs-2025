/*
    1. Create a generator function called "getRandomNumber"
       that generates a random number between 1-10 (inclusive)
       exactly 5 times

    2. Create another generator function called "groceryList"

       Inside of "groceryList", create an variable called
       "groceries" that points at:
       ["Avocado", "Cookie", "Milk", "Soup", "Soda"]

       The generator will yield a random grocery from "groceries"
       and also remove that grocery item from the list of "groceries"
       Eg: const groceries = groceryList();
           groceries.next() => "Cookie"
           groceries.next() => "Soup"

    3. Create 2 generator Objects by calling each of the 2
       generator functions above ^

    4. Create a regular for loop that will loop 5 times and calls
       .next() on each of the generator Objects ^ to print out a
       random number followed by a random grocery:
       Eg: 5 Avocado
           10 Soup
*/

const getRandomNumber = function* (min, max) {
  let i = 0;
  while (i < 10) {
    const randnumberbetweenRange = Math.floor(
      Math.random() * (max - min + 1) + min
    );
    yield randnumberbetweenRange;
    i++;
  }
};

const groceriesList = function* () {
  const groceries = ["Avocado", "Cookie", "Milk", "Soup", "Soda"];
  //   const groceriesLength = groceries.length;
  while (groceries.length) {
    const randomNumber = Math.floor(Math.random() * groceries.length);

    const elementRemoved = groceries.splice(randomNumber, 1);

    yield elementRemoved[0];
  }
};

const randIter = getRandomNumber(1, 10);
const groceriesIter = groceriesList();

for (let index = 0; index < 5; index++) {
  console.log(randIter.next().value, groceriesIter.next().value);
}
