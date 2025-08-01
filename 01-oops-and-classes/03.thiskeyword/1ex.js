/*
    1. Create a function called "Person". It will have 3
       parameters: name, age, and favouriteFood. (function
       syntax, not arrow function!)

    2. Inside of Person, directly set these values:
       this.name = name;
       this.age = age;
       this.favouriteFood = favouriteFood
       (no return value is needed)

    3. Create a the following two variables:
       const avery = Person("Avery", 20, "Dark Chocolate");
       const jackie = new Person("Jackie", 35, "Sourdough Bread");

    4. Log out "avery" and "jackie" and explain what you see

    5. Log out the entire prototype chain of "jackie" (one by one)

    6. How would you explain what is happening when we use the
       "new" operator with a function in JS?
*/

function Person(name, age, favouriteFood) {
  this.name = name;
  this.age = age;
  this.favouriteFood = favouriteFood;
}

const avery = Person("Avery", 20, "Dark Chocolate");
const jackie = new Person("Jackie", 35, "Sourdough Bread");

console.log({
  avery,
  jackie,
});

console.log(jackie.__proto__); //{}
console.log(Object.getOwnPropertyNames(jackie.__proto__)); //[ 'constructor' ]
console.log(jackie.__proto__.constructor); //[Function: Person]
console.log(jackie.__proto__.constructor.name); //Person
console.log(jackie.__proto__.__proto__);
console.log(jackie.__proto__.__proto__.__proto__);
