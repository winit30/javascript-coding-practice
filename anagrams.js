// Anagrams
function anagrams(stringA, stringB) {
  if(!stringA || !stringB) {
    return false;
  }
  const onlyStringA = stringA.replace(/[^\w]/g, "").toLowerCase();
  const onlyStringB = stringB.replace(/[^\w]/g, "").toLowerCase();

  const charsMapA = {};
  const charsMapB = {};

  for (const char of onlyStringA) {
    charsMapA[char] = charsMapA[char] + 1 || 1;
  }

  for (const char of onlyStringB) {
    charsMapB[char] = charsMapB[char] + 1 || 1;
  }

  if(Object.keys(charsMapA).length === Object.keys(charsMapB).length) {
      for (var key in charsMapA) {

        if (charsMapA[key] !== charsMapB[key]) {
           return false;
        }
      }
      return true;
  }

  return false;

}

//console.log(anagrams("hello", "llheo"));

function getCharCount(str) {
    const charCount = {}

    for(let char of str) {
        charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
    }
    return charCount;
}

//Strings is an array of string eg. ["Vineer", "adfsdfs", "rdfsdf"]
function allAnagrams(strings) {
    // Your code here
    if(strings.length === 0) {
        return false;
    }

    for(let string of strings) {
        if(string.length !== strings[0].length) {
            return false
        }
    }

    const firstCharCount = getCharCount(strings[0]);

    for(let string of strings) {
        const thisCharCount = getCharCount(string);

        for(let char in firstCharCount) {
            if(firstCharCount[char] !== thisCharCount[char]) {
                return false;
            }
        }
    }
    return true;
}
