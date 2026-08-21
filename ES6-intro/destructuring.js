// const product={
//     name:'shirt',
//     price:500,
//     quantity:7
// }

// const discount=product.price*20/100;
// const payableAmount=product.price-discount;
// const vatAmount=product.price*7/100;
// const totalAmount=payableAmount+vatAmount;

// const price=product.price;

// const discount=price*20/100;
// const payableAmount=price-discount;
// const vatAmount=price*7/100;
// const totalAmount=payableAmount+vatAmount;


// const {price}={
//     name:'shirt',
//     price:500,
//     quantity:7
// }
// console.log(price)

const {price,quantity,tax=7}={
    name:'shirt',
    price:500,
    quantity:7
}
//console.log(price,quantity,tax)

// const discount=price*20/100;
// const payableAmount=price-discount;
// const vatAmount=price*7/100;
// const totalAmount=payableAmount+vatAmount;


const device={name:'phone',brand:'samsung',price:17000}

const {brand}=device;
//console.log(brand)

//destructuring can be done in array too
const numbers=[25,88]
const [first,second]=numbers
//console.log(numbers)
const [math,physics]=[90,99]
console.log(math)