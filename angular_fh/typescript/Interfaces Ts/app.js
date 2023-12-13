"use strict";
(() => {
    const sendToMission = (xmen) => {
        console.log(`Sending ${xmen.name} to the mission`);
    };
    const backToBarracks = (xmen) => {
        console.log(`${xmen.name} is backing to the barrack`);
    };
    const wolverine = {
        name: 'Logan',
        age: 60
    };
    sendToMission(wolverine);
    backToBarracks(wolverine);
})();
