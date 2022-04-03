//Palindrome Checker Function
function checkPalindrome(str) {
  return str.split('').every((char, index) => {
    return char === str[str.length - 1 - index];
  })
}

const isPalindrome = checkPalindrome('bunub');

//console.log(isPalindrome);
