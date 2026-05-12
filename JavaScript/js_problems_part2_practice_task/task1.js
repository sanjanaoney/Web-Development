const heights2=[167,190,120,165,137];
function getMin(numbers){
    let min=numbers[0];
    for(const num of numbers)
    {
        if(num<min)
        {
            min=num;
        }
    }
    return min;
}
const smallestNumber=getMin(heights2);
console.log('The lowest number is:', smallestNumber);