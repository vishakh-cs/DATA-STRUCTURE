function MaxValue(arr){
   let max = arr[0]
   for(let i = 0 ;i< arr.length;i++){
       if(arr[i]>max){
           max =arr[i]
       }
       
   }
   return max
}

const array = [10,4,5,56,,475,21]
console.log("Max Value",MaxValue(array) )