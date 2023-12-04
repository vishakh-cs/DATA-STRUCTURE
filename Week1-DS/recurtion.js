// sum

function sum(n){
    if(n<1){
      return 0;   
    }else{
    return n + sum(n-1)
    }
}

console.log(sum(6))