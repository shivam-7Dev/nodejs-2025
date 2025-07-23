function revArr(arr, current) {
  if (arr.length / 2 <= current) return arr;

  let startIndex = current;
  let endIndex = arr.length - 1 - current;
  /**
   * do swap
   */

  let temp = arr[startIndex];
  arr[startIndex] = arr[endIndex];
  arr[endIndex] = temp;

  return revArr(arr, current + 1);
}

console.log(revArr([1, 2, 3, 4, 5], 0));
