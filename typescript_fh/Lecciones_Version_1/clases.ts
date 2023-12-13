class Avenger {
    name: string;
    power: string;

    constructor(name: string, power: string) {
        this.name = name;
        this.power = power;
    }

    public showPower(): void { 
        console.log(this.power);
    }

}

class FlyingAvenger extends Avenger {
    canFly: boolean;
    constructor(name: string, power: string) {
        super(name, power);
        this.canFly = true;
    }
}

let ironman = new Avenger("Tony", "Money");

let warmachine = new FlyingAvenger("No se", "Armadura");

console.log(warmachine.canFly);

console.log(ironman);

