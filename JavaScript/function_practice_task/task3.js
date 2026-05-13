const numbers=[1,15,2,7,8,4,32];
 let sum=0
function makeAverage(numbers)
{
    
for(num of numbers)
{
 sum=sum+num;
}
const avg=sum/numbers.length;
return avg;
}
const result=makeAverage(numbers);
console.log(result);