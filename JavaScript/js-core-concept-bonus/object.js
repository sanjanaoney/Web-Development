const hero={
    name: 'Sakib Khan',
    id:121,
    address:'Mirpur',
    isSingle:true,
    friends:['Opu','Raaz','Salman','aamir'],
    car:{
        brand:'BMW',
        price:5000000000,
        made:2025,
        maufacturer:{
            name:'BMW',
            country:'USA'
        }
    },
    movies:[{name:'no 1',year:2015},{name:'king khan',year:2018}],
    act:function()
    {
        console.log('acting like Sakib Khan')
    }
}
// console.log(student);
console.log(hero.act);
hero.act();