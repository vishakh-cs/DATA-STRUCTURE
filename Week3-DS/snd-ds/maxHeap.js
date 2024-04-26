// hep sort

function heapSort(array){
    let n = array.length-1;
    for(let i= Math.floor(n/2);i>=0;i--){
        heapify(array,n,i)

    }

    for(let i=n;i>=0;i--){
        [array[i],array[0]]=[array[0],array[i]]
        heapify(array,i,0)
    }
    return array;
}

function heapify(arr,n,i){
    let largest = i;

    let left = (2*i)+1;
    let right = (2*i)+2;

    if(left<n && arr[left]>arr[largest]){
        largest = left;
    }
    if(right<n && arr[right]>arr[largest]){
        largest = right;
    }

    if(largest!=i){
        [arr[i],arr[largest]]= [arr[largest],arr[i]]
        heapify(arr,n,largest)
    }
}

let array = [11,5,14,3,24,7]

console.log(heapSort(array))