const numbers = [5,6,11,12,98, 5];
function repeatedNumberOccurance(find)
{
    let count=0;
    for(const num of numbers ){
        if(num===find){
            count++;
        }
    }
    return count;
}
const result=repeatedNumberOccurance(25);
console.log(result);