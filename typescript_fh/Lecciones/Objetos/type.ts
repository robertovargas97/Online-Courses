(() => {

    type Hero = {
        name: string,
        age?: number,
        powers: string[],
        getName?: () => string
    }

    // ? means optional property
    let flash: Hero = {
        name: "Barry Allen",
        age: 24,
        powers: ["Ultra Velocidad", "Viajar en el tiempo"],
    }

    // ? means optional property
    let superman: Hero = {
        name: "Clark Kent",
        age: 60,
        powers: ["Ultra Velocidad"],
        getName() {
            return this.name;
        }
    }

    const supermanAgain = { ...superman };
    

    if (flash.getName) {
        console.log(flash.getName())
    }

    console.log(supermanAgain);
    console.log("Tet")





})();