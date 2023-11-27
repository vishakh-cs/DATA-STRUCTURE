// function small(arr){
//     let newArray = []
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             newArray.push([arr[i]!=a])
//         }

//     }
//     return newArray[0]
// }

// let array = [13,12,14,15,16,12]

// console.log("samll num =", small(array))



 function small(arr){
    let smallest = arr[0]

    for(let i=0;i<arr.length;i++){
        if(arr[i]<smallest){
            smallest = arr[i]
        }
    }
    return smallest;
 }

 let array = [34,4,13,12,14,15,2,16]
  
 console.log("samll num =", small(array))