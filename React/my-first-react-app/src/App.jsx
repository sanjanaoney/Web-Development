
import './App.css'
import ToDo from './Todo';
import Actor from './Actor';
import Singer from './Singer';
import Library from './Library';

function App() {
   const actors=['Tom','Zendaya','Sadie sink','RDJ','Tom Hiddleston'];

  const singers=[
{id:1, name:'ED', age:35},
{id:2, name:'lana', age:41},
{id:3, name:'dua', age:31},


  ]
const books=[
  {id:1, name:'physics', price:250},
  {id:2, name:'chemistry', price:350},
  {id:3, name:'biology', price:150},
  {id:4, name:'higher math', price:450},
  {id:5, name:'quantum mechanics', price:550},
]
  return (
    <>
      <h1>React Core Concept</h1>

       <Library books={books}></Library>
       {
        singers.map(singer=><Singer key={singer.id} singer={singer}></Singer>)
       }

      
      {
        actors.map(actor => <Actor actor={actor}></Actor>)
      }
       





      {/* <ToDo task="Learn React"
        isDone={true}
        time={time}></ToDo>
      <ToDo task="Revise JS" isDone={false}></ToDo>
      <ToDo task="Learn CSS" isDone={true} time="100"></ToDo> */}
    </>
  )
}

export default App
