const employee={
    name: 'bob',
    designation: 'qa',
    salary:20000,
    experience: 1,
    age:22
}
console.log(employee)

//-----------------------------------------------------
//if we want to freeze,like we don't want any kind of change
//if we want to remove a property


//seal will allow us modifications,won't allow removing,deleting or adding something

Object.seal(employee)
delete employee.experience

//if we want to increment the salary
employee.salary=employee.salary+5000;
//adding new property
employee.location='Dhaka'
console.log(employee)
