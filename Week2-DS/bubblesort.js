// bubble sort 


function BubbleSort(arr){
    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp;
            }
        }
    }
    return arr;
}


let twoDigitArray = [41, 10, 23, 13, 67, 89];
 console.log(BubbleSort(twoDigitArray))