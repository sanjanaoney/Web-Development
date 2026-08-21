const numbers=[1,2,54,1,4,9];
for(const num of numbers){
    //console.log(num)
}
//running loop on object
const employee={
    name: 'bob',
    designation: 'qa',
    salary:20000,
    experience: 1,
    age:22
}
for(key in employee){
    const value=employee[key]
    console.log(key,value);
}

const keys=Object.keys(employee);
console.log(keys)