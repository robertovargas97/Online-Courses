"use strict";
(function () {
    // DESESTRUCURACION DE OBJETO
    var avenger = {
        name: 'Steve',
        key_name: 'Captain america',
        power: 'drug'
    };
    var avenger2 = {
        name: 'Tony',
        key_name: 'Iron Man',
        power: 'Money'
    };
    var extract = function (_a) {
        // const { name, key_name } = avenger; //Linea de desestructuracion
        var name = _a.name, key_name = _a.key_name;
        console.log(name);
        console.log(key_name);
    };
    // extract(avenger2);
    // ----------------------------------------------------------------------------
    // DESESTRUCTURCION DE ARREGLO
    var avengers = ['Thor', 'Iron Man', 'Spiderman'];
    var thor = avengers[0], ironmna = avengers[1], spiderman = avengers[2];
    var arana = avengers[2]; //Para el elemnto que quiero solo dejo en blanco las demas
    var extractArray = function (_a) {
        var thor = _a[0], ironman = _a[1], spiderman = _a[2];
        console.log(thor);
        console.log(ironman);
        console.log(spiderman);
    };
    extractArray(avengers);
})();
