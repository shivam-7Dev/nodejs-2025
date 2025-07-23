const createPersonMethods = {
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  },
  info() {
    console.log(`My name is ${this.name} and I am ${this.age} years old.`);
  },
};
function createPerson(name, age) {
  //create object with createPersonMethods as prototype
  // this will create empty object with createPersonMethods as prototype
  const obj = Object.create(createPersonMethods);

  obj.name = name;
  obj.age = age;

  return obj;
}

const person1 = createPerson("Alice", 30);
const person2 = createPerson("Bob", 25);
console.log(Object.getOwnPropertyNames(person1)); // Output: [ 'name', 'age' ]
console.log(Object.getOwnPropertyNames(person2)); // Output: [ 'name', 'age' ]
