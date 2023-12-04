function removeDuplicates(inputArray) {
    const uniqueArray = [];
    
    for (let i = 0; i < inputArray.length; i++) {
        if (!uniqueArray.includes(inputArray[i])) {
            uniqueArray.push(inputArray[i]);
        }
    }

    return uniqueArray;
}

const originalArray = [1, 2, 3, 4, 2, 5, 8, 1, 7];

console.log(removeDuplicates(originalArray));
