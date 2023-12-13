(() => {

    const hero: string = "Flash";

    function returnName(): string {
        return hero;
    }

    const activateBatiSignal = (): string => {
        return "Bati Signal Activated";
    }

    console.log(typeof activateBatiSignal)

    const heroName = returnName();

})();