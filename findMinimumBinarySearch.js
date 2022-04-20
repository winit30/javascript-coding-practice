var nums = [8, 9, 12, 13, 15, 25, 46, 78, 1, 2, 3, 4, 5];

function findMinimumBinarySearch() {

  let start = 0;
  let end = nums.length - 1;

  while(start <= end) {

    if(end == start) {
      return midIndex;
    }

    const midIndex = Math.floor((end + start) / 2);

    if(nums[midIndex] < nums[midIndex - 1] && nums[midIndex] < nums[midIndex + 1]) {
      return midIndex;
    } else if (nums[midIndex] > nums[start]) {
        start = midIndex;
    } else if (nums[midIndex] < nums[end]) {
        end = midIndex;
    }
  }
}

console.log(findMinimumBinarySearch(nums));
