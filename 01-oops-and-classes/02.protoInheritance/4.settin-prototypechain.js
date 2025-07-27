//setting protoype chain

(() => {
  console.log("====one====");
  //✅ 1. Object Literals with Implicit Object.prototype
  const obj = { a: 1 };
  console.log(obj.__proto__ === Object.prototype); // true
  /**
   * All plain objects created with {}
   * automatically inherit from Object.prototype.
   */
})();

(() => {
  console.log("====Two====");
  //✅ 2. Constructor Functions and .prototype
  function Person(name) {
    this.name = name;
  }

  Person.prototype.sayHello = function () {
    console.log(`Hello, I'm ${this.name}`);
  };

  const p1 = new Person("Shivam");
  p1.sayHello(); // Hello, I'm Shivam
  console.log(Object.getOwnPropertyNames(p1.__proto__));

  /**
   p1.__proto__ === Person.prototype
   Person.prototype.__proto__ === Object.prototype

   p1 → Person.prototype → Object.prototype → null

   */
})();
(() => {
  console.log("====Three====");
  //✅ 3. Object.create(proto)

  const animal = { eats: true };
  const dog = Object.create(animal);

  console.log(dog.eats); // true
  console.log(dog.__proto__ === animal); // true

  //dog → animal → Object.prototype
})();
(() => {
  console.log("====Four====");
  //✅ 4. class Syntax (ES6)

  class Animal {
    speak() {
      console.log("Animal sound");
    }
  }

  class Dog extends Animal {
    speak() {
      console.log("Woof!");
    }
  }

  const d = new Dog();
  d.speak(); // Woof!

  //d → Dog.prototype → Animal.prototype → Object.prototype
  console.log(Object.getPrototypeOf(d) === Dog.prototype); // true
  console.log(Object.getPrototypeOf(Dog.prototype) === Animal.prototype); // true
})();
(() => {
  console.log("====Five====");
  //✅ 5. Manually using Object.setPrototypeOf(obj, proto)
  //This is discouraged due to performance reasons but works:
  const a = {};
  const b = { greeting: "hello" };

  Object.setPrototypeOf(a, b);

  console.log(a.greeting); // hello

  //a → b → Object.prototype
})();
(() => {
  console.log("====Six====");
  //✅ 6. Using __proto__ (not recommended)

  const a = {};
  const b = { hello: "world" };

  a.__proto__ = b;

  console.log(a.hello); // world
})();
