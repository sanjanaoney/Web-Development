// if year is divisible by 4 then it is leap year. 
function isLeapYear(year){
    if(year%4===0){
        return true;
    }
    else{
        return false;
    }
}
// const leapyear=isLeapYear(2002);
// console.log(leapyear);

// those year that is not divisible by 100,if the year is divisible by 4: then it will be a leap year
function isLeapYear2(year){
    if(year%100 !==0 && year%4===0)
    {
        return true;
    }
    else if(year%100===0 && year%400===0){
        return true;
    }
    else{
        return false;
    }
}
const leapyear=isLeapYear2(2100);
console.log(leapyear);