const arr = [5, 7, 1, 2, 8, 6, 4, 3];

//Just an other way to partition
function partitionTwo(nums, low, high) {

  const pivot = nums[high]

  let j = low;

  for(let i = low; i < high; i++) {
      if(nums[i] < pivot) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        j++;
      }
  }

  nums[high] = nums[j]
  nums[j] = pivot;
  return j;

}

function partition(nums, low, high) {

  const pivot = nums[low];
  let i = low;
  let j = high;

  while(i < j) {

    while(nums[i] <= pivot) {
      i++
    }

    while(nums[j] >  pivot) {
      j--
    }

    if(i < j) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
    }
  }

  nums[low] = nums[j];
  nums[j] = pivot;
  return j;

}

let quickSortRec = function(nums, low, high) {
  if (high > low) {
    let pivotIndex = partition(nums, low, high);
    quickSortRec(nums, low, pivotIndex - 1);
    quickSortRec(nums, pivotIndex + 1, high);
  }
};

let quickSort = function(nums) {
  quickSortRec(nums, 0, nums.length - 1);
};

quickSort(arr)

console.log(arr);
