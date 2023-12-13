(() => {

    // ? means optional property
    let flash: { name: string, age?: number, powers: string[], getName?: () => string } = {
        name: "Barry Allen",
        age: 24,
        powers: ["Ultra Velocidad", "Viajar en el tiempo"],
    }

    // ? means optional property
    let superman: { name: string, age?: number, powers: string[], getName?: () => string } = {
        name: "Clark Kent",
        age: 60,
        powers: ["Ultra Velocidad"],
    }




    flash = {
        name: "Clark Kent",
        age: 60,
        powers: ["Ultra Fuerza"],
        getName() {
            return this.name;
        }
    }

    if (flash.getName) {
        console.log(flash.getName())
    }





})();