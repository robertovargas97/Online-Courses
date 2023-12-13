"use strict";
// Tipos
let batman = "Bruce";
let superman = "Clark";
let existe = false;
// Tuplas
let parejaHeroes = [batman, superman];
let villano = ["Lex Lutor", 5, true];
// Arreglos
let aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
//Enumeraciones
var Strength;
(function (Strength) {
    Strength[Strength["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
    Strength[Strength["fuerzaFlash"] = 5] = "fuerzaFlash";
    Strength[Strength["fuerzaBatman"] = 1] = "fuerzaBatman";
    Strength[Strength["fuerzaSuperman"] = 100] = "fuerzaSuperman";
})(Strength || (Strength = {}));
;
// Retorno de funciones
function actilet_batiseñal() {
    return "activada";
}
function pedir_ayuda() {
    console.log("Auxilio!!!");
}
// Aserciones de Tipo
let poder = "100";
let largoDelPoder = (poder).length;
console.log(largoDelPoder);
