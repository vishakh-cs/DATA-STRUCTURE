// insertion sort....


function insertionSort(arr){
  for(let i=1;i<arr.length;i++){
    let temp = arr[i]
    let j = i-1
    while(j>=0 && arr[j]>temp){
        arr[j+1]=arr[j]
        j--;
    }
    arr[j+1]=temp;
  }
  return arr;
}

let unsortedArray = [10,14,7,24,17,32]
console.log(insertionSort(unsortedArray))