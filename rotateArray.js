function reverse(nums, start, end) {
  while(start < end) {
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
  return nums;
}

function rotateArray(nums, n) {

  const len = nums.length;

  n = n % len;

  if(n < 0) {
    n = n + len;
  }

  reverse(nums, 0, len - 1);
  reverse(nums, n, len - 1);
  reverse(nums, 0, n - 1);

}

rotateArray([3, 4, 6, 7, 8, 9, 10, 12, 15, 17], 4)
