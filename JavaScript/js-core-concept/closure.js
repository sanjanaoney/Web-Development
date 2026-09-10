// function counter(){
//     let count=0;
    // const numbs=[]
    // const people={}
    //function theke chaile function keo return korte pari
//       function innerFunction(){
//        console.log('inside the inner function someone called me')
//       }
//     return innerFunction;
  
// }
// const output=counter();
// console.log(output())


function counter(){
    let count=10;
    return function(){
        count=count+1;
        console.log('inside the inner function someone called me',count)
    }
}
// const innerFunc=counter()
// innerFunc()
// innerFunc()

const bobCounter=counter();
bobCounter()
bobCounter()
bobCounter()
bobCounter()
console.log('-------------------------------------')
const aliceCounter=counter()
aliceCounter()
bobCounter()