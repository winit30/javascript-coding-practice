//String Reverse Function
function reverse(str) {
  // // Solution One
  // return str.split('').reverse().join('');

  // // Solution Two
  // let reversed = '';
  // for(let char of str) {
  //   reversed = char + reversed;
  // }
  // return reversed;

  //Solution Three
  return str.split('').reduce((rev, char) => {
    return char + rev;
  }, '');

}

const reversedString = reverse("Vineet!");

//console.log(reversedString);
