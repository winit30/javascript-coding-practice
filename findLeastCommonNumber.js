function findLeastCommonNumber(arr1, arr2, arr3) {

  let i = 0;
  let j = 0;
  let k = 0;

  while (i < arr1.length && j < arr2.length && k < arr3.length) {

    if(arr1[i] === arr2[j] && arr1[i] === arr3[k]) {
      return arr1[i];
    }

    if(arr1[i] <= arr2[j] && arr1[i] <= arr3[k]) {
      i++
    } else if(arr2[j] <= arr1[i] && arr2[j] <= arr3[k]) {
      j++
    } else if(arr3[k] <= arr1[i] && arr3[k] <= arr2[j]) {
      k++
    }
  }

  return -1;

}

let v1 = [3, 6, 7, 10, 25, 30, 63, 64]
let v2 = [0, 1, 3, 4, 5, 6, 7, 8, 50]
let v3 = [1, 3, 6, 10, 14]

console.log(findLeastCommonNumber(v1, v2, v3));
