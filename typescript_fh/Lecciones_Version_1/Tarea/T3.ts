
// Objetos

type Car = {
    carroceria: string,
    modelo: string,
    antibalas: boolean,
    pasajeros: number,
    disparar?: () => void
}

let batimovil: Car = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};

let bumblebee: Car = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() { // El metodo disparar es opcional
        console.log("Disparando");
    }
};


// Villanos debe de ser un arreglo de objetos personalizados
type Villan = {
    nombre: string,
    edad: number | undefined,
    mutante: boolean
}

let villanos: Villan[] = [
    {
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    },
    {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    },
    {
        nombre: "James Logan",
        edad: undefined,
        mutante: true
    }
];

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis
type Charles = {
    poder: string,
    estatura: number
};

type Apocalipsis = {
    lider: boolean,
    miembros: string[]
};

let charles: Charles = {
    poder: "psiquico",
    estatura: 1.78
};

let apocalipsis: Apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
}

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique: Charles | Apocalipsis;

mystique = charles;
mystique = apocalipsis;
