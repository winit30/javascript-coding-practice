// Check maxChar
function maxChar(str) {
  const chars = {};
  const maxChar = {
    key: "",
    val: 0
  };
  for (const char of str) {
    chars[char] = chars[char] + 1 || 1;
  }

  for (const key in chars) {
    if (chars.hasOwnProperty(key)) {
      if(maxChar.val < chars[key]) {
        maxChar.key = key;
        maxChar.val = chars[key]
      }
    }
  }
  return maxChar;
}

const details = maxChar("Hello, My name is Vineettttttt!");
