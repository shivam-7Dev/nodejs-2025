function sum(n) {
  if (n <= 1) {
    return n;
  }

  let total = n + sum(n - 1);
  return total;
}

console.log(sum(3));
console.log("---------------");

function parameterbased(n, acc = 0) {
  if (n == 0) return acc;
  total = parameterbased(n - 1, acc + n);
  return total;
}

console.log(parameterbased(3, 0));
