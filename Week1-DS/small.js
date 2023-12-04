function dup(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i];
        if (!newArr.includes(currentElement)) {
            newArr.push(currentElement);
        }
    }
    return newArr;
}

let array = [34, 2,4,13, 2, 16,4];
console.log(dup(array));


  
//  console.log("samll num =", small(array))

//  function small(arr){
//     let smallest = arr[0]

//     for(let i=0;i<arr.length;i++){
//         if(arr[i]<smallest){
//             smallest = arr[i]
//         }
//     }
//     return smallest;
//  }

//  let array = [34,4,13,12,14,15,2,16]
  
//  console.log("samll num =", small(array))