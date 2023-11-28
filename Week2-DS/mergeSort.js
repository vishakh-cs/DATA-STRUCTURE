// merge sort  
function mergeSort(array){
if(array.length<2){
    return array;
}
    let mid = Math.floor(array.length-1/2)
    let left = array.slice(0,mid)
    let right = array.slice(mid)
    return merge (mergeSort(left),mergeSort(right))
}

  function merge(leftArray ,rightArray){
    let sortedArray =[]
    while(leftArray.length && rightArray.length){
       
        if(leftArray[0]<=rightArray[0]){
            sortedArray.push(leftArray.shift())

        }else{
            sortedArray.push(rightArray.shift())
        }

    }
    return [ ...sortedArray,...leftArray,...rightArray]
}

let unsortedArray = [10,2,14,62,12,34]
console.log(mergeSort(unsortedArray))