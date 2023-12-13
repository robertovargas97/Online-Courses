(() => {

    interface Xmen {
        name: string;
        realName: string;
        mutantPower(): string
    }

    interface Human {
        age: number;
    }


    class Mutant implements Xmen, Human {

        constructor(public name: string, public realName: string, public age: number) { };

        mutantPower(): string {
            return "Activating power"
        }

    }

    const wolverine = new Mutant("Wolverine", "Logan", 40);

    console.log(wolverine.mutantPower());

})();

