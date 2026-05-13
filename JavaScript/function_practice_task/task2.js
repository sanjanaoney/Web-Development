function checkingEvenOdd(number){
if(number%2!==0){
    const result1=number*2;
    return result1;
}
else{
    const result2=number/2;
    return result2;
}
}
const result=checkingEvenOdd(7);
console.log(result);