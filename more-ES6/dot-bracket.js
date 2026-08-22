const student={
    name: 'meena',
    marks:96,
    1:50,
    'home-address': 'new york'
}
console.log(student)
console.log(student['home-address'])
let value;
for(const key in student){
     value=student[key]
}
console.log(value)