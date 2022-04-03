function rotateClockwise(mat) {
  for(let r = 0; r < mat.length; r++) {
    for(let c = r; c < mat[0].length; c++) {
      [mat[r][c], mat[c][r]] = [mat[c][r], mat[r][c]];
    }
  }
  //Reverse the matrix below

}

const twoDMatrix = [[1,2,3,4],
                    [5,6,7,8],
                    [9,10,11,12],
                    [13,14,15,16]];

rotateClockwise(twoDMatrix)
