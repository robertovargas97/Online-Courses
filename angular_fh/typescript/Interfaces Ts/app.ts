(() => {

    interface Xmen {
        name : string;
        age : number;
        power? : string;
    }


    const sendToMission = (xmen: Xmen) => {
        console.log(`Sending ${xmen.name} to the mission`)
    };

    const backToBarracks = (xmen: Xmen) => {
        console.log(`${xmen.name} is backing to the barrack`)
    };

    const wolverine:Xmen = {
        name: 'Logan',
        age: 60
    }

    sendToMission(wolverine);

    backToBarracks(wolverine);

})();

