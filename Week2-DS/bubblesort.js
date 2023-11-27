// bubble sort 


function BubbleSort(array){
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array.length;j++){
            if(array[j]>array[j+1]){
                let temp = array[j];
                array[j]= array[j+1];
                array[j+1]=temp;
            }
        }
    }
    return array
}


let twoDigitArray = [41, 10, 23, 13, 67, 89];
 console.log(BubbleSort(twoDigitArray))