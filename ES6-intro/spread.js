const numbers=[45,90,23,16,89]
console.log(numbers)
console.log(...numbers)

// const max=Math.max(1121,56,94,112,514,23)
const max=Math.max(...numbers)
console.log(max)

// const first=[12,3,4,5];
// const second=first;
// second.push(6);
// console.log(first);

//if we want to avoid pushing in the first
//therefore array copy korar jonno we need spread operator
const first=[12,3,4,5];
const second=[...first];

second.push(6);
const third=[...first,...second]
console.log(first);
console.log(second);
console.log(third);

//doing the same thing for object
const person={
    name: 'nuba',
    age: 13
}
const favthings={
    food:'pizza',
    hobby:'drawing',...person
}
console.log(favthings)


//arrow function

const total=(a,b,c)=>a+b+c;
// const resultt=total(1,2,3)
const digits=[78,55,66]
//array ke function call e spread korbo
const summation=total(...digits)
console.log(summation)
