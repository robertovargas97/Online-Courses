import powers from "../data/powers";


export class Hero {
    constructor(
        public name: string,
        public powerId: number,
        public age: number
    ) { }

    get power (): string{
        return powers.find(power => power.id === this.powerId)?.desc || "Not Found";
    }

}

export class Hero2 {
    constructor() { }
}

export const PI = 3.1416;

export const myName = "Roberto";