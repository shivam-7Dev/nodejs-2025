//setting up the base class
//Ideally this should be extract class but this is hard to achieve
class Player {
  constructor(name, hp, mp, items) {
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.items = items;
  }

  speak(phrase) {
    console.log(`${this.name} says the phrase:${phrase}`);
  }
  test() {
    console.log("this is method inside the  base  class");
  }
  walk() {
    console.log("this is player walk");
  }
}

/**
 * Must call super constructor in derived class
 * before accessing 'this' or
 * returning from derived constructor
 */
class Wizard extends Player {
  constructor(name, hp, mp, items, wand) {
    super(name, hp, mp, items);
    this.wand = wand;
  }

  walk() {
    console.log("this is Wizard walk");
  }
}

class Warrior extends Player {
  constructor(name, hp, mp, items, shield) {
    super(name, hp, mp, items);
    //  super.constructor(name, hp, mp, items)
    console.log("super value is ", super.constructor); //super value is  [class Player]
    this.shield = shield;
    /**
     you can call the methods for super class in the base class
     */
    super.speak("Grawere");
    super.test();
  }

  warriorMethod() {
    console.log(" this is warrior methids");
    super.speak("speaking via warrior methods");
  }

  walk() {
    console.log("this is Warrior walk");
  }
}

class Bartender extends Player {
  constructor(name, hp, mp, items, mug) {
    super(name, hp, mp, items);
    this.mug = mug;
  }
}

const player = new Player("player", "50", "60", ["banana"]);

console.log(player);

const warrior = new Warrior(
  "Gengis Khan",
  "500",
  "200",
  ["saber"],
  "Leather shield"
);
(() => {
  console.log("================");

  console.log(warrior);

  warrior.speak("Ghasdfsa");
  warrior.warriorMethod();
  console.log("================");
})();

(() => {
  console.log("warrior instace of Player?", warrior instanceof Player);
  console.log("warrior instace of Warrior?", warrior instanceof Warrior);
})();

(() => {
  console.log("=======Poly morphism=========");
  const player = new Player("shivam", 50, 50, ["keyboard"]);
  const warrior = new Warrior("Atul", 100, 100, ["biceps"], "Leather shiled");
  const bartender = new Bartender("shady", 10, 10, ["mug "], "glass mug");
  const gandElf = new Wizard(
    "GandElf",
    300,
    1000,
    ["hat", "wand"],
    "Magic wand"
  );

  const players = [player, warrior, bartender, gandElf];
  for (const player of players) {
    console.log("======start of for=======");
    player.walk();
    console.log("======end for for=======");
  }

  console.log("============Poly morphism=================");
})();
