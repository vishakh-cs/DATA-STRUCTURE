// heap sort 

function heapSort(arr){
    let n = arr.length-1;
    for(let i=Math.floor(n/2);i>=0;i--){
        maxHeap(arr,n,i)
        
    }
    for(let i=n;i>=0;i--){
        [arr[i],arr[0]] = [arr[0],arr[i]]
        maxHeap(arr,i,0)
    }
    return arr;
}

function maxHeap(arr,n,i){
    let largestIndex = i;
    
    let leftIndex = (2*i)+1;
    let rightIndex=(2*i)+2;
    
    if(leftIndex<n && arr[leftIndex]>arr[largestIndex]){
        largestIndex = leftIndex;
    }
    if(rightIndex<n && arr[rightIndex]>arr[largestIndex]){
        largestIndex = rightIndex;
    }
    
    if(largestIndex != i){
        [arr[i],arr[largestIndex]] = [arr[largestIndex],arr[i]]
        maxHeap(arr,n,largestIndex)
    }
}

let unsortedArray = [10,4,16,8]

console.log(heapSort(unsortedArray))