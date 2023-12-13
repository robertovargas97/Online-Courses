"use strict";
class Avenger {
    constructor(name, power) {
        this.name = name;
        this.power = power;
    }
    showPower() {
        console.log(this.power);
    }
}
class FlyingAvenger extends Avenger {
    constructor(name, power) {
        super(name, power);
        this.canFly = true;
    }
}
let ironman = new Avenger("Tony", "Money");
let warmachine = new FlyingAvenger("No se", "Armadura");
console.log(warmachine.canFly);
console.log(ironman);
