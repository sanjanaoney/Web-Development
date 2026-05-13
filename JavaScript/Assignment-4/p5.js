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
const result=resultReport(100);
console.log(result);

