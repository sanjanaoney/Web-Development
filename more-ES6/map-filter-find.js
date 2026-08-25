const students=[
    {
        id:1,
        name: 'nushra',
        marks:59
    },
    {
        id:7,
        name: 'nuba',
        marks:88
    },
    {
        id:2,
        name: 'labib',
        marks:99
    },
    {
        id:10,
        name: 'fahim',
        marks:64
    }
]

const names=students.map(student=>student.name)
const goodStudent=students.filter(student=>student.marks>80)
const firstStudent=students.find(student=>student.marks>90)
console.log(firstStudent)