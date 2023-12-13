"use strict";
(() => {
    class Avenger {
        // LUEGP DE ATRIBUTOS DE CLASE
        constructor(name, team, realName, canFight, fightsWon) {
            this.name = name;
            this.team = team;
            this.realName = realName;
            this.canFight = canFight;
            this.fightsWon = fightsWon;
        }
    }
    class AvengerN {
        constructor(name, team, realName, canFight = false, fightsWon = 0) {
            this.name = name;
            this.team = team;
            this.realName = realName;
            this.canFight = canFight;
            this.fightsWon = fightsWon;
        }
    }
    const antMan = new Avenger('Antman', 'IronMan', 'Pepe', true, 5);
    console.log(antMan);
})();
