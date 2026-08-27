class Animal{
    constructor(name,age)
    {
      this.name=name;
      this.age=age;
    }
}
class Dog extends Animal{
    constructor(name,breed,age){
        super(name,age)
        // this.name=name;
        this.breed=breed;
    }
    eat(){
        console.log(`${this.name} is eating`);
    }
    bark(){
        console.log(`${this.name} is barking`);
    }
}
class Cat extends Animal{
    constructor(name,color,age){
        super(name,age)
        // this.name=name;
        this.color=color;
    }
    eat(){
        console.log(`${this.name} is eating`);
    }
    meow(){
        console.log(`${this.name} is meowing`);
}
}
class Bird extends Animal{
    constructor(name,species,age){
        // this.name=name;
        super(name,age)
        this.species=species;
        // this.age=age;
    }
    eat(){
        console.log(`${this.name} is eating`);
    }
    fly(){
        console.log(`${this.name} is flying`);
}
}
const dog1=new Dog('tom','Deshi',1)
console.log(dog1)
dog1.eat()
const cat1=new Cat('mikula','cream and brown',2)
console.log(cat1)
cat1.meow()
const bird1=new Bird('mockingbird','foreign',2)
console.log(bird1)
bird1.fly()
