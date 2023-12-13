console.log("wop wop wop");
let isGoku: boolean = false;

console.log(isGoku);

if (isGoku) {
    console.log("Kame ha me ha");
}
else {
    console.log("Bing bang attack");
}


let age: number = 0.5;
console.log(age);

let me: string = "Rob", mom = "Mami";

let concat: string = `${me} ${mom}`;

console.log(concat);

///ARRAYS

let array: number[] = [1, 2];

//Tuples
let hero: [string, number] = ['Dr. Strange', 100];

enum Volume {
    min,
    mid,
    max
}

let audio = Volume.min;

function none(): void {
    console.log('void');
}

//Cast

let anyValue: any = "Any";

let lenght = (<string>anyValue).length;

console.log(lenght);

let hero2: string = "Flash";

const getHeroName = (): string => {
    return hero2;
}

