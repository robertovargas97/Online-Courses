(() => {


    type Avenger = {
        name: string,
        weapon: string,
        power?: number
    }

    const ironman: Avenger = {
        name: "Tony Stark",
        weapon: "Armorsuit"
    }

    const capAmerica: Avenger = {
        name: "Cap America",
        weapon: "Shield"
    }

    const thor: Avenger = {
        name: "Thork",
        weapon: "Mjolnir"
    }

    const avengers: Avenger[] = [ironman, capAmerica, thor];


    for (const avenger of avengers) {
        let { name, weapon } = avenger
        console.log(name, weapon);
    }

})();