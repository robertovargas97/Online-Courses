(function () {

    // Parametro obligatorio
    // Orden : 1 Obligatorios
    //         2 : Opcionales -- name?
    //         3 : Por defecto -- = valor
    function activate(who: string,
        moment?: string,
        object: string = 'batisignal') {

        if (moment) {
            console.log(`${who} activates ${object} in/at ${moment}`);
        }
        else {
            console.log(`${who} activates ${object}`);
        }

    }

    activate('Gordon','night');

})();

