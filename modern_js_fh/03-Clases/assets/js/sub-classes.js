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


class FarmAnimal extends Animal {

    color = "";

    constructor(name, type, sound) {

        super(name, type, sound);

        this.color = 'white whit black';
    }

    makeSound(){
        return `AHHHHH MAMAAAAAAA ${this.sound} ${super.makeSound()}`;
    }
    
}



const vaquita = new FarmAnimal('Cloe', 'cow', 'muuuua');

console.log(vaquita);


console.log(vaquita.makeSound());