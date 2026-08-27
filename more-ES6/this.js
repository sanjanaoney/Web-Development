class Vehicle{
    #tin;
    constructor(type,brand,price){
        this.type=type
        this.brand=brand
        this.price=price
        this.#tin='12412qfbff'
    }
    getTin(){
        return this.#tin;
    }
    getThis(){
        console.log(this)
    }
    getPrice(){
        return this.price
    }
}
const car1=new Vehicle('car','TOYOTA' ,500000)
const car2=new Vehicle('car','HONDA',40000)
console.log(car1)
car1.getThis();
// car2.getPrice();
// console.log(car2.getPrice())
// console.log(car1.getPrice())

const student={
    name:'Rahul Dravid',
    score:10000,
    getScore:function(){
        console.log(this)
    },
    getScoreArrow:()=>
        console.log(this)
}
student.getScore();
student.getScoreArrow();
console.log('ultimate this',this)
