var arr = [1, 10, 20, 0, 59, 63, 0, 88, 0]

var output = [0, 0, 0, 1, 10, 20, 59, 63, 88];

function moveZerosToLeft(n) {

  const len = n?.length;

  if(len <= 1) {
    return n;
  }

  let left = len - 1;
  let right = len - 1;
  var temp;

  while (right >= 0) {

      if(n[right] === 0) {
        right--
      } else {
        temp = n[left]
        n[left] = n[right];
        n[right] = temp;
        right--;
        left--;
      }
  }
}

moveZerosToLeft(arr);
