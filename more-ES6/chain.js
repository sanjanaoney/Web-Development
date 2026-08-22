//object er bhitor object

const student={
    name: 'meena',
    marks:96,
    1:50,
    family:{
        title:'cartoon',
        mother:{
            name: 'rajur ammu',
            age:45
        }
    },
    'home-address': 'new york'
}
console.log(student.family)
console.log(student.family.title)

//nested object
console.log(student.family.mother.age)

//optional chain
//suppose mother object nai
console.log(student.family.mother?.age) //output undefined