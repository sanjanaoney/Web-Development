const data=async ()=>{

    //converting it in synchronus way

    const res= await fetch('https://jsonplaceholder.typicode.com/posts/1')
   
//   .then((response) => response.json())
//   .then((json) => console.log(json));
  console.log("Hello");
  const json= await res.json();
  console.log(json)
  console.log(true);
}

data();
