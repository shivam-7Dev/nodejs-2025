(() => {
  /*
    1. Create a class called "Animal"

    2. Allow us to pass in 2 properties/fields to the
       Animal constructor which get set to the instance:
       - type (String)
       - name (String)

    3. Create two instances of the Animal class of your
       choice passing in different "type" and "name" for each

    4. Print out both animal instances

    5. Change the "name" of one of your animals and print it
       out again.

    *HINT: "this" will refer to the instance inside the class
*/

  console.log("========one========");
  class Animal {
    constructor(type, name) {
      this.type = type;
      this.name = name;
    }
  }

  const monkey = new Animal("monkey", "Abu");
  const simba = new Animal("cat", "sibma");
  console.log({
    monkey,
    simba,
  });
  console.log("=========End==========");
})();

(() => {
  /*
    1. Lookup the retro arcade game: Space Invaders
       on Google for some pictures
       Eg: https://en.wikipedia.org/wiki/Space_Invaders

    2. How would you build a class to model the Player
       (Spaceship) and the Enemy (Flying Alien)?

    3. Try to think of all the different fields and
       methods each would have in a real game. What 
       would you want to have in them?

    4. Write these out first on paper/text to 
       brainstorm, then implement the classes in JS

    * This is purposefully open-ended to allow you
      the creative freedom to design these classes
*/
  console.log("========Two========");

  console.log("=========End==========");
})();

(() => {
  /*
    1. Create a class called "Bookstore"

    2. The "Bookstore" constructor has a single parameter
       called "books" which is an Array of Book Objects.
       Assign the argument passed in to the instance within
       the constructor.

    3. Create a "listBooks" method on the "Bookstore" class
       that will loop through and print out all the Books
       in the Store (assume they have a name and author)
       so you can format each like this:
       `${book.name} by ${book.author}`

    3. Create another class called "Book"

    4. The "Book" constructor has 2 parameters:
       - name
       - author
       Assign these to the instance within the constructor

    5. Create 2 Books:
       const nineteen84 = new Book("1984", "George Orwell")
       const hp = new Book("Harry Potter", "J.K. Rowling")

    6. Create a Bookstore:
       const bookstore = new Bookstore( [ nineteen84, hp ] )

    7. Call bookstore.listBooks() and make sure it works:
       1984 by George Orwell
       Harry Potter by J.K. Rowling
*/

  console.log("========Three========");
  class Book {
    constructor(name, author) {
      this.name = name;
      this.author = author;
    }
  }
  class Bookstore {
    constructor(books) {
      this.books = books;
    }

    listBooks() {
      for (const book of this.books) {
        const { name, author } = book;

        console.log(`${name} by ${author}`);
      }
    }
  }

  const nineteen84 = new Book("1984", "George Orwell");
  const hp = new Book("Harry Potter", "J.K. Rowling");

  const bookstore = new Bookstore([nineteen84, hp]);

  bookstore.listBooks();
  console.log("=========End==========");
})();

(() => {
  /*
    1. Create a class called "Student"

    2. Allow us to pass in 3 properties/fields to the
       Student constructor which get set to the instance:
       - name (String)
       - major (String)
       - grades (Array of Numbers)

    3. Create a method on "Student" called "addGrade" that
       has one paramater "grade". It will simply push the
       "grade" given on to the "grades" Array.

    4. Create a method on "Student" called "gpa" that will
       return the AVERAGE grade of the student's "grades"

    5. Create an instance of the Student class like so:
       const eva = new Student("Eva", "Arts", [95, 75, 83])

    4. Print out the "eva" instance

    6. Use the "gpa" method on "eva" to print out their average
       grade (Should be 84.33)
*/
  console.log("========Four========");
  class Student {
    constructor(name, major, grades) {
      this.name = name;
      this.grades = grades;
      this.major = major;
    }
    addGrades(grade) {
      this.grades.push(grade);
    }
    gpa() {
      const sum = this.grades.reduce((total, currgrade) => {
        return total + currgrade;
      }, 0);

      console.log("gpa is ", sum / this.grades.length);
    }
  }
  const eva = new Student("Eva", "Arts", [95, 75, 83]);

  eva.gpa();
  console.log("=========End==========");
})();

(() => {
  /*
    Let's see how a "Factory" class/function might work

    1. Create a class called "EnemyFactory"

    2. Make the following work to produce the output shown:

    const factory = new EnemyFactory();
    const flying = factory.generateFlyingEnemy("batman");
    flying.fly(); // batman can fly!

    const swimming = EnemyFactory.generateSwimmingEnemy("aquaman");
    swimming.swim(); // aquaman can swim!

    * What is the difference between these two? When might you
      even use this? Where are the property keys of each of these:
      - EnemyFactory
      - factory
      - factory.__proto__
      - flying.__proto__
      - swimming.__proto__
*/

  console.log("========Five========");
  class EnemyFactory {
    generateFlyingEnemy(name) {
      class FlyingEnemy {
        constructor(name) {
          this.name = name;
        }
        fly() {
          console.log(`${this.name} can fly`);
        }
      }

      return new FlyingEnemy(name);
    }

    static generateSwimmingEnemy(name) {
      class SwimmingEnemy {
        constructor(name) {
          this.name = name;
        }

        swim() {
          console.log(`${this.name} can swim `);
        }
      }

      return new SwimmingEnemy(name);
    }
  }

  const factory = new EnemyFactory();
  const flying = factory.generateFlyingEnemy("batman");

  flying.fly(); // batman can fly!

  const swimming = EnemyFactory.generateSwimmingEnemy("aquaman");
  swimming.swim(); // aquaman can swim!
  console.log(Object.getOwnPropertyNames(EnemyFactory));
  //[ 'length', 'name', 'prototype', 'generateSwimmingEnemy' ]

  console.log(Object.getOwnPropertyNames(factory));
  //[]

  console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(factory)));
  // [ 'constructor', 'generateFlyingEnemy' ]

  console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(flying)));
  // ['constructor', 'fly']

  console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(swimming)));
  // ['constructor', 'swim']

  console.log("=========End==========");
})();
