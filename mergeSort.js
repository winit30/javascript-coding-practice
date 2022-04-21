const arr1 = [9, 4, 7, 6, 3, 1, 5];

function merge(arr, low, mid, high) {

  var b = [];

  let i = low;
  let j = mid + 1;
  let k = 0;

  while(i <= mid && j <= high) {
    if(arr[i] <= arr[j]) {
      b[k++] = arr[i++];
    } else {
      b[k++] = arr[j++];
    }
  }

  while(i <= mid) {
    b[k++] = arr[i++];
  }

  while(j <= high) {
    b[k++] = arr[j++];
  }

  for(var a = 0, x = low; a < b.length; a++, x++) {
    arr[x] = b[a];
  }

}

function mergeSortRec(arr, low, high) {
  if(low >= high) {
    return;
  }

  const mid = low + Math.floor((high - low)/2);
  mergeSortRec(arr, low, mid);
  mergeSortRec(arr, mid + 1, high);
  merge(arr, low, mid, high);
}

function mergeSort(arr) {
  mergeSortRec(arr, 0, arr.length - 1);
}

mergeSort(arr1)

console.log(arr1);
