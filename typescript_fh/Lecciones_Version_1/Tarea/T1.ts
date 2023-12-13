// Tipos
let batman: string = "Bruce";
let superman: string = "Clark";

let existe: boolean = false;

// Tuplas
let parejaHeroes: [string, string] = [batman, superman];
let villano: [string, number, boolean] = ["Lex Lutor", 5, true];

// Arreglos
let aliados: string[] = ["Mujer Maravilla", "Acuaman", "San", "Flash"];

//Enumeraciones

enum Strength {
  fuerzaAcuaman = 0,
  fuerzaFlash = 5,
  fuerzaBatman = 1,
  fuerzaSuperman = 100
};


// Retorno de funciones
function actilet_batiseñal(): string {
  return "activada";
}

function pedir_ayuda(): void {
  console.log("Auxilio!!!");
}

// Aserciones de Tipo
let poder:string = "100";
let largoDelPoder:number = (poder).length;
console.log(largoDelPoder);
