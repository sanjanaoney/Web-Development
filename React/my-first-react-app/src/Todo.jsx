// export default function ToDo({task,isDone}){

//     return(
//         <li>Task:{task} </li>
//     )
// }

// export default function ToDo({task,isDone,time=0}){
//  if(isDone===true){
//      return(
//     <li>Done:{task} Duration:{time}</li>
//   ) 
//  } 
//  else{
//     return <li>pending:{task}</li>
//  }
// }


//conditional rendering: 3 ternary
// export default function ToDo({task,isDone,time=0}){
//    return isDone? 
//    <li>Done:{task} time:{time}</li>
//    : <li>Not Done: {task}</li>
// }

//conditional rendering: 4 &&

// export default function ToDo({task,isDone,time=0}){
//    return isDone && <li>Done Tasks:{task} time:{time}</li>
// }
//conditional rendering: 5 ||

// export default function ToDo({task,isDone,time=0}){
//    return isDone || <li>Done Tasks:{task} time:{time}</li>
// }

//conditional rendering:6 use variable
export default function ToDo({ task, isDone, time }) {
   const displayTime = time ? time : 100;

   let listItem;

   if (isDone === true) {
      // return null;
      listItem = <li>Done: {task} time:{displayTime}</li>
   }
   else {
      // return <li>pending:{task}</li>
      listItem = <li>pending: {task}</li>
   }
   return listItem;
}
