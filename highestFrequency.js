function highestFrequency(strings) {
    // Your code here
    const map = {};
    let count = 0;
    let key = '';
    for(let str of strings) {
        map[str] = map[str] ? map[str] + 1 : 1;
        if(count < map[str]) {
            count = map[str];
            key = str;
        }
    }
    return key;
}
