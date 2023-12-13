//PARAMETROS OBLIGATORIOS

function nombreCompleto(name: string, lastName: string): string {
    return name + lastName;
}

let name2 = nombreCompleto("Kakaroto", "Saiyan");

//PARAMETROS OPCIONALES
function nombreCompleto2(name: string, lastName?: string): string {
    if (lastName) {
        return name + lastName;
    }
    return name;
}

let completeName = nombreCompleto2("Rob");

//PARAMETROS DEFECTO

function capitalizeWord(word: string): string {
    return word.charAt(0).toLocaleUpperCase() + word.substring(1).toLocaleLowerCase();
}
function nombreCompleto3(name: string, lastName?: string, capitalized: boolean = false): string {

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

function completeNameAgain(name: string, ...otherParam: string[]): string {
    return name + " " + otherParam.join(" ");
}

const testF = (...parameters: any[]): void => {
    parameters.forEach(item => {
        console.log(item);
    })
};

let test = testF("Rob", 4, true, "Jejep");

let myName = completeNameAgain("Rob", "Vargas", "Rojas");

let myMom = completeNameAgain("Yuly", "Rojas");


//Tipo funcion


//Tipo funcion

let functionType: (a: number, b: number) => number;
