// Array chunking
function chunk(array, size) {

    let mainArr = [];
    let tempSize = size;

    for (var char of array) {

      if(!mainArr[size - tempSize]) {

        mainArr[size - tempSize] = [char];

      } else if (mainArr[size - tempSize].length < size) {

        mainArr[size - tempSize].push(char);

      } else {

        tempSize = tempSize - 1;
        mainArr[size - tempSize] = [char];

      }

    }
    //console.log(mainArr);
    return mainArr;
}

chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 18);
