const numbers=[4,8,2,3,5];
//we will doubled it and keep it in a array
// const doubled=[]
// for(const num of numbers){
//     const result=num*2;
//     doubled.push(result);
// }

// const doubleIt=x=>x*2
// const doubled=numbers.map(doubleIt)

const doubled=numbers.map(x => x*2)
console.log(doubled)
const fruit=['mango','lychee','avocado']
const nameLength=fruit.map(name=>name.length)

console.log(nameLength)
// const firstLetters=fruit.map(name=>name[0])
const firstLetters=fruit.map(name=>name[0].toUpperCase())
console.log(firstLetters)


const result=numbers.map((numbers,index)=>{
    console.log(num*index)
})