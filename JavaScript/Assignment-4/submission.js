function totalFine( fare )
{
    if(typeof fare !=='number'||fare<=0){
      return "Invalid";
   }  
   else{
      fine=fare+fare*(20/100)+30;
   return fine; 
   }  
}



function  onlyCharacter( str ) {
          if(typeof str !=='string'){
      return "Invalid";
   } 
   let result='';
   for(const char of str)
   {
    if(char!==' '){
        result=result+char.toUpperCase();
    }
   }
   return result;

}



function bestTeam(team1,team2)
{
if(typeof team1!=='object'||typeof team2!=='object')
{
    return "Invalid";
}
const total1=team1.foul+team1.cardY+team1.cardR;
const total2=team2.foul+team2.cardY+team2.cardR;
if(total1<total2){
    return team1.name;
}
else if(total1>total2)
{
    return team2.name;
}
else{
    return "Tie";
}
}



function isSame(arr1,arr2)
{
if(Array.isArray(arr1)===false||Array.isArray(arr2)===false)
{
    return "Invalid";
}
if(arr1.length!==arr2.length)
{
    return false;
}
for(let i=0;i<arr1.length;i++){
 if (arr1[i]!==arr2[i]) 
    {
            return false;
        }
    }
    return true;
}



function  resultReport( marks ) {
    if(Array.isArray(marks)===false)
    {
        return "Invalid";
    }
    let sum=0;
    let pass=0;
    let fail=0;
    for(const mark of marks)
    {
        sum=sum+mark;
        if(mark>=40)
        {
           pass++;
           
        }
        else{
            fail++;
           }
        }

    //const finalScore=Math.round(sum/marks.length);
    let finalScore = 0;
    if (marks.length>0) {
        finalScore=Math.round(sum/marks.length);
    }
    return{
        finalScore: finalScore,
        pass: pass,
        fail: fail
    };
}






