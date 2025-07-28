(() => {
  /*
    1. Create a class called "FancyArray" that extends
       the built-in Array in Javascript

    2. Add a "mapWithLogging" method to "FancyArray"
       that works just like the regular array map (with)
       the same parameters, but also logs the following
       each iteration of the map:
       "Current: ____, After Callback: _____"

    3. The following code example should work and log out
       correctly as well:
       
        class FancyArray extends Array {...}

        const arr = new FancyArray();
        console.log(arr);
        arr.push(1);
        arr.push(2);
        arr.push(3);

        const mapped = arr.mapWithLogging((item, i) => {
          return item + i;
        });
        console.log(mapped);

        // FancyArray(0) []
        // Current: 1, After Callback: 1
        // Current: 2, After Callback: 3
        // Current: 3, After Callback: 5
        // FancyArray(3) [ 1, 3, 5 ]
*/
  console.log("========one========");

  class FancyArray extends Array {
    constructor() {
      super();
    }

    mapWithLogging(cb) {
      const newArr = [];
      for (let index = 0; index < this.length; index++) {
        newArr[index] = cb(this[index], index);

        console.log(
          `current:${this[index]} after callback:${cb(this[index], index)}`
        );
      }

      return newArr;
    }
  }

  const arr = new FancyArray();
  console.log(arr);
  arr.push(1);
  arr.push(2);
  arr.push(3);

  console.log(arr);
  const mapped = arr.mapWithLogging((item, i) => {
    return item + i;
  });
  console.log(mapped);
  console.log("=========End====sideLength======");
})();
(() => {
  /*
    1. Create a class called "Shape" whose constructor
       takes one parameter:
       - colour
       Assign "colour" to the instance of Shape with a 
       default value of "Transparent"
       Add a "type" property to "this" with a default
       value of "Shape"

    2. Add a method to "Shape" called "describe" that
       will log out the following to the console:
       "A ${this.colour} ${this.type}"

    3. Create a class called "Square" whose constructor
       takes 2 parameters (Square has to extend Shape):
       - colour
       - sideLength
       Call the super constructor with "colour"
       Assign "sideLength" to the instance of "Square"
       Assign "Square" to the "type" property

    4. Add an "area" method to "Square" that will calculate
       and return the total area of the square.
       (Area of a square is: sideLength * sideLength)
    
    5. Create a class called "Rectangle" whose constructor
       takes 3 parameters (Rectangle has to extend Shape):
       - colour
       - width
       - height
       Call the super constructor with "colour"
       Assign all of these to the instance of "Rectangle"
       Assign "Rectangle" to the "type" property

    6. Add an "area" method to "Rectangle" that will calculate
       and return the total area of the square.
       (Area of a rectangle is: width * height)

    7. Run the following code and explain it in as much
       technical detail as you can:
       const square = new Square("blue", 5);
       const rectangle = new Rectangle("red", 5, 6);
       console.log( square.area() ); // 25
       console.log( rectangle.area() ); // 30
       for ( const shape of [square, rectangle] ) shape.describe();
       // A blue square
       // A red rectangle
*/
  console.log("========Two========");

  class Shape {
    type = "Shape";
    constructor(colour = "Transparent") {
      this.colour = colour;
    }

    describe() {
      console.log(`A ${this.colour} ${this.type}`);
    }
  }

  class Square extends Shape {
    constructor(colour, sideLength) {
      super(colour);
      this.colour = colour;
      this.sideLength = sideLength;
    }

    area() {
      console.log("the area of square is", this.sideLength * this.sideLength);
    }
  }

  class Rectangle extends Shape {
    constructor(colour, length, width) {
      super(colour);
      this.length = length;
      this.width = width;
    }

    area() {
      console.log(`area of rectange is `, this.length * this.width);
    }
  }
  const square = new Square("blue", 5);
  const rectangle = new Rectangle("red", 5, 6);
  console.log(square.area()); // 25
  console.log(rectangle.area()); // 30
  for (const shape of [square, rectangle]) shape.describe();
  // A blue square
  // A red rectangle
  console.log("=========End==========");
})();
(() => {
  /*
    1. Copy your code over from your exercise-2 solution.

    2. Add another class called "Circle" that extends
       the "Shape" class.
    
    3. The "Circle" constructor will have two parameters:
       - colour
       - radius
       Call the super constructor with "colour"
       Assign "radius" to the instance of "Circle"
       Assign "Circle" to the "type" property

    4. Add an "area" method to "Circle" that will calculate
       and return the total area of the circle.
       (Area of a circle is: pi * radius * radius )
       * Lookup how to get the value for "pi" on Google/MDN

    5. Add a method to "Circle" called "describe" that
       will log out the following to the console:
       "A round and awesome ${this.colour} ${this.type}"

    6. Run the following code and explain it in as much
       technical detail as you can:
       const square = new Square("blue", 5);
       const rectangle = new Rectangle("red", 5, 6);
       const circle = new Circle("green", 3);
       console.log( square.area() ); // 25
       console.log( rectangle.area() ); // 30
       console.log( circle.area() ); // 28.27433
       for ( const shape of [square, rectangle, circle] ) {
        shape.describe();
       }
       // A blue square
       // A red rectangle
       // A round and awesome green circle
*/
  console.log("========Three========");

  console.log("=========End==========");
})();
(() => {
  /*
    1. Lookup the retro arcade game: Space Invaders
       on Google for some pictures
       Eg: https://en.wikipedia.org/wiki/Space_Invaders

    2. How would you build a class to model the Player
       (Spaceship) and the Enemies (Flying Aliens)?
       * There are multiple different Aliens

    3. Try to think of all the different fields and
       methods each would have in a real game. What 
       would you want to have in them?

    4. Write these out first on paper/text to 
       brainstorm, then implement the classes in JS

    * This is purposefully open-ended to allow you
      the creative freedom to design these classes
*/
  console.log("========Four========");

  console.log("=========End==========");
})();
(() => {
  /*
    1. Create a class called Vehicle whose constructor
       takes 2 parameters:
       - name
       - maxSpeed
       Assign both of these to the instance of Vehicle

    2. Add a method on to the "Vehicle" class called
       "getMaxSpeed" that returns the "maxSpeed"

    3. Create a "Spaceship" class that extends "Vehicle"
       and has 3 parameters:
       - name
       - maxSpeed
       - numRocketEngines
       This will use super() to assign the name and maxSpeed
       It will assign "numRocketEngines" directly to the
       "Spaceship" instance

    4. Make sure these work (Assuming classes are defined):
       const spaceship = new Spaceship("Enterprise", 1000, 2);
       console.log( spaceship.getMaxSpeed() ); // 1000
       console.log( spaceship.numRocketEngines ); // 2
*/
  console.log("========Five========");
  class Vehicle {
    constructor(name, maxSpeed) {
      this.name = name;
      this.maxSpeed = maxSpeed;
    }
    getMaxSpeed() {
      return this.maxSpeed;
    }
  }
  class Spaceship extends Vehicle {
    constructor(name, maxSpeed, numRocketEngine) {
      super(name, maxSpeed);
      this.numRocketEngine = numRocketEngine;
    }
  }

  const spaceship = new Spaceship("Enterprise", 1000, 2);
  console.log({ spaceship });
  console.log(spaceship.getMaxSpeed()); // 1000
  console.log(spaceship.numRocketEngine); // 2

  console.log("=========End==========");
})();
