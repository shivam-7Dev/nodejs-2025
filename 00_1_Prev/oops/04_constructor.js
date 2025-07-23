/***
 * The new keyword in JavaScript is used to create an instance of a user-defined object type or one of the built-in object types that has a constructor function. When you use the new keyword, it performs several steps to create and initialize a new object.
 *
 * Steps Performed by the new Keyword:
 * 1. Create a New Object: A new empty object is created.
 * 2. Set the Prototype: The prototype of the new object is set to the prototype property of the constructor function.
 * 3. Bind this to the New Object: The constructor function is called with this bound to the new object, allowing properties and methods to be added to the new object.
 * 4. Return the New Object: The new object is returned from the constructor function, unless the constructor explicitly returns a different object.
 */

function CreatePerson(name, age) {
  this.name = name;
  this.age = age;
}

CreatePerson.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

CreatePerson.prototype.info = function () {
  console.log(`My name is ${this.name} and I am ${this.age} years old.`);
};

// Create instances of CreatePerson
const person1 = new CreatePerson("Alice", 30);
const person2 = new CreatePerson("Bob", 25);

console.log(Object.getOwnPropertyNames(person1)); // Output: [ 'name', 'age' ]
console.log(Object.getOwnPropertyNames(person2)); // Output: [ 'name', 'age' ]

person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
person2.greet(); // Output: Hello, my name is Bob and I am 25 years old.

/**
 * Summary:
 * - new Keyword: Used to create an instance of a constructor function.
 * - Steps:
 *   1. Create a new empty object.
 *   2. Set the prototype of the new object.
 *   3. Bind this to the new object.
 *   4. Return the new object.
 * - Prototype Chain: Allows instances to share methods defined on the constructor's prototype.
 *
 * Understanding the new keyword and how it works is crucial for creating and managing objects in JavaScript, enabling efficient use of memory and shared behavior through prototypes.
 */
