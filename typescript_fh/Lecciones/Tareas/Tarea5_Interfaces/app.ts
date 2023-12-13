(() => {

  // Crear interfaces

  // Cree una interfaz para validar el auto (el valor enviado por parametro)
  interface Car {
    encender: boolean;
    velocidadMaxima: number;
    acelerar(): void
  }

  const conducirBatimovil = (auto: Car): void => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelerar();
  }

  const batimovil: Car = {
    encender: false,
    velocidadMaxima: 0,
    acelerar() {
      console.log("...... gogogo!!!");
    }
  }

  // Cree una interfaz con que permita utilizar el siguiente objeto
  // utilizando propiedades opcionales

  interface Guason {
    reir?: boolean,
    comer?: boolean,
    llorar?: boolean
  }

  const guason: Guason = {
    reir: true,
    comer: true,
    llorar: false
  }

  const reir = (guason: Guason): void => {
    if (guason.reir) {
      console.log("JAJAJAJA");
    }
  }


  // Cree una interfaz para la siguiente funcion

  interface CiudadGotica {
    (ciudadanos: string[]): number
  }

  const ciudadGotica: CiudadGotica = (ciudadanos: string[]): number => {
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

  interface PersonalInfo {
    nombre: string
    edad: number
    sexo: string
    estadoCivil: string
    imprimirBio(): void
  }


  class Persona implements PersonalInfo {
    constructor(public nombre: string, public edad: number, public sexo: string, public estadoCivil: string) { };

    imprimirBio(): void {
      console.log(`My name is ${this.nombre}, I'm ${this.edad} years old and I'm ${this.estadoCivil}`)
    }
  }
  
})();

