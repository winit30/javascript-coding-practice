const arr = [5, 7, 1, 2, 8, 4, 3]
let val = 6;

function findSumOfTwo(nums, target) {

  nums.sort();

  let i = 0;
  let j = nums.length - 1;

  while(i < j) {

    if(nums[i] + nums[j] > target) {
      j--
    } else if(nums[i] + nums[j] < target) {
      i++
    } else if (nums[i] + nums[j] == target) {
      return true
    }

  }
  return false;
}

console.log(findSumOfTwo(arr, val));
