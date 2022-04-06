function SpiralMatrix(n) {

  const results = [];

  for(let i = 0; i < n; i++) {
    results.push([]);
  }

  let counter = 1;

  let startRow = 0;
  let startColumn = 0;
  let endRow = n - 1;
  let endColumn = n - 1;

  while(startColumn <= endColumn && startRow <= endRow) {

      //Move from column left to right in the start row
      for(let i = startColumn; i <= endColumn; i++) {
          results[startRow][i] = counter;
          counter++;
      }
      startRow++;

      //Move from row top to bottom in the end column
      for(let i = startRow; i <= endRow; i++) {
        results[i][endColumn] = counter;
        counter++;
      }

      endColumn--;

      //Move from column right to left in the end row
      for(let i = endColumn; i >= startColumn; i--) {
        results[endRow][i] = counter;
        counter++
      }
      endRow--;

      //Move from row bottom to top in the start column
      for(let i = endRow; i >= startRow; i--) {
        results[i][startColumn] = counter;
        counter++
      }
      startColumn++;
  }

  return results;
}

SpiralMatrix(4);
