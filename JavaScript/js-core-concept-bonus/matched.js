const numbers=[45,65,23,98,19];
// for(let i=0;i<numbers.length;i++)
// {
//     const number=numbers[i];
//     console.log(number);
// }

//simplified version (for of loop)
// for(const number of numbers)
// {
// console.log(number);
// }

const products=[
    {id:1, name:'walton phone',price:10000},
    {id:2, name:'samsung phone',price:50000},
    {id:3, name:'iphone',price:150000},
    {id:4, name:'tecno phone',price:30000},
    {id:5, name:'vivo phone',price:20000},
    {id:6, name:'huawei phone',price:8000},
    {id:7, name:'google pixel',price:60000},
    {id:8, name:'xaomi',price:18000}
];
// for(const product of products)
// {
//     console.log(product);
// }

function matchedProducts(products,search){
    const matched=[];
    for(const product of products)
    {   
        if(product.name.toLowerCase().includes(search.toLowerCase()))
        { //for case sensitiveness
        }
       
    }
    return matched;
}
const result=matchedProducts(products,'phone');
console.log(result);
