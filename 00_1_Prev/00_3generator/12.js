/*
    1. Create a generator function called "randomAmountFromRange"
       which has 3 parameters: amount, min, and max

    2. ^ This function will generate the amount of random numbers
       provided as an argument, between the min and max (inclusive)
       Eg: randomAmountFromRange(3, 10, 20) => 13, 12, 19

    3. Create a for...of loop that will loop through the following
       generator objects to test it:
       - randomAmountFromRange(3, 10, 20)
       - randomAmountFromRange(5, 100, 200)
       - randomAmountFromRange(10, 1000, 2000)
*/
/*
// ...existing code...
*/

const randomAmountFromRange = function* (amount, min, max) {
  let i = 0;
  while (i < amount) {
    const randnumberbetweenRange = Math.floor(
      Math.random() * (max - min + 1) + min
    );
    yield randnumberbetweenRange;
    i++;
  }
};

console.log("--- 3 random numbers between 10 and 20 ---");
for (const number of randomAmountFromRange(3, 10, 20)) {
  console.log(number);
}

console.log("\n--- 5 random numbers between 100 and 200 ---");
for (const number of randomAmountFromRange(5, 100, 200)) {
  console.log(number);
}

console.log("\n--- 10 random numbers between 1000 and 2000 ---");
for (const number of randomAmountFromRange(10, 1000, 2000)) {
  console.log(number);
}
