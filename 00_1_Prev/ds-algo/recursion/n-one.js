/**
 * n to one normal way
 * we will take only one parameter as the other the base case is one
 */
function decrementCounter(n) {
  if (n == 0) return;
  console.log(n);
  decrementCounter(n - 1);
}
decrementCounter(5);
