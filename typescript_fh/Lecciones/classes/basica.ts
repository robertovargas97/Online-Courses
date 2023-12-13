(() => {
    class Avenger {
        private name: string;
        public team: string;
        // The `?` symbol makes the property optional
        public realName?: string;
        static averageAge: number = 35;

        static getClassName() {
            // It will return the name of the CLASS, since it is static
            return this.name;
        }

        // The `?` symbol makes the property optional
        constructor(name: string, team: string, realName?: string) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }

        // Methods
        public bio(): string {
            return `${this.name} (${this.team})`;
        }
    }

    // ----------------- Shorter way to define properties -----------------
    class Avenger2 {
        static averageAge: number = 35;

        // The `?` symbol makes the property optional
        constructor(
            private name: string,
            public team: string,
            public realName?: string,
            averageAge: number = 55
        ) {
            Avenger2.averageAge = averageAge
        }
    }

    // ------------------------------------------------------------------------------------------------------
    const antMan: Avenger = new Avenger("Ant Man", "Captain America");
    // console.log(antMan.bio());
    // console.log(Avenger.getClassName())


})();