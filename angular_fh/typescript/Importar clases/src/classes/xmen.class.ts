function printConsole(constructor: Function) {
    console.log(constructor);

}

// un decorador se coloca antes de a definicion de la clase y permite anadirle funcionalidades a la misma

@printConsole
export class Xmen {

    constructor(public name: string, public powerLevel: number) { };

    fight() {
        console.log(`${this.name} is ready to fight.`)
    }
}