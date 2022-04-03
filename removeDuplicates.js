function removeDupes(str) {
    // Your code here
    const charObj = {};
    let uniqueChars = '';

    for(let char of str) {
        if(!charObj[char]) {
            charObj[char] = char;
            uniqueChars += char;
        }
    }

    return uniqueChars;

}
