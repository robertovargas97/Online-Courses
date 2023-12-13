// // import { Hero as SuperHero, Hero2 } from "./classes/Hero";
// // const ironMan: SuperHero = new SuperHero("Iron Mann", 1, 45);


// import * as HeroClasses from "./classes/Hero";
// // export by default
// import powers from "./data/powers";

// const ironMan: HeroClasses.Hero = new HeroClasses.Hero("Iron Mann", 1, 45);

// console.log(ironMan.power);

// console.log(powers)

// -----------------------------------------------------
// import { Hero } from "./interfaces/hero";
// import { Villian } from "./interfaces/villian";

import { printObject, genericFunction, genericFunctionArrow } from "../generics/generics";
import { Villian, Hero } from "../interfaces";



printObject(123);
printObject(new Date());
printObject([1, 2, 3, 4, 5]);

const name: string = "Roberto";
const date: Date = new Date();

console.log((genericFunctionArrow(name).concat(" Vargas")));
console.log((genericFunctionArrow(3.1416).toFixed(2)));
console.log((genericFunctionArrow(date.getFullYear())));


const deadpool = {
    name: "Deadpool",
    realName: "Wade Winston",
    dangerLevel: 130
}

console.log(genericFunctionArrow<Villian>(deadpool).name)