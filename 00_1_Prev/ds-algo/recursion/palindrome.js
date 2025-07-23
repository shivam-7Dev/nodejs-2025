function palind(arr, currIndex) {
  if (currIndex >= arr.length / 2) return true;
  if (arr[currIndex] != arr[arr.length - 1 - currIndex]) return false;
  return palind(arr, currIndex + 1);
}

console.log(palind("madam", 0));
