// let x = 1;
// let y = "Hello";

// const greeting = y;

// console.log({ x });

// console.warn({ x });

// console.error({ x });

// console.log('%c VARIABLES', 'color :blue; font-weight:bold');

// console.table({ x, y });

// -----------------------ARREGLOS-----------------------------------------------

// const arr = new Array(10); //No tradicional

// console.log(arr);

// const arr2 = [];

// let videoJuegos = ['Mario 3 ', 'Mega Man', 'Devil May Cry'];

// console.log(videoJuegos);

// console.log(videoJuegos[0]);

// let thingsArray = [
//     true,
//     123,
//     'Fernando',
//     1 + 3,
//     function () { },

//     () => { }
//     ,
//     ['Cami', 'Calamar', 'Mami'],

// ];

// console.log(thingsArray[0]);
// console.log(thingsArray[6][1]);

// let games = ['Pepsi Man', 'Devil May Cry'];

// games.forEach((element, index, array) => {

//     console.log([{ element, index, array }]);
// });


// let newLength = games.push('League of legends');

// console.log({ games });

// console.log({ newLength });

// newLength = games.unshift('Dead Space');

// console.log(games);

// console.log(newLength);

// let elementRemoved = games.pop();

// console.log(elementRemoved);

// let position = 1;


// console.log(games);

// let gamesDeleted = games.splice(position, 1);

// console.log(games);
// console.log( gamesDeleted);

// let indexSearch = games.indexOf('Dead Space');

// console.log(indexSearch);


//--------------------------------------------------------------------------

// --------------------------------------OBJETOS----------------------------

// let character = {
//     name: 'Robert',
//     age: 23,
//     power: 'Invisibility',
//     family: {
//         mother: 'Marjorie',
//         father: 'Christopher'
//     },
//     pets: ['Max', 'Flash'],
// };

// console.log(character['family']);
// console.log(character.pets.length);

// const x = 'power';

// console.log('Power: ', character[x]);

// delete character.age;

// console.log(character);

// const parEntries = Object.entries(character);

// console.log(parEntries);

// character.college = true;

// console.log(character);

// Object.freeze(character);

// character.money = 0;

// console.log(character);

// const properties = Object.getOwnPropertyNames(character);

// const values = Object.values(character);

// console.log(values);

// -----------------------------------------------------------------------

// ------------------------------FUNCIONES--------------------------------

// function greeting(name) {
//     console.log(arguments);
//     console.log('Hello ' + name);
//     return 1;
// }

// const greeting2 = function (name) { // Como se agrega al const no  puede ser reasignada
//     console.log('Hello ' + name);
// }

// const arrowGreeting = () => {
//     console.log('Hello arrow');
// }

// const arrowGreeting2 = (name) => {
//     console.log('Hello ' + name);
// }


// greeting('Krillin', 16, 'bald');
// greeting2('Krillin');
// arrowGreeting2('Majin Buu');

// const add = (number1, number2) => {
//     return number1 + number2;
// }

// const addArrowSummarized = (a, b) => a + b;

// console.log(addArrowSummarized(8, 7));

// const random = () => {
//     return Math.random();
// }

// const random2 = () => Math.random();

// console.log(random2());


//------------------------ PRO TIPS-----------------------------------------

function createPerson(name, surname) {
    return {
        name, surname
    };

}

// const createPerson2 = (name, surname) => ({ name, surname });

// const person = createPerson('Roberto', ' Vargas');

// console.log(createPerson2('Rob', 'Var'));


function printArguments() {
    console.log(arguments);
}


const printArguments2 = (...arguments) => {
    // console.log(arguments);
    return arguments;
}

const [money, age, rich, girlfriend] = printArguments2(1, 13, false, true);

console.log({ money, age, rich, girlfriend });

const { surname: newSurname } = createPerson('Roberto', ' Vargas');

console.log(newSurname);


let character = {
    name: 'Robert',
    age: 23,
    power: 'Invisibility',
    pets: ['Max', 'Flash'],
};


// const printProperties = (character) => {
//     console.log(character.name);
//     console.log(character.age);
// }

const printProperties = ({ name, age = 15, power }) => {
    console.log(name);
    console.log(age);
    console.log(power);
}


printProperties(character);



