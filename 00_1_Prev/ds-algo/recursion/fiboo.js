function fibbo(n) {
  if (n <= 2) return 1;

  return fibbo(n - 1) + fibbo(n - 2);
}

console.log(fibbo(8));
console.log(fibbo(9));
console.log(fibbo(10));
