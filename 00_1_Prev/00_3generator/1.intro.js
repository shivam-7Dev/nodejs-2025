//you cant create generator function with arrow function
const counterGenerator = function* () {
  console.log("before one");
  yield 1;
  console.log("before two");
  yield 2;
  console.log("before three");
  yield 3;
  console.log("before return");
  return 4;
};
//when you call a generator no code inside is executed
const counterIter = counterGenerator();
const counterIter2 = counterGenerator();
const counterIter3 = counterGenerator();

console.log(counterIter); //Object [Generator] {}
/**
    counterGenerator {<suspended>}

    [[GeneratorLocation]]: VM77:3
    [[Prototype]]: Generator
    [[GeneratorState]]: "suspended"
    [[GeneratorFunction]]: ƒ* ()
    [[GeneratorReceiver]]: Window
    [[Scopes]]: Scopes[3]
 */

console.log(counterIter.next());
console.log(counterIter.next());
console.log(counterIter.next());
console.log(counterIter.next());

for (const count of counterIter) {
  console.log("count---", count);
}
console.log("----------------------------");

for (const count of counterIter2) {
  console.log("count---", count);
}
console.log("----------------------------");

for (const count of counterIter2) {
  console.log("count---", count);
}

/**
    before one
    count--- 1
    before two
    count--- 2
    before three
    count--- 3
    before return
 */

let count = counterIter3.next();
while (!count.done) {
  console.log("value is", count.value);
  count = counterIter3.next();
}
