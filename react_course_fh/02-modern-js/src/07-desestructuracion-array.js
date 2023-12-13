// Asignacion Desestructurante 
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const characters = ["Goku", "Vegeta", "Trunks"];

const [goku, , trunks] = characters;


const returnArreglo = () => {
    return ["ABC", 123];
}

const [letters] = returnArreglo();

console.log(letters);


const use_State = (value) => {
    return [value, () => { console.log("Hello") }];
}

const [name, setName] = use_State("Goku");

console.log(name);
setName();
