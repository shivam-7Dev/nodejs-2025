const EventEmitter = require("node:events");

/**
 * creating our own moudle which builds on top of EventEmitter class
 */

class PizzaShop extends EventEmitter {
  constructor() {
    super();
    this.orderNumber = 0;
  }

  order(size, topping) {
    this.orderNumber++;
    this.emit("order", size, topping);
  }

  displayOrderNumber() {
    console.log("Order Number: ", this.orderNumber);
  }
}

/**
 since you have extended EventEmitter class
 you can use all the methods of EventEmitter class
 *
 */

module.exports = PizzaShop;
