//setting up the base class
//Ideally this should be extract class but this is hard to achieve
class Player {
  constructor(name, hp, mp, items) {
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.items = items;
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
}

class Warrior extends Player {
  constructor(name, hp, mp, items, shield) {
    super(name, hp, mp, items);

    this.shield = shield;
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
console.log(warrior);
