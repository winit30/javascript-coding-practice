function stringRotation(str1, str2) {
    // Your code here
    return str1.length === str2.length && (str1 + str1).includes(str2);
}
