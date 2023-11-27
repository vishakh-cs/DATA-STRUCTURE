// quick sort 

function quicksort(arr){
    if(arr.length<=1){
        return arr;
    }
    let left = []
    let right = []
    let pivot = arr[arr.length-1]
    for(let i = 0; i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return[...quicksort(left),pivot,...quicksort(right)]
}

const unsortedArray = [64, 25, 12, 22, 11];
const sortedArray = quicksort(unsortedArray);
console.log(sortedArray);



// // quick Sort 

// function QuickSort(arr){
//     if(arr.length<=1){
//         return arr;
//     }
//     let left = []
//     let right =[]
//     let privot  =arr[arr.length-1]
//     for(let i = 0 ; i <arr.length-1;i++){
//         if(arr[i]<privot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }

//     }
//     return [...QuickSort(left),privot,...QuickSort(right)];
// }


// const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
// console.log("sortedArray",QuickSort(unsortedArray));