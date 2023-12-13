"use strict";
(function () {
    var message = 'Hello'; //Puede usarse igual que var,pero se utiliza solo en el scope que se coloca y crea un nuevo espacio de memoria
    var message_2 = 'Hello'; //No permite que se cambie el valor
    if (true) {
        var message_1 = 'World';
    }
    console.log(message);
})();
