function printArray(array, currIdx) {
  if (currIdx >= Math.floor(array.length / 2)) {
    // Only print middle element for odd-length arrays
    if (array.length % 2 !== 0 && currIdx === Math.floor(array.length / 2)) {
      console.log(array[currIdx]);
    }
    return;
  }
  console.log(array[currIdx]);
  console.log(array[array.length - 1 - currIdx]);
  printArray(array, currIdx + 1);
}

printArray([1, 2, 3, 4, 5], 0);
