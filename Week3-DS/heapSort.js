// heap sort

function maxHeapify(arr,n,i){
    let largest = i;
  
    let left = (2*i)+1;   // Left child index
    let right = (2*i)+2; // right child index
    
    if(left<n && arr[left]>arr[largest]){
        largest = left;
    }
    if(right<n && arr[right]>arr[largest]){
        largest = right;
    }

    //If largest element is not the current root, swap them
    if(largest !=i){
        [arr[largest],arr[i]]=[arr[i],arr[largest]]
         maxHeapify(arr, n, largest);
    }
}

function heapSort(arr){
    let n = arr.length-1;
    for(let i=Math.floor(n/2);i>=0;i--){
        maxHeapify(arr,n,i)
    }
    
        for(let i=n;i>=0;i-- ){
            [arr[0],arr[i]] = [arr[i],arr[0]]
            maxHeapify(arr,i,0)
        }
        
    }



let array =[12, 11, 13, 5, 6, 7];

heapSort(array)
console.log(array)

