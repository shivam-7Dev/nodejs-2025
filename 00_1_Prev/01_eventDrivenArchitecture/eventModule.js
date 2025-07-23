/**
 * The events module allows us to work with events in Node.js.
 * An event is an action or an occurrence that happens in our application that we can respond to.
 * Using the events module, we can dispatch our own custom events and respond to those custom events in a non-blocking manner.
 *
 * Events module scenario:
 * Let's say you're feeling hungry and head to Domino's to have pizza.
 * At the counter, you place your order for a pizza.
 * When you place the order, the line cook sees the order on the screen and bakes the pizza for you.
 *
 * - Placing the order is an event.
 * - Baking the pizza is a response to that event.
 *
 * In Node.js, this can be represented using the events module.
 */

const EventEmitter = require("node:events");
const emitter = new EventEmitter();

/**
 * Using this emitter object, we can emit events and listen for events.
 */

/**
 * The EventEmitter class in Node.js is named for its primary function: emitting events. However, it also includes methods for responding to those events, making it a versatile tool for event-driven programming.
 * Here's a brief overview of its dual functionality:
 *
 * Emitting Events: The emit method is used to trigger an event.
 * Listening to Events: The on method is used to set up a listener for an event.
 *
 * The name "EventEmitter" focuses on the primary capability and architectural pattern it implements - the ability to emit/publish events - even though it also includes the ability to listen for/subscribe to events.
 * This naming follows a common pattern in programming where classes/objects are often named after their primary active capability rather than listing all their functions. Here are some key reasons why:
 *
 * - Publisher-Subscriber Pattern: The emitting capability drives the pattern. Without emission, there would be nothing to listen for. The emission is the "active" part that initiates the flow of events.
 * - Historical Context: The pattern comes from real-world radio/signal transmission where "emitters" are the active components that broadcast signals, even though the complete system includes both emitters and receivers.
 * - Architectural Role: In the observer pattern (which EventEmitter implements), the subject (emitter) is considered the core component, with observers (listeners) being dependent components.
 *
 * Consider some analogous examples:
 * - A "Radio Transmitter" can also receive signals
 * - A "Database Writer" class might also read data
 * - A "MessageSender" class typically handles receiving responses
 *
 * We could technically call it something like "EventEmitterAndListener" or "EventHandler", but:
 * - It would be more verbose
 * - It wouldn't emphasize the primary capability
 * - It would break from the established pattern naming convention
 *
 * The name emphasizes what makes it special - any object can listen for events, but an EventEmitter is special because it has the power to emit events that others can listen to.
 */

/**
 * In event-driven programming, you should set up listeners before sending messages.
 * This ensures that the events are properly handled when they occur.
 * Define an event handler/listener for the 'order' event.
 */

// Register a listerner for the 'order' event
emitter.on("order", (type) => {
  console.log("Order received for pizza of type:", type);
});

// Register a listerner for the 'order' event
emitter.addListener("order", (type) => {
  console.log(
    "This is a second event listener added with the help of addListener:",
    type
  );
});

// Emit the 'order' event
// Emitting is the core of event-driven programming
// when code execution reaches this line, the 'order' event is emitted in our code
emitter.emit("order", "Pepperoni");

/**
 * Additional Information:
 * - You can remove event listeners using the removeListener or off methods.
 * - You can listen for an event only once using the once method.
 * - EventEmitter supports chaining, so you can chain method calls.
 */
