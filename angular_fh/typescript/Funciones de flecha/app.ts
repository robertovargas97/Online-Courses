(() => {

    const myFunction = function a(a: string) {
        return a.toUpperCase();
    }

    const myAfunction = (a: string) => {
        return a.toUpperCase();
    }
    //Con una linea de codigo puedo retornar un valor, por ejemplo
    const myAfunction2 = (a: string) => a.toUpperCase();



    const nSume = function (a: number, b: number) {
        return a + b;
    }

    //Con una linea de codigo puedo retornar un valor, por ejemplo
    const aSume = (a: number, b: number) => a + b;

    const hulk = {
        name: 'Hulk',
        smash() {

            setTimeout(() => { //NO modifica el this del scope
                console.log(`${this.name} smash!!!!`)
            }, 1000);

        }
    }


    hulk.smash();

})();

