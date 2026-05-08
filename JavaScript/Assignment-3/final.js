/** Problem -01 ( Divide the Asset ) */
var area = 2060;
//write your code here
var property=area/2;
console.log(property);

/** Problem -02 ( Cycle or Laptop ) */
var money = 9999;
//write your code here
if(money>=25000){
    console.log("Laptop")
}
else if(money>=10000)
{
    console.log("Cycle")
}
else{
    console.log("Chocolate")
}

/** Problem -03 ( Medicine Planner ) */
var lastDay = 6 ;
//write your code here
for(i=1;i<=lastDay;i++){
if(i%3===0){
    
    console.log(i," -"," medicine")
}
else{
    console.log(i," -"," rest")
}
}

/** Problem 04 - (Delete / Store) */
var fileName= "slipdf.txt";
//write your code here
var n = fileName.length;
if (fileName[0] === '#') {
    console.log("Store");
}
else if (
    fileName[n - 4] === '.' &&
    fileName[n - 3] === 'p' &&
    fileName[n - 2] === 'd' &&
    fileName[n - 1] === 'f'
)
 {
    console.log("Store");
}
else if (
    fileName[n - 5] === '.' &&
    fileName[n - 4] === 'd' &&
    fileName[n - 3] === 'o' &&
    fileName[n - 2] === 'c' &&
    fileName[n - 1] === 'x'
)
 {
    console.log("Store");
}
else {
    console.log("Delete");
}

/** Problem 05 - ( PH Email Generator )  */
var student= { name: "mewo" , roll: 96 ,department: "cse" };
//write your code here
console.log(student.name.concat(student.roll,".",student.department,"@ph.ac.bd"))

/** Problem 06 :  (Current Salary )  */
var experience = 40;
var startingSalary = 30000;
//write your code here
var rate = 5 / 100;
var currentSalary = startingSalary;
for (var i = 1; i <= experience; i++)
{
    currentSalary = currentSalary * (1 + rate);
}
console.log(currentSalary.toFixed(2));