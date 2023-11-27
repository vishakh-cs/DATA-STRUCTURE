
//F(n)=F(n−1)+F(n−2)

function fib(n){

    let fibSeries =[0,1]
    for(let i =2;i<=n;i++){
     fibSeries[i]  = fibSeries[i-1]  + fibSeries[i-2]


    }
    return  fibSeries;
}


let result = fib(21);
console.log(result);