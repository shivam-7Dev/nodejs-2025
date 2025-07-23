/**
 * one to n in normal way
 * start by calling with one i.e print(1)
 * base case will be equallity of highest value
 * here 2 parameters are required for the funtion call
 */

function normal(n, end) {
  if (n > end) return;
  console.log(n);
  normal(n + 1, end);
}
normal(1, 5);

/**
*The key characteristic of backtracking is exploring all possibilities and abandoning paths that don't lead to a solution -
 this concept is independent of whether head or tail recursion is used.
 */
console.log("------------------------------");
function backTrack(n) {
  if (n == 0) return;
  backTrack(n - 1);
  console.log(n);
}

backTrack(5);
