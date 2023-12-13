(() => {

    type Avengers = {

        nick: string;
        ironman: string;
        vision: string;
        active: boolean;
        power: number;

    }

    const avengers: Avengers = {
        nick: "Samuel L. Jackson",
        ironman: "Robert Downey Jr.",
        vision: "Paul Bettany",
        active: true,
        power: 1500.123123
    }

    const { power, vision } = avengers;
    // console.log(power, vision.toLocaleUpperCase());

    const printAvenger = ({ ironman, ...rest }: Avengers) => {
        console.log(ironman, rest);
    }

    // printAvenger(avengers);

    const avengersArr: string[] = ["Cap. America", "Ironman", "Hulk"];

    const [, ironman,] = avengersArr;
    // console.log(ironman);

})();