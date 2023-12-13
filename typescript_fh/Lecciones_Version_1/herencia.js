"use strict";
class DbCharacter {
    constructor(_name) {
        this.name = _name;
    }
}
class Saiayjin extends DbCharacter {
    constructor(_name, _power, _isSaiayjin, maxTransformation) {
        super(_name);
        this.isSaiayjin = _isSaiayjin;
        this.power = _power;
        this._maxTransformation = maxTransformation;
    }
    attack() {
        console.log(`${this.power.toLocaleUpperCase()} !!!`);
    }
    get maxTransformation() {
        return this._maxTransformation;
    }
    set maxTransformation(v) {
        console.log('Max transformation setted');
        this._maxTransformation = v;
    }
}
class DbWorld {
    constructor() {
        this.characters = [];
    }
    addCharacter(character) {
        this.characters.push(character);
    }
    showCharacters() {
        for (const character of this.characters) {
            console.log(character);
        }
    }
    getCharacters() {
        return this.characters;
    }
}
const world = new DbWorld();
const goku = new Saiayjin('Goku', 'Kame hame ha', true, 'God Saiayjin');
const vegetta = new Saiayjin('Vegetta', 'Galic Gun', true, 'God Saiayjin');
world.addCharacter(goku);
world.addCharacter(vegetta);
world.showCharacters();
for (const warrior of world.getCharacters()) {
    warrior.attack();
}
console.log(goku.maxTransformation);
goku.maxTransformation = 'Blue Saiayjin';
console.log(goku.maxTransformation);
