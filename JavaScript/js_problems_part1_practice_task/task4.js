function findLongestWord(sentence)
{
    const words=sentence.split(" ");
    let longest=words[0];
    for(word of words)
    {
        if(word.length>longest.length)
        {
            longest=word;
        }
    }
    return longest;

}
const result=findLongestWord("I am learning Programming to become a programmer");
console.log(result);