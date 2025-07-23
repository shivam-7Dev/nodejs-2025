const PizzaShop = require("./pizzaShop");
const DrinkMachine = require("./drinkMachine");

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

// Register a listener for the 'order' event
pizzaShop.on("order", (size, topping) => {
  console.log(`Order received for a ${size} pizza with ${topping}`);
  drinkMachine.serveDrink(size);
});

pizzaShop.order("large", "mushrooms");
pizzaShop.displayOrderNumber();
