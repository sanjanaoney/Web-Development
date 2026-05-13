function convertTemparature(celcius)
{

 const farenheit=(9/5*celcius)+32;
 return farenheit;
}
const convertedTemparature=convertTemparature(27);
console.log('Temparature on farenheit: ',convertedTemparature);
