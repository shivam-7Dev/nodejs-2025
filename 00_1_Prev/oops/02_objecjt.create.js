/**
 * Object.create(proto, [propertiesObject])
 *
 * Parameters:
 * - proto: The object which should be the prototype of the newly-created object.
 * - propertiesObject (optional): An object specifying property descriptors to be added to the newly-created object.
 *
 * What Object.create() Does:
 * - Creates a New Object: The new object inherits properties and methods from the specified prototype object.
 * - Sets the Prototype: The prototype of the new object is set to the specified object.
 * - Returns the New Object: The newly-created object is returned.
 */

const obj1 = {
  key1: "value1",
  key2: "value2",
};

// Create a new object with obj1 as its prototype
const obj2 = Object.create(obj1);

console.log(obj2.key1); // Output: value1
console.log(obj2.key2); // Output: value2

// Adding a new property to obj2
obj2.key3 = "value3";
console.log(obj2.key3); // Output: value3

// Checking the prototype chain
console.log(Object.getPrototypeOf(obj2) === obj1); // Output: true

/**
 * Additional Information:
 * - Object.create() is useful for creating objects with a specific prototype, especially when you want to create objects that share behavior.
 * - The propertiesObject parameter allows you to define properties with specific descriptors (e.g., writable, enumerable, configurable).
 * - Object.create() can be used to implement inheritance in JavaScript.
 */

// Example of using propertiesObject
const obj3 = Object.create(obj1, {
  key4: {
    value: "value4",
    writable: true,
    enumerable: true,
    configurable: true,
  },
});

console.log(obj3.key4); // Output: value4
console.log(Object.getPrototypeOf(obj3) === obj1); // Output: true
