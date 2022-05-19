const unsorted = [4, 7, 2, 9, 3, 5, 1, 0, 6];

function insertionSort(n) {

  for(let i = 1; i < n.length; i++) {
    let current = n[i];
    let j = i - 1;
    while (j >= 0 && n[j] > current) {
      n[j + 1] = n[j];
      j--
    }
    n[j + 1] = current;
  }
}

insertionSort(unsorted);

console.log(unsorted);
