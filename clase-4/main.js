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
console.log(resultadoEjemploB); 
