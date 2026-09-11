const person={
    name: "bob",
    age: 23,
    money:560000,
    isRich: true
}
console.log(person,typeof person);

//JSON.stringify-> makes js object to a string
const personJSON=JSON.stringify(person);
console.log(personJSON, typeof personJSON)

//JSON.parse->makes string to an object 
const parseJSON=JSON.parse(personJSON)
console.log(parseJSON ,typeof parseJSON)