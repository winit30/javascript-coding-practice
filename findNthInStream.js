const output = [];

let arr;

function readStream(stream, k) {

  const lastElement = stream[stream.length - 1];

  if(!arr) {
    arr = new Array(k);
  }

  if(stream.length < k) {

    arr[stream.length - 1] = lastElement;
    output.push(-1);

  } else if(stream.length == k) {
    arr[stream.length - 1] = lastElement;

    arr.sort((a, b) => {
      return a - b;
    });

  } else {

    let temp = lastElement;

    for(let i = 0; i < k; i++) {

      if(arr[k - 1] < lastElement) {

          if(arr[i + 1]) {
            arr[i] =  arr[i + 1]
          } else {
            arr[i] = lastElement
          }

      } else if (arr[0] < lastElement && arr[k - 1] > lastElement) {

        if(!(arr[k - 1 - i] > temp)) {
          const currVal = arr[k - 1 - i];
          arr[k - 1 - i] = temp;
          temp = currVal;
        }

      }
    }
  }

  if(stream.length >= k) {
    output.push(arr[0]);
  }

  return output;

}

readStream([10], 4)
readStream([10, 12], 4)
readStream([10, 12, 11], 4)
readStream([10, 12, 11, 15], 4)
readStream([10, 12, 11, 15, 9], 4)
readStream([10, 12, 11, 15, 9, 20], 4)
readStream([10, 12, 11, 15, 9, 20, 18], 4)
readStream([10, 12, 11, 15, 9, 20, 18, 19], 4)
readStream([10, 12, 11, 15, 9, 20, 18, 19, 22], 4)
readStream([10, 12, 11, 15, 9, 20, 18, 19, 22, 25], 4)
readStream([10, 12, 11, 15, 9, 20, 18, 19, 22, 25, 23], 4)
readStream([10, 12, 11, 15, 9, 20, 18, 19, 22, 25, 23, 24], 4)

console.log(arr, output);
