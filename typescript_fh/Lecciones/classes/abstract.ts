(() => {

    abstract class Mutant {
        constructor(
            public name: string,
            public realName: string
        ) { }
    }

    class Xmen extends Mutant {

        public saveTheWorld() {
            return "The world has been saved."
        }

    }

    class Villian extends Mutant {

        public conquerTheWorld() {
            return "The world has been conquered."
        }

    }

    const wolverine: Xmen = new Xmen("Wolverine", "Logan");
    const magneto = new Villian("Magneto", "Magnus");

    // console.log(wolverine.saveTheWorld());
    // console.log(magneto.conquerTheWorld());

    const printName = (character: Mutant) => {
        console.log(character.realName);

    }

    // printName(wolverine);




})();