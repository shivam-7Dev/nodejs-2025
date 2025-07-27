(() => {
  /*
    1. If you were to design your own class for your
       project, what questions would you ask while 
       deciding whether to make something a static or
       instance field/method/property?

    2. How about private or public accessors for these
       static or instance fields/methods/properties?
*/
  console.log("========one========");

  console.log("=========End==========");
})();
(() => {
  /*
    1. Create a class called "Utilties"

    2. Add a STATIC method to "Utilties" called
       "camelCase" that has a single parameter:
       - str (String)

    3. Add logic to "camelCase" that assumes that
       "str" is a String and returns the camel-
       cased version of the String. Eg:
       "hello there" => "helloThere"
       "Number Stock Items" => "numberStockItems"
       * You can assume that the spaces are where
         we move to the next upper-cased word

    4. Test this function on some Strings:
       console.log(Utilities.camelCase("hello there"))
       // helloThere
       console.log(Utilities.camelCase("HELLO THERE"))
       // helloThere
       console.log(Utilities.camelCase("I love cookies"))
       // iLoveCookies
       console.log(Utilities.camelCase("Monkey Banana"))
       // monkeyBanana
*/
  console.log("========Two========");

  console.log("=========End==========");
})();
(() => {
  /*
    1. Given the class definitions below, predict
       what will be logged out with the code:

       class Animal {
        static knownMammals = [];
        mammal = false;
        eyes = 2;

        static isMammal() {}
        describe() {}
       }

       class Monkey extends Animal {
        static knownMonkeys = [];
        height;
        weight;

        static isCute() {}
        eatBanana() {}
       }

    2. What will this code print out:
       const animal = new Animal();
       console.log(Object.getOwnPropertyNames(animal))
       console.log(Object.getOwnPropertyNames(animal.__proto__))
       console.log(Object.getOwnPropertyNames(Animal))
       console.log(Object.getOwnPropertyNames(Animal.__proto__))

       const monkey = new Monkey();
       console.log(Object.getOwnPropertyNames(monkey))
       console.log(Object.getOwnPropertyNames(monkey.__proto__))
       console.log(Object.getOwnPropertyNames(Monkey))
       console.log(Object.getOwnPropertyNames(Monkey.__proto__))
*/
  console.log("========Three========");

  console.log("=========End==========");
})();
(() => {
  /*
    1. Go to the MDN javascript documentation online
       and lookup "Array".

    2. What are all the STATIC properties and methods
       on the Array Object?

    3. What are all the INSTANCE properties and methods
       on Array instances?

    4. Explain why some of these are static and why some
       are instance fields/properties/methods
*/
  console.log("========Four========");

  console.log("=========End==========");
})();
(() => {
  /*
    1. Create a class called "Printer" that has a constructor
       that takes two parameters:
       - brand (String)
       - colours (Array of Strings)
       *Don't set these to the "this" value yet

    2. Create a PRIVATE method called "setupPrinter" that takes
       the same two parameters as the constructor (brand, colours)
    
    3. This method will assign the brand and colours to the "this"
       Object inside the class (the instance of the class)

    4. Call the "setupPrinter" function from inside the constructor

    5. Create a new instance of Printer and see if the brand and
       colours got set correctly

    Example:
       class Printer {...}
       const printer = new Printer("HP", ["Red", "Green", "Blue"]);
       console.log( printer.brand, printer.colours )
       // HP ["Red", "Green", "Blue"]
*/
  console.log("========Five========");

  console.log("=========End==========");
})();
