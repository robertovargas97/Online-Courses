// const rob = {
//     name: 'Robert',
//     age: '23',
//     print() {
//         console.log(`My name is ${this.name} and I am ${this.age}`);
//     }
// };

// rob.print();

// function Persona(name, age) {
//     this.name = name;
//     this.age = age;

//     this.print = () => {
//         console.log(`My name is ${this.name} and I am ${this.age}`);
//     };

// }

// const cami = new Persona('Camila', 18);
// console.log(cami);
// cami.print();


// CLASES BASICAS
class Animal {

    //Puede ser usado sin tener instancias de la clase como tal
    static _counter = 0;

    static get getCounter() {
        return Animal._counter;
    }

    static message() {
        console.log('Im a static method in Animal class');
    }


    name = "";
    type = "";
    sound = "";
    food = "";

    constructor(name = '', type = '', sound = '') {
        this.name = name;
        this.type = type;
        this.sound = sound;
        Animal._counter++;
    }

    set setFood(food) {
        this.food = food.toUpperCase();
    }

    get getFood() {
        return this.food;
    }

    makeSound() {
        return this.sound;
    }
}




const max = new Animal('max', 'dog', 'guau guau');

const flash = new Animal('flash', 'turtle', 'ahhhh');


console.log(max.makeSound());
console.log(flash.makeSound());

max.setFood = 'Nutrisourse';

console.log(max);

console.log(max.getFood);

console.log(Animal.getCounter);
Animal.message();