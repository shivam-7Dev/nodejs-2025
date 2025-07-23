/***
 * Factory functions are functions  that creates and returns objects.
 * They are often used to create multiple instances of similar objects.
 * Factory functions are a type of object creation pattern.
 *
 */
// Factory function to create a person object
function createPerson(name, age) {
  //create object
  const obj = {};
  obj.name = name;
  obj.age = age;
  obj.greet = function () {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  };
  return obj;
}

// Create a new person object
const person1 = createPerson("Alice", 30);
const person2 = createPerson("Bob", 25);

console.log(Object.getOwnPropertyNames(person1)); // Output: [ 'name', 'age', 'greet' ]
console.log(Object.getOwnPropertyNames(person2)); // Output: [ 'name', 'age', 'greet' ]

person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
person2.greet(); // Output: Hello, my name is Bob and I am 25 years old.
const person3 = createPerson("Charlie", 40);
console.log(person1.greet === person3.greet); // Output: false (different function instances)
