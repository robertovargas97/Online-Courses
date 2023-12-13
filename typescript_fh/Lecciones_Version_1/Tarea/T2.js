"use strict";
// Funciones Básicas
function sumar(a, b) {
    return a + b;
}
let contar = function (heroes) {
    return heroes.length;
};
let superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
//Parametros por defecto
function llamarBatman(llamar = false) {
    if (llamar) {
        console.log("Batiseñal activada");
    }
}
llamarBatman();
// Rest?
function unirheroes(...personas) {
    return personas.join(", ");
}
// Tipo funcion
function noHaceNada(numero, texto, booleano, arreglo) {
}
// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
