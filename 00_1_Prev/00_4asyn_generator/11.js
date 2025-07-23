/*
    1. Create an async Generator function that has a 50%
       chance of yielding either of the following Promises:
       - Resolve after 500ms with the value "Fast!"
       - Resolve after 3000ms with the value "Slow!"

    2. Create the generator object by calling the function ^

    3. Use a for-await-of loop to loop through the generator
       indefinitely (ctrl-c to force exit the program)

    *HINT: Math.random() is your friend
*/

(async () => {
  const randomGen = async function* () {
    while (true) {
      const number = Math.floor(Math.random() * 10);
      let isEven = number % 2 === 0;
      yield new Promise((resolve, reject) => {
        setTimeout(
          () => {
            isEven ? resolve("SLOW!!") : resolve("FAST!!!");
          },
          isEven ? 1000 : 500
        );
      });
    }
  };

  for await (const element of randomGen()) {
    console.log(element);
  }
})();
