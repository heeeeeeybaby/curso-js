//Declaramos una funcion
function holaMundo() {
    alert("Hola Mundo!"); 
}

//Lleamamos a la función
holaMundo();

// Funciones que además de ejecutar una acción me retornan un dato 

function retornaElNum3(){
    return 3;
}
let numTres = retornaElNum3();
console.log(numTres);

// Función de suma

function sumaTradicional(valorA, valorB){
    let resultado = valorA + valorB; 
    return resultado; 
}

let resultadoSuma = sumaTradicional(150,100);
console.log(resultadoSuma); 

//También es posible pasarle variables

let numeroUno = 200;
let numeroDos = 250;

let resultadoSumaDos = sumaTradicional(numeroUno, numeroDos); 
console.log(resultadoSumaDos);

//Saludar por medio de un Alert

let nombreAlumno = prompt("Ingrese su nombre: "); 
function saludarAlumno(firulais) {
    alert("Hola Alumno " + firulais);
}
// firulais es el nombre del parámetro y sólo funciona dentro de la función saludarAlumno();

saludarAlumno(nombreAlumno);

// Variables Globales
let global = 10; 

function ejemploA(){
    console.log(global);
}
ejemploA();

//Variables Locales
function ejemploB(){
    let resultadoEjemploB = 10 + 10; 
}
//console.log(resultadoEjemploB); 

/****************FUNCIONES ANONIMAS*******************/

let sumaAnonima = function (a, b){return a + b}
console.log(sumaAnonima(1000,1000)); 

let restaAnonima = function(a,b){return a - b}
console.log(restaAnonima(10000,sumaAnonima(1000,1000)));

/****************FUNCIONES FLECHA*******************/

let division = (a,b) => {
    return a/ b;
}
console.log("División con funcion flecha: "); 
console.log(division(100,10)); 

// Ejemplo Multiplicación 
console.log("Mulitiplicación con función flecha:");
let multiplicacion = (a,b) => a * b; 
// El return está implícito porque no estoy implementando llaves.
console.log(multiplicacion(50,50));

// Función con un solo parámetro
let nombre = nombre => console.log("Hola" + nombre); 
nombre("pepelepuf"); 