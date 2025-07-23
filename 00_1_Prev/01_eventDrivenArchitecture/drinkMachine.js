class DrinkMachine {
  serveDrink(size) {
    if (size === "large") {
      console.log("Serving complementry drink");
    } else {
      console.log(` size is not large`);
    }
  }
}

module.exports = DrinkMachine;
