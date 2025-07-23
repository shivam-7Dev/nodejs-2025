function combine(n) {
  if (n == 0) return;
  console.log(n);
  combine(n - 1);
  console.log(n);
}

combine(5);
