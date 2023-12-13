let flash = {
    name: "Rob",
    age: 23,
    power: "Good knee"
};

//Objects with specific type
let io: { name: string, age: number, power: string } = {
    name: "Rob",
    age: 23,
    power: "Good knee"
};

//Methods in objects
let momy: Person = {
    name: "Yuli",
    age: 42,
    power: "Be the best mom",
    getName() {
        return this.name;
    }
};

console.log(momy.getName());

//Personalize types
type Person = {
    name: string,
    age: number,
    power: string,
    getName: () => string
}

//Multiple types
let anything: string | number | boolean = true;
anything = 10;

//Chech the type of a variable
let thing: any = 123; 
console.log(typeof thing);
