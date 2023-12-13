"use strict";
//PARAMETROS OBLIGATORIOS
function nombreCompleto(name, lastName) {
    return name + lastName;
}
let name2 = nombreCompleto("Kakaroto", "Saiyan");
//PARAMETROS OPCIONALES
function nombreCompleto2(name, lastName) {
    if (lastName) {
        return name + lastName;
    }
    return name;
}
let completeName = nombreCompleto2("Rob");
//PARAMETROS DEFECTO
function capitalizeWord(word) {
    return word.charAt(0).toLocaleUpperCase() + word.substring(1).toLocaleLowerCase();
}
function nombreCompleto3(name, lastName, capitalized = false) {
    if (capitalized) {
        if (lastName) {
            return capitalizeWord(name) + capitalizeWord(lastName);
        }
        return capitalizeWord(name);
    }
    else {
        if (lastName) {
            return name + lastName;
        }
        return name;
    }
}
let completeName2 = nombreCompleto3("Rob");
//PARAMETROS REST
function completeNameAgain(name, ...otherParam) {
    return name + " " + otherParam.join(" ");
}
const testF = (...parameters) => {
    parameters.forEach(item => {
        console.log(item);
    });
};
let test = testF("Rob", 4, true, "Jejep");
let myName = completeNameAgain("Rob", "Vargas", "Rojas");
let myMom = completeNameAgain("Yuly", "Rojas");
//Tipo funcion
//Tipo funcion
let functionType;
