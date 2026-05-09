const numbers=[300,100,700,1200]

const products=
[
    {name:'shampoo',price:300},
    {name:'comb',price:100},
    {name:'shirt',price:700},
    {name:'pant',price:1200},
    {name:'mask',price:30},
]
function getShopingTotal(products)
{
    let total=0
for (const product of products)
{
 total=total+product.price;
}
return total;
}
const total=getShopingTotal(products);
console.log('total expense',total);