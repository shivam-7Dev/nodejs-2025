function genSubseq(arr, index = 0, current = [], result = []) {
  if (index === arr.length) {
    // Base case: when index reaches end, store the current subsequence
    result.push([...current]); // Push a copy of 'current' array
    return;
  }

  // Include the current element
  current.push(arr[index]);
  genSubseq(arr, index + 1, current, result);

  // Exclude the current element
  current.pop(); // Remove last added element
  genSubseq(arr, index + 1, current, result);

  return result;
}

// Example usage:
const arr = [1, 2, 3];
console.log(genSubseq(arr, 0, [], []));
