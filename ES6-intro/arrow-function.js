//function declaration
// function add(num1,num2){
//     return num1+num2;
// }
// //function expression
// const addition=function(num1,num2){
//     return num1+num2
// }
// const result1=addition(17,13);


//arrow function
// const add2=(num1,num2)=>num1+num2;

// const result2=add2(17,13);


// const multiply=(a,b)=>a*b;
// const mult=multiply(5,7);
// console.log(mult);

// const sumAll=(a,b,c,d,e,f)=>a+b+c+d+e+f;
// const result=sumAll(1,2,3,4,5,6);
// console.log(result);

//multi line arrow function

const doMath=(x,y)=>{
    const makeDouble=x*2;
    const againDouble=y*2;
    const result=makeDouble+againDouble;
    return result;

}
const result=doMath(2,3);
console.log(result);
