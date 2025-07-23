const interFunction = function* () {
  let i = 0;
  while (true) {
    yield i;
    i++;
  }
};

const iterator = interFunction();

//pulll 50 values
for (const value of iterator) {
  if (value == 50) {
    /**
      break in a for...of over a generator will terminate the generator.
      The generator is closed and cannot yield anymore
      Once a generator is closed
      (either via .return() or breaking a for...of), it is done forever.

      const gen = interFunction();
      gen.next(); // { value: 0, done: false }
      gen.return(); // { value: undefined, done: true } -> closes it
      gen.next();   // { value: undefined, done: true } -> now always done

     */
    break;
  }

  console.log(value);
}
console.log(iterator.next()); //{ value: undefined, done: true }
