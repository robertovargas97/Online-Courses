(() => {
    class Avenger {

        constructor(public name: string, public realName: string) {
            // console.log("Constructor Called!!!");
        }

        protected getFullName(): string {
            return `${this.name} - ${this.realName}`;
        }
    }


    class Xmen extends Avenger {

        constructor(name: string, realName: string, public isMutant: boolean) {
            super(name, realName);
            // console.log("Constructo Xmen Called.");
        }

        public xMengGetFullName() {
            console.log(super.getFullName());
        }


        get fullName() {
            return super.getFullName();
        }

        set fullName(name: string) {
            if (name.length < 3) {
                throw new Error("The name should have more than 3 letters.")
            }
            this.name = name;
        }
    }


    const wolverine = new Xmen("Wolverine", "Logan", true);
    wolverine.fullName = "Roberto";
    // console.log(wolverine.fullName);
    // wolverine.xMengGetFullName();


})();