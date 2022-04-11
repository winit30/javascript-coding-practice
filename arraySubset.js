function arraySubset(arr, sub) {
    // Your code here
    for(let i = 0; i < sub.length; i++) {
        const arrIndex = arr.indexOf(sub[i]);
        if(arrIndex == -1) {
            return false;
        }

        delete arr[arrIndex]
    }
    return true;
}

function arraySubset2(arr, sub) {
    if(sub.length > arr.length) {
        return false;
    }
  
    const arrCount = {};
  
    for(let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if(arrCount[item] !== undefined) {
            arrCount[item]++;
        } else {
            arrCount[item] = 1;
        }
    }
    
    for(let i = 0; i < sub.length; i++) {
        const currentItem = sub[i];
        if(arrCount[currentItem] === undefined) {
            return false;
        }
        
        arrCount[currentItem]--;
        if(arrCount[currentItem] === 0) {
            delete arrCount[currentItem];
        }
    }
    
    return true;
}
