//var let const
const tax=5000;
let eta=5;
eta=2;
//console.log(eta)

//default parameter
function add(num1,num2=0){

}

//template string
const student={name: 'nuba' ,marks:50}
const friends=['raisa','mukta','bakeya']
const dynamicText=`My Tax:${tax} and marks ${student.marks*1.2} and the name of the best best friend is: ${friends[1]} `;
console.log(dynamicText)

const innerHTML=`
<div>
<h1>Hello:${friends.length}</h1>
</div>
`

//arrow function
const add2=(num1,num2=0)=>num1+num2;
const tenTimes=x => x*10;

//spread
const newFriends=[...friends,'authoy','priya']

//destructuring
const{marks:totalMarks}=student;
console.log(totalMarks)

//destructuring array
const[firstFriend]=friends;