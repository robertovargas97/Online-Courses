let avengers = {
    nick: "Samuel",
    ironman: "Robert",
    vision: "Paul"
}

let { nick, ironman: mop, vision } = avengers;

console.log(mop);

//Desestructuracion de arreglos

let dbz = ['Goku', 'Vegeta', 'Trunks'];

let [, vegeta] = dbz;

console.log(vegeta);

for (const character of dbz) {
    console.log(character);
}