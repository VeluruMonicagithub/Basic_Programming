function isPrime(num){
    if(num<=1){
        return false;
    }
    for(let i=2;i*i<=num;i++){
        if(num%i===0){
            return false;
        }
    }
    return true;
}
console.log(isPrime(11));

function checkEvenOdd(num){
    if(num%2==0){
        return true;
    }else{
        return false;
    }
    }
console.log(checkEvenOdd(10));