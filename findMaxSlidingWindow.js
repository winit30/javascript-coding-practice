function findMaxSlidingWindow(nums, size) {
  const result = [];

  if(nums.length == 0) {
    return result;
  }

  if (size > nums.length) {
    size = nums.length;
  }

  let tempWindow = [];

  for(let i = 0; i < size; i++) {

    while(tempWindow.length > 0 && nums[i] >= nums[tempWindow[tempWindow.length - 1]]) {
      tempWindow.pop();
    }

    tempWindow.push(i);
  }

  result.push(nums[tempWindow[0]]);

  for(let i = size; i < nums.length; i++) {

    while(tempWindow.length > 0 && nums[i] >= nums[tempWindow[tempWindow.length - 1]]) {
      tempWindow.pop();
    }

    while(tempWindow.length > 0 && i - size >= tempWindow[0]) {
      tempWindow.shift();
    }

    tempWindow.push(i);
    result.push(nums[tempWindow[0]]);

  }

  return result;
}

findMaxSlidingWindow([13, 12, 4, 6, 5, 9, 8, 7, 10, 15, 13], 3)
