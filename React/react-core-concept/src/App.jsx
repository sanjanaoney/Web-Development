import Users from './Users'
import Counter from './Counter'
import './App.css'
import Friends from './Friends'
import { Suspense } from 'react'


const fetchUsers=fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())

const fetchFriends=async()=>{
const res=await fetch('https://jsonplaceholder.typicode.com/users')
return res.json();
}



function App() {
  const friendsPromise=fetchFriends();
function handleClick(){
  alert('button got clicked')
}
const handleClick3= ()=>{
  alert('clicked 3')
}
const handleAdd5=(num)=>{
  const newNum=num+5;
  alert(newNum);
}
  return (
    <>
     <h1>Vite + React</h1>
     <Counter></Counter>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Users
          fetchUsers={fetchUsers}>
        </Users>
      </Suspense>

    <Suspense fallback={<h3>meeting my friends in....</h3>}>
     <Friends friendsPromise={friendsPromise}>
      
     </Friends>

    </Suspense>




      <button onClick={handleClick}>Click me</button>
      <button onClick={function handleClick2(){
        alert('clicked 2')
      }}>Click me2</button>
      <button onClick={handleClick3}>click me 3</button>

      <button onClick={()=>alert('click 4')}></button>
      <button onClick={()=>handleAdd5(10)}>Click Add 5</button>
    </>
  )
}

export default App
