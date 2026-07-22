// create element and set innerText or innerHTML
const newChild=document.createElement('li');
newChild.innerText='New born footballer here';

//find the parent where you will add the child
const playersList=document.getElementById('players-list');

//append the child to the parent
playersList.appendChild(newChild)