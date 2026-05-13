function countZero(binaryString){
let count=0;
for(char of binaryString)
{
    if(char==='0'){
        count++;
    }
}
return count;
}
const result=countZero('011110111000001010101');
console.log(result);