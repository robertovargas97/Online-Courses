"use strict";
(function () {
    // Parametro obligatorio
    // Orden : 1 Obligatorios
    //         2 : Opcionales -- name?
    //         3 : Por defecto -- = valor
    function activate(who, moment, object) {
        if (object === void 0) { object = 'batisignal'; }
        if (moment) {
            console.log(who + " activates " + object + " in/at " + moment);
        }
        else {
            console.log(who + " activates " + object);
        }
    }
    activate('Gordon', 'night');
})();
