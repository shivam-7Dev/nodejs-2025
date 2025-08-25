/**
 *  nums =  nums = [2,7,11,15], target = 9, target = 9
 */
/**
 * Given an array of integers nums and an integer target, 
 * return indices of the two numbers
 *  such that they add up to target.

    You may assume that each input would have
     exactly one solution, and you may not use 
     the same element twice.

    You can return the answer in any order.
 */

const target = 9;
const nums = [2, 7, 11, 15];

// const findTarget = (nums) => {
//   for (let index = 0; index < nums.length - 1; index++) {
//     const element1 = nums[index];
//     for (let innerIndex = 1; innerIndex < nums.length; innerIndex++) {
//       if (innerIndex != index) {
//         const element2 = nums[innerIndex];
//         const sum = element1 + element2;
//         if (sum == target) {
//           console.log([index, innerIndex]);
//           return [index, innerIndex];
//         }
//       }
//     }
//   }
// };

// findTarget(nums);

// const obj = { name: "shivam" };
// console.log("shivam" in obj);

var twoSum = function (nums, target) {
  //   const obj = {};
  //   for (let index = 0; index < nums.length; index++) {
  //     const element = nums[index];
  //     const complement = target - element;

  //     /**
  //      * find the complement in the obj
  //      * if found the return with the complement key and index
  //      * if not found then store the current element in obj
  //      */

  //     if (complement in obj) {
  //       return [obj[complement], index];
  //     }

  //     obj[element] = index;
  //   }

  let map = new Map();

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];

    const complement = target - element;

    if (map.has(complement)) {
      return [map.get(complement), index];
    }

    map.set(element, index);
  }
};

console.log(twoSum(nums, target));
