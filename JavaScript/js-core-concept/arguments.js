function add(a,b){
    // console.log(a,b)
    console.log(arguments) //array like object
    const params=[...arguments] //now will convert it into an array
    console.log(params)
}
// add(5,3);
add(5,3,4,8,9,2,3,7);

//arguments normal function e pawa jabe
//arrow function e pawa jabena