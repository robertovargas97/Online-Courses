"use strict";
const sentToMission = (xmen) => {
    console.log(`${xmen.name} has been sended to a mission`);
    xmen.regenerate('Logan');
};
const wolverine = {
    name: 'Wolverine',
    power: 'Regeneration',
    regenerate(realName) {
        console.log(`${realName} has been regenerated`);
    }
};
sentToMission(wolverine);
class Mutant {
    regenerate() {
        console.log(`${this.name} has been regenerated`);
    }
    ;
    constructor(name) {
        this.name = name;
    }
}
let myMutant = new Mutant("Rob");
myMutant.regenerate();
let add = (a, b) => {
    return a + b;
};
let substract = (a, b) => {
    return a - b;
};
