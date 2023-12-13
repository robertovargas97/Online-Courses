"use strict";
let flash = {
    name: "Rob",
    age: 23,
    power: "Good knee"
};
//Objects with specific type
let io = {
    name: "Rob",
    age: 23,
    power: "Good knee"
};
//Methods in objects
let momy = {
    name: "Yuli",
    age: 42,
    power: "Be the best mom",
    getName() {
        return this.name;
    }
};
console.log(momy.getName());
//Multiple types
let anything = true;
anything = 10;
//Chech the type of a variable
let thing = 123;
console.log(typeof thing);
