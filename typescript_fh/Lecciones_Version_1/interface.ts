
interface Xmen {
    name: string,
    power?: string

    regenerate(realName: string): void; //Optional method = name?
}


const sentToMission = (xmen: Xmen): void => {
    console.log(`${xmen.name} has been sended to a mission`);
    xmen.regenerate('Logan');
}

const wolverine: Xmen = {
    name: 'Wolverine',
    power: 'Regeneration',

    regenerate(realName: string) {
        console.log(`${realName} has been regenerated`);
    }
}

sentToMission(wolverine);


class Mutant implements Xmen {

    name: string;
    regenerate(): void {
        console.log(`${this.name} has been regenerated`);
    };

    constructor(name: string) {
        this.name = name;
    }

}

let myMutant = new Mutant("Rob");

myMutant.regenerate();


//Interface for functions

interface TwoNumbersFunc {
    (num1: number, num2: number): number;
}

let add: TwoNumbersFunc = (a: number, b: number) => {

    return a + b;
}


let substract: TwoNumbersFunc = (a: number, b: number) => {

    return a - b;
}

