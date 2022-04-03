//Steps
function steps(n) {

  for(let row = 0; row < n; row++) {
    let step = '';
    for (let col = 0; col < n; col++) {

      if(row >= col) {
        step = step + '#';
      } else {
        step = step + ' ';
      }

    }
    //console.log(step);
  }
}
