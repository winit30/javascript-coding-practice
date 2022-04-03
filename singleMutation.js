function singleMutation(str1, str2) {
    // Your code here
    if(Math.abs(str1.length - str2.length) > 1) {
        return false;
    }

    let subsCount = 0;


    for(let i = 0, j = 0; i < str1.length || j < str2.length; i++, j++) {
        if(str1[i] !== str2[j]) {
            subsCount++;
            if(subsCount > 1) {
                return false;
            }

            if(str1.length > str2.length) {
                j--;
            } else if(str1.length < str2.length) {
                i--;
            }
        }
    }
    return true;
}
