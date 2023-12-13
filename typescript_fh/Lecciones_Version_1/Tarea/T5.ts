// Crear interfaces
interface CarI {
  encender: boolean,
  velocidadMaxima: number,
  acelear(): void;
}


// Cree una interfaz para validar el auto (el valor enviado por parametro)
function conducirBatimovil(auto: CarI): void {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

let batimovilT4: CarI = {
  encender: false,
  velocidadMaxima: 0,
  acelear() {
    console.log("...... run!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

// Crear interfaces
interface Joker {
  reir: boolean,
  comer?: boolean,
  llorar?: boolean
}

let guason: Joker = {
  reir: true,
  comer: true,
  llorar: false
}

function reir(guason: Joker): void {
  if (guason.reir) {
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion
interface GothamCityFunction {
  (citicenz: string[]): number;
}

let testInterfaceFunction: GothamCityFunction;

testInterfaceFunction = function (ciudadanos: string[]): number {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/

interface Bio {
  nombre: string,
  edad: number,
  sexo: string,
  estadoCivil: string,
  imprimirBio(): void // en consola una breve descripcion.
}

class PersonClass implements Bio {
  nombre: string;
  edad: number;
  sexo: string;
  estadoCivil: string;

  imprimirBio(): void {
    console.log("ToDo");
  }// en consola una breve descripcion.

  constructor(nombre: string, edad: number, sexo: string, estadoCivil: string) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.estadoCivil = estadoCivil;
  }
}


