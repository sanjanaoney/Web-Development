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
const ethicalHacker=onlyCharacter(true);
console.log(ethicalHacker);

