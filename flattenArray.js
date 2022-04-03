function flatten(nestedArray) {
    // Your code here
    const freshArray = [];

    for(let i = 0; i < nestedArray.length; i++) {
        const newItem = nestedArray[i];

        if(Array.isArray(newItem)) {
            const flatIt = flatten(newItem);
            for(let j = 0; j < flatIt.length; j++) {
                freshArray.push(flatIt[j]);
            }
        } else {
            freshArray.push(newItem);
        }
    }
    console.log(freshArray);
    return freshArray;
}
