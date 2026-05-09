function multiply(num1,num2)
{
    if(typeof num1!=='number'|| typeof num2!=='number')
    {
        return 'please provide a number'
    }
    const mult=num1*num2;
    return mult;
}
const result=multiply(5,'seven');
// console.log(result);

function fullName(first,second){
if(typeof first !=='string')
{
   return 'first name should be a string'; 
}
else if(typeof second!=='string')
{
    return 'second name should be a string';
}

    const full=first+' '+second;
    return full;
}
const full=fullName('5','Sohan')
// console.log(full);

function getPrice(product)
{
    if(typeof product!=='object')
    {
        return 'please provide an object';
    }
    const price=product.price;
    return price;
}
// const price=getPrice({name:'napa',price:35,color:'blue'})
const price=getPrice(5)
// console.log(price);
function getSecond(numbers)
{
    // console.log(Array.isArray(numbers))
    // console.log(typeof numbers)
    if((Array.isArray(numbers)===false))
    {
        return 'please provide an array'
    }
    const second=numbers[1];
    return second;
}
const second=getSecond([1,25,69])
console.log(second)