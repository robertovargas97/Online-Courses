
/*
//DOM 
var total, numero1, numero2;

function totalaPagar(numero1, numero2) {
    total = numero1 * numero2;
    return total;
}


var granTotal = totalaPagar(4, 8);

var calculadora = document.getElementById('resultado').innerHTML = granTotal + " Dolares";
*/

/*
//Scoope
function scope1() {
    var a = 10;
    console.log(a);
}

function scope2() {
    var b = 20;
    console.log(b);
}
*/



/*
//Funciones---------------------------------------------------
alert("HOLA");

function suma() {
    console.log(2 + 2);
}

var miFuncion = function () {
    var frutas = ["manzana", "uva", "pera", "mango"];
    console.log(frutas);
}

var auto = {
    nombre: "Mustang",
    color: "azul",
    motor: 5.5,
    clasico: true,
    año: 1965
}

function recorrerObjeto() {
    console.log(this.nombre);
    console.log(this.color);
    console.log(this.motor);
    console.log(this.clasico);
    console.log(this.año);
}

auto.mostrarCarro = recorrerObjeto;
auto.mostrarCarro();

*/



/*
//While y Do while en JS--------------------------------------
var i = 0;

while (i < 10) {
    console.log("Es la iteracion " + i);
    i++;
}*/

//For en JS---------------------------------------------------
/*for (var i = 0; i <= 20; i++) {
    if (i % 2 != 0) {//Imprime impares
        console.log("Vamos por la iteracion " + i);
    }
    else {
        console.log("Es número par");
    }

    if (i == 5) {
        console.log("Cinco");
    }
}

var premierLeague = ["Arsenal", "Chelsea", "Man.U", "Aston"];
var filtro = prompt("Letra Inicial");

for (var i = 0; i < premierLeague.length; i++) {
    if (premierLeague[i].charAt(0) == filtro) {
        console.log(premierLeague[i]);
    }
}
*/


/*
//Operadores aritmeticos--------------------------------------
var numero1 = 4;
var numero2 = 5;
console.log(numero1 + numero2); //Suma
console.log(numero1 - numero2); //Resta
console.log(numero1 * numero2); //Multiplicacion
console.log(numero1 / numero2); //Division
console.log(--numero1); //Decremento
console.log(++numero1); //Incremento

var numero3 = 30;
console.log("El numero es : " + numero3);
numero3 += 20;
console.log("El numero es : " + numero3);
numero3 -= 20;
console.log("El numero es : " + numero3);
numero3 *= 20;
console.log("El numero es : " + numero3);
numero3 /= 20;
console.log("El numero es : " + numero3);
*/


/*
//Metodo de pago con Switch-----------------------------------
var metodoPago = prompt("Ingresa el método de pago");
switch (metodoPago) {
    case 'TC':
        console.log("Tarjeta de credito");
        break;
    case 'Efectivo':
        console.log("Se pagó con Efectivo");
        break;
    case 'Paypal':
        console.log("Se pagó con paypal");
        break;
    default:
        console.log("No válido");
        break;
}*/


/*
//Operadores logicos------------------------------------------
var cantidad = 100;
var saldo = 101;
var recargaT = 10;
var usuarioValido = false;

if ((saldo > cantidad) && (usuarioValido)) {
    console.log("Se pagó correctamente");
}
else {
    console.log("No se pagó correctamente");
}

var cantPagar = 1000;
var efectivo = 500;
var tarjetaCredito = true;

if ( efectivo > cantPagar || tarjetaCredito){
    console.log("Se pagó correctamente");
}
else{
    console.log("Falta efectivo");
}
*/

/*

//Comparando con If Numeros--------------------------------
var cantidadaPagar = 100;
var saldo = 500;

if (saldo < cantidadaPagar) {
    console.log("No hay saldo");
}

else {
    console.log("El pago fué exitoso,su saldo actual es de: " + (saldo - cantidadaPagar));
}

var edad1 = 20;
var edad2 = 20;

if (edad1 > edad2) {
    console.log("Edad 1 es mayor");
}

else if (edad1 == edad2) {
    console.log("Las edades son iguales ");
}
else {
    console.log("Edad 2 es mayor ");
}

//Comparador doble y triple-----------------------------------
var edad3 = "20";
var edad4 = 20;

if (edad3 === edad4) { //Comparador estricto
    console.log("Son iguales");
}
else {
    console.log("No son iguales");
}

//Comparar textos--------------------------------------------
console.log("Comparando textos");
var texto = "hola";
var texto2 = "Hola";

if (texto == texto2) { -
    console.log("Son iguales");
}
else {
    console.log("No son iguales");
}
*/


/*
//Strings o cadenas------------------------------------------
var texto = "Esto es una cadena";
console.log(texto);
console.log(texto.toUpperCase());
console.log(texto.length);
var cadenaP = texto.split(" ");
console.log(cadenaP[2]);
console.log(texto.indexOf("es"));
console.log(texto.slice(1,6));
*/

/*
//Fechas-----------------------------------------------------
var fecha = new Date(); //Muestra le fecha y hora actual
console.log(fecha);
console.log("El año actual es " + fecha.getFullYear());
console.log("Hoy es " + fecha.getDate());
console.log("El mes es el número: " + fecha.getMonth());
console.log("Las horas son: " + fecha.getHours());
console.log("Los minutos son " + fecha.getMinutes());
*/

/*
//Numeros---------------------------------------------------
var numero1 = "15";
var numero2 = -20;
var numero3 = 21.5;
var numero4 = 20;
var numero5 = "3.1416";
var numero6 = -30.5;
var numero7 = parseInt(numero1);
var numero8 = Number(numero1);
var numero9 = parseFloat(numero5);

console.log(typeof (numero1));
console.log(typeof (numero2));
console.log(typeof (numero3));
console.log(typeof (numero4));
console.log(typeof (numero5));
console.log(typeof (numero6));
console.log(typeof (numero7));
console.log(typeof (numero8));
console.log((numero9).toFixed(2)); //Para decimalesF
 */

/*
//Espacion en blanco-----------------------------------

var nombre = "Roberto";
console.log(nombre);

//objeto
var persona = {
    nombre: "Roberto",
    profesion: "estudiante"
}
*/

/*
//ARREGLOS----------------------------------------------

var premierLeague = ["Arsenal", "Chelsea", "Man.U"];
console.log(premierLeague);

premierLeague.push("Liverpool");
console.log(premierLeague);

premierLeague[2] = "Leicester";
console.log(premierLeague);

console.log(premierLeague.indexOf("Arsenal")); //Busca la posicion en la que se encuetra el elemento

premierLeague.pop(); //Saca el ultimo elemento
console.log(premierLeague);

premierLeague.splice(1, 1); //Elimina elementos desde la posicion que entra como primer parametro
console.log("Con splice " + premierLeague);

//Con filtro 
console.log("Con filtro");
var premierLeague = ["Arsenal", "Chelsea", "Man.U"];
var nuevo = premierLeague.filter(function (equipo) {
    return (equipo != "Arsenal");
});

console.log(nuevo);
*/


/*
//Crear Objeto----------------------------------------

var auto = {
    nombre: "Mustang",
    color: "azul",
    motor: 5.5,
    clasico: true,
    año : 1965
} 

delete auto.año;
console.log(auto);



var nombre = prompt('Como te llamas?');
var pais = prompt('De donde eres?');
alert("Hola " + nombre + " de " + pais);

var modelo = "Mustang";
var motor = 5.5;
var color = "azul";

var modelo2, motor2, color2;

var modelo = 'Mustang';
console.log(modelo);
*/

