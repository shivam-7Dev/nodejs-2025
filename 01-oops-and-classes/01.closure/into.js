/**
 * closure: scope + state + function
 * Definition:
 * A closure is a function that "remembers"
 * the variables from its lexical scope
 * even when the function is executed outside that scope.
 *
 */

(() => {
  function outer() {
    let count = 0;
    return function inner() {
      return ++count;
    };
  }

  const counter = outer(); // outer is popped off the call stack
  counter(); // 1
  counter(); // 2
})();
