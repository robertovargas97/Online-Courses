(() => {

    class Avenger {
        name;
        power;

        constructor(name, power) {
            this.name = name;
            this.power = power;
        }
    }

    class FlyingAvenger extends Avenger {
        canFly;

        constructor(name, power) {
            super(name, power);
            this.canFly = true;
        }

    }



    const hulk = new Avenger("Bruce Banner", 1000);
    const ironMan = new FlyingAvenger("Tony Stark", 500);
    console.log(ironMan);

})();