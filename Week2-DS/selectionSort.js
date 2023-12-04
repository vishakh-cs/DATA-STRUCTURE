// selection sort
function selectionSort(arr){
    for(let i = 0 ; i<arr.length;i++){
        let min = i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min])
            min = j;
        }
        let temp = arr[i]
        arr[i]=arr[min]
        arr[min]=temp;
    }
    return arr;
}
let twoDigitArray = [41, 10, 23, 13, 67, 89];
 console.log(selectionSort(twoDigitArray))