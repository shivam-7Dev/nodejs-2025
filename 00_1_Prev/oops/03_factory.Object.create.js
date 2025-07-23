function createPerson(name, age) {
  //create an empty object with createPerson.prototype as prototype
  const obj = Object.create(createPerson.prototype);
  obj.name = name;
  obj.age = age;
  return obj;
}

createPerson.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

createPerson.prototype.info = function () {
  console.log(`My name is ${this.name} and I am ${this.age} years old.`);
};

const person1 = createPerson("Alice", 30);
const person2 = createPerson("Bob", 25);
console.log(Object.getOwnPropertyNames(person1)); // Output: [ 'name', 'age' ]
console.log(Object.getOwnPropertyNames(person2)); // Output: [ 'name', 'age' ]
