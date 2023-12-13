abstract class DbCharacter {
    private name: string;

    constructor(_name: string) {
        this.name = _name;
    }

    public abstract attack(): void;

}

class Saiayjin extends DbCharacter {
    private isSaiayjin: boolean;
    private power: string;
    private _maxTransformation: string;

    constructor(_name: string, _power: string, _isSaiayjin: boolean, maxTransformation: string) {
        super(_name);
        this.isSaiayjin = _isSaiayjin;
        this.power = _power;
        this._maxTransformation = maxTransformation;
    }

    public attack(): void {
        console.log(`${this.power.toLocaleUpperCase()} !!!`);
    }
    



    public get maxTransformation(): string {
        return this._maxTransformation;
    }


    public set maxTransformation(v: string) {
        console.log('Max transformation setted');
        this._maxTransformation = v;
    }


}


class DbWorld {
    private characters: DbCharacter[];

    constructor() {
        this.characters = [];
    }

    public addCharacter(character: DbCharacter) {
        this.characters.push(character);
    }

    public showCharacters(): void {
        for (const character of this.characters) {
            console.log(character);
        }
    }


    public getCharacters(): DbCharacter[] {
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




