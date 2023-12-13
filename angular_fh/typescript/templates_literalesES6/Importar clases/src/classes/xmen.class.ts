export class Xmen {

    constructor(public name: string, public powerLevel: number) { };

    fight() {
        console.log(`${this.name} is ready to fight.`)
    }
}