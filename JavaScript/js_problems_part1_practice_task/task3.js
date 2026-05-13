function countVowels(givenString)
{
    let count=0;
    for(let char of givenString )
    {
        if(char==='a'||char==='A'||char==='i'||char==='I'||char==='o'||char==='O'||char==='u'||char==='U'||char==='e'||char==='E')
        {
          count++;
        }
    }
    return count;
}
const result=countVowels('sanjanAkhairOney');
console.log(result);