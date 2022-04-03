// Pyramid
function pyramid(n) {

  const columns = n + n - 1;
  const midpoint = Math.floor(columns/2);

  for(let row = 0; row < n; row++) {
    let level = '';
    for(let col = 0; col <= columns; col++) {
        if(midpoint - row <= col && midpoint + row >= col) {
          level = level + '#'
        } else {
          level = level + ' '
        }
    }
    //console.log(level);
  }
}

pyramid(4);
