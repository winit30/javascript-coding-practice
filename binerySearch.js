//binerySearch
function binerySearch(numbers, target) {
    let startIndex = 0;
    let endIndex = numbers.length - 1;

    while(true) {
        if(target === numbers[startIndex]){
            return startIndex;
        }

        if(target === numbers[endIndex]){
            return endIndex;
        }

        if(endIndex - startIndex <= 1){
            return -1;
        }

        const middleIndex = Math.floor((endIndex - startIndex)/2);

        if(target > numbers[middleIndex]) {
            startIndex = middleIndex + 1;
        } else if(target < numbers[middleIndex]) {
            endIndex = middleIndex - 1;
        } else {
            return middleIndex;
        }
    }
    // Your code here
}
