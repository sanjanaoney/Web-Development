const phones=[
   {name: 'Samsung',
   price: 20000,
   camera: '12mp',
   color: 'black'   
},
   {name: 'Xaomi',
   price: 18000,
   camera: '16mp',
   color: 'pink'   
},
   {name: 'Oppo',
   price: 30000,
   camera: '20mp',
   color: 'white'   
},
   {name: 'iPhone',
   price: 120000,
   camera: '12mp',
   color: 'orange'   
},
   {name: 'Walton',
   price: 10000,
   camera: '8mp',
   color: 'grey'   
},
   {name: 'Tecno',
   price: 30000,
   camera: '13mp',
   color: 'purple'   
}
]

function getCheapestPhone(phones){
    let min=phones[0];
    for(const phone of phones){
        if(phone.price<min.price){
        min=phone;
        }
    }
    return min;
    
}
const cheap=getCheapestPhone(phones);
console.log('Cheapest phone is:',cheap);