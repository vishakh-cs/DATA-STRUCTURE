function BinnarySearch(arr,target){
    let left = 0;
    let right = arr.length-1;
    while(left<=right){
        let mid = Math.floor((left+right)/2)
        if(arr[mid]==target){
            return `Element ${target} found @ index ${mid}`;
        }else if(arr[mid]>target){
            right=mid-1
        }else{
            left = mid+1
        }
    }
    return `Element ${target} not found in the array`;
}

let array = [10,20,14,16,2,34]
array.sort((a,b)=>a-b)
console.log("Search in binnary search",BinnarySearch(array,10));