function linearSearch(arr, value) {
    let length = arr.length;
    for (let i = 0; i < length; i++) {
        if (arr[i] === value) {
            return `Found ${value} at index ${i} in the array [${arr.join(', ')}]`;
        }
    }
    return "not found";
}

let array = [10, 2, 1, 4, 51, 32, 12, 47];
console.log("Linear search result:", linearSearch(array, 7));
