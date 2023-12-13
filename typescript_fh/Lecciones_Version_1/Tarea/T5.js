"use strict";
// Cree una interfaz para validar el auto (el valor enviado por parametro)
function conducirBatimovil(auto) {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelear();
}
let batimovilT4 = {
    encender: false,
    velocidadMaxima: 0,
    acelear() {
        console.log("...... run!!!");
    }
};
let guason = {
    reir: true,
    comer: true,
    llorar: false
};
function reir(guason) {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
}
let testInterfaceFunction;
testInterfaceFunction = function (ciudadanos) {
    return ciudadanos.length;
};
class PersonClass {
    imprimirBio() {
        console.log("ToDo");
    } // en consola una breve descripcion.
    constructor(nombre, edad, sexo, estadoCivil) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.estadoCivil = estadoCivil;
    }
}
