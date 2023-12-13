(() => {

    // DESESTRUCURACION DE OBJETO
    const avenger = {
        name: 'Steve',
        key_name: 'Captain america',
        power: 'drug'
    }

    const avenger2 = {
        name: 'Tony',
        key_name: 'Iron Man',
        power: 'Money'
    }


    const extract = ({ name, key_name }: any) => {
        // const { name, key_name } = avenger; //Linea de desestructuracion

        console.log(name);
        console.log(key_name);

    }

    // extract(avenger2);


    // ----------------------------------------------------------------------------

    // DESESTRUCTURCION DE ARREGLO

    const avengers: string[] = ['Thor', 'Iron Man', 'Spiderman'];

    const [thor, ironmna, spiderman] = avengers;

    const [, , arana] = avengers; //Para el elemnto que quiero solo dejo en blanco las demas

    const extractArray = ([thor, ironman, spiderman]: string[]) => {

        console.log(thor);
        console.log(ironman);
        console.log(spiderman);

    }

    extractArray(avengers);

})();

