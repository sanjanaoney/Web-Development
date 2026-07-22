// console.log('append file connected')
// parent node
const mainContainer=document.getElementById('main-container')
// console.log(mainContainer)

//create child node
const placesSection=document.createElement('section');

//create h1
const h1=document.createElement('h1');
h1.innerText='Places I want to visit';
placesSection.appendChild(h1)

const ul=document.createElement('ul');
const li1=document.createElement('li');
li1.innerText='Bandarban';
const li2=document.createElement('li');
li2.innerText='Sundarban';

ul.appendChild(li1);
placesSection.appendChild(li1);
ul.appendChild(li2);
placesSection.appendChild(li2);


//append placeSection to the mainContainer
mainContainer.appendChild(placesSection)


//easier to create HTML
const bookSection= document.createElement('section');
bookSection.innerHTML=`
<h1>Books I need to read</h1>
<ul>
<li>Ice and fire</li>
<li>Life</li>
<li>Himu</li>
</ul>
`

mainContainer.appendChild(bookSection)



