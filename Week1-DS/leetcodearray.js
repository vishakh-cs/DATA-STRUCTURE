//leetcodearray

//Given two integer arrays nums1 and nums2, return an array of their intersection. 
//Each element in the result must be unique and you may return the result in any order.

/*
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.

*/

let array1 = [4,9,5]
let array2 = [9,4,9,8,4]

let newArray = []
function commonNums(){
    for(let i = 0 ; i< array1.length ; i++){
        for(let j = i+1;j<array2.length;j++){
           if(array1[i]==array2[j] )
           newArray.push(array1[i])

        }


    }


}
commonNums()
console.log(newArray);