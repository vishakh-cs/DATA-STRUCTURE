// selection sort
function selectionSort(arr){
    let length = arr.length;
    for(let i = 0 ; i<length;i++){
        let min = i
        for(let j = i +1;j<length;j++){
            if(arr[j]<arr[min]){
                min = j;

            }
        }
        let temp = arr[i];
        arr[i] = arr[min] ;
        arr[min]=temp;
    }
    return arr;
    
}

let twoDigitArray = [41, 10, 23, 13, 67, 89];
 console.log(selectionSort(twoDigitArray))