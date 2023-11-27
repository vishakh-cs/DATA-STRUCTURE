//sumofArray 

function sumofArray (arr){
    let sum =0;

    for(let i = 0;i<arr.length;i++){
        sum += arr[i]
    }
    return sum;

}
let array = [1,2,3]
console.log(sumofArray(array));
