var interval = [[1,3],[2,6],[8,10],[15,18]];

var interval2 = [[1,5], [3,7], [4,6], [6,8], [10,12], [11,15]];

function mergeArrayOverlapIntervals(arr) {

  let first = arr[0][0]
  let second = arr[0][1]

  const result = [[first, second]]

  let counter = 0;

  for(let i = 1; i < arr.length; i++) {

    if(second < arr[i][0]) {

      first = arr[i][0];
      second = arr[i][1];

      result.push([first, second]);

      counter++;

    } else if(second < arr[i][1]) {
      second = arr[i][1];
      result[counter][1] = second;
    }
  }

  return result;

}

console.log(mergeArrayOverlapIntervals(interval));
