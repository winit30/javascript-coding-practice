function isUnique(str) {
    // Your code here
    const charObj = {}
    for(let char of str) {
        if(!charObj[char]) {
            charObj[char] = 1;
        } else {
            return false
        }
    }
    return true;
}
