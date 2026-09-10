const name='tom hanks' //global scope
if(true){
    const data=58;
    console.log('inside the if block',data); //creates a block scope
}
// while(true){

// }
for(const num of [1,2,5,4,6]){

}
//function normally declare korle jekono jayga theke function call kora possible
function doMath(a,b){
    console.log(a,b) //function scope or local scope
    const sum=a+b;
    const total=sum+10;
}
