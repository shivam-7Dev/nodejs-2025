/**
 * A class is a blueprint for
 *  creating objects with shared structure and behavior.
 * Think of it like a template or mould for building things.
 * class helps us:
 * 1. Organize Code with Structure:Group related data and functions into one unit.
 * 2. Create Multiple Similar Objects Easily
 * 3. Use Inheritance (code reuse)
 * 4. Encapsulation (hide internal details)
 *
 * Four pillars of OOPS
 * 1.Inheritance
 * 2.Encapsulation
 * 3.Abstraction(hard to do in JSs)
 * 4.Polymophism
 */

class Player {
  someData = 10; // this will be attached to every instance
  // someData will be attached to instance and not prototype

  constructor(name, hp, mp, items) {
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.items = items;
  }

  speak(phrase) {
    console.log(` ${this.name} says :${phrase}`);
  }
}

const hanSolo = new Player();
console.log(hanSolo);
/*
Player {
  data: 10,
  name: undefined,
  hp: undefined,
  mp: undefined,
  items: undefined
}
*/

console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(hanSolo)));

let darthVader = new Player("Darth vader", "100", "100", ["light saber"]);
console.log(darthVader);

/**
Player {
  data: 10,
  name: 'Darth vader',
  hp: '100',
  mp: '100',
  items: [ 'light saber' ]
}
 */

darthVader.speak("how are you!");
