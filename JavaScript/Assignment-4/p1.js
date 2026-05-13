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
const result=totalFine("Gorib tai ticket katinai");
console.log(result);

