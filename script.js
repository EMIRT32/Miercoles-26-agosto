/* var me permite realizar modificaciones a las variables al igual que let*/
/*const este valor no puede ser cambiado y tiene una valor asignado*/
//ecmas5
var nombre5 = "Maria Perez";
nombre5 = "Maria Sanchez"; //su valor es modificable en cualquier momento
console.log(nombre5);

//EcmaS6
//const nombre6 = "Pedro Sanchez";// su valor no puede ser modificado y arroja error el navegador
//nombre6 = "pedro garcia";

let nombreLet = "Laura Martinez";
nombreLet = "Laura Gacria";
console.log(nombreLet);
/* Alcance global - Alcance Local*/

//Global

var global = 0;
function varGlobal() {
    for (var i = 0; i < 5; i++) {
        global = i;  //Encada vuelta el valor de la variable i se le va asignar a la variable global   
    }
}
varGlobal();
console.log(global);//se imprime 4

// Local
function varLocal() {
    var local = "hola mundo!"; // esto es una variable local
    console.log(local);
}
varLocal();
//console.log(local); //Arroja Error

function varPrueba() {
    var x = 70;
    if (true) {
        var x = 50;
        console.log(x); // debe aparecer 50
    }
    console.log(x); // debe aparecer 50
}

function letPrueba() {
    let y = 30;
    if (true) {
        let y = 60;
        console.log(y);//imprime 60
    }
    console.log(y);//imprime 30
}

//funcionaes

//funcion tradicional, se define con la palabra reservada function
function soyUnaFuncion(num1, num2) {
    return num1 + num2;
}
console.log(soyUnaFuncion(5, 3)); // me va arrojar la estructura de la funcion

// funciones anónimas

//se utilizan directamente sin un nombre
let sumar = (a, b) => a + b;
console.log(sumar(10, 15));

let hola = function () {
    return "hola, como estas?";
}
console.log(hola());

//Condicionales

let color = prompt("ingrese un color en ingles");
if (color == "red") {
    document.write("<h1 style = 'color:red'> El color es red - rojo </1>");
} else {
    document.write("<h1 style = 'color:" + color + "'> El color no es red, el que usted escogió es  " + color + "</h1>")
}

//Operadores de comparación
let year = 2020;
if (year != 2020) {
    document.write("el año es diferente a 2020");
} else {
    document.write("el año es 2020");
}

//operadores logicos AND &&, Or ||, NOT !

let nota = 3.7;
//se crea un rango entre 4.5 y 5
if (nota >= 4.5 && nota <= 5) {
    document.write("Felicidades ganaste la beca");
} else if (nota < 4.5 && nota >= 0) {
    document.write("Intentelo de nuevo ");

}
else {
    document.write("ingrese un número entre 0 y 5");
}

// or al menos una se debe cumplir para que se ejecute ese bloque de código

let pais = "Colombia";
if (pais == "colombia" || pais == "peru") {
    document.write("<br> El país pertenence a latino america")
} else {
    document.write("a donde pertenese ese país??")
}

//switch
let operacion = "suma";
let num1 = parseFloat(prompt("ingrese una número"));
        let num2 = parseFloat(prompt("ingrese el segundo número"));

switch (operacion) {
    case "suma":
        
        document.write("el resultado de la suma es: " + (num1 + num2));

        break;
    case "resta":
        
        document.write("el resultado de la resta es: " + (num1 - num2));
        break;
    case "multiplicación":
        
        document.write("el resultado de la multiplicación es: " + (num1 * num2));
        break;
    case "división":
        
        document.write("el resultado de la división es: " + (num1 / num2));
        break;


    default:
        break;
}