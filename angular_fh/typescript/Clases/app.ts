(() => {

    class Avenger { //USAR UPPER CAMELCASE

        name: string;
        team: string;
        realName: string;
        canFight: boolean;
        fightsWon: number;

        // LUEGP DE ATRIBUTOS DE CLASE
        constructor(name: string, team: string, realName: string, canFight: boolean, fightsWon: number) {

            this.name = name;
            this.team = team;
            this.realName = realName;
            this.canFight = canFight;
            this.fightsWon = fightsWon;
        }

    }



    class AvengerN {
        constructor(public name: string,
            public team: string,
            public realName: string,
            public canFight: boolean = false,
            public fightsWon: number = 0) { }
    }


    const antMan = new Avenger('Antman', 'IronMan', 'Pepe', true, 5);

    console.log(antMan);





})();

