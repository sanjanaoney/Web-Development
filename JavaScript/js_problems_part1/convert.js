//12 inch 1 feet
function  inchToFeet(inch)
{
 const feet=inch/12;
 return feet;
}
//75
function inchToFeet2(inch)
{
    const feetFraction=inch/12;
    const feetNumber=parseInt(feetFraction);
    const inchRemaining=inch%12;
    const result=feetNumber+ ' ft ' + inchRemaining + ' inch';
    return result;
}


const sanjanaHeight=inchToFeet(63);
// console.log(sanjanaHeight);
const sanjanaHeight2=inchToFeet2(63);
// console.log(sanjanaHeight2);

function mileToKilometer(mile){
    const kilo= mile*1.60934;
    return kilo;
}
const result=mileToKilometer(200);
// console.log(result);

function kiloMeterToMiles(kilo){
    const mile= kilo* 0.621371;
    return mile;
}
const result2=kiloMeterToMiles(10);
console.log(result2);