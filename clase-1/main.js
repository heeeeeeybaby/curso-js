console.log("Hola Mundo");

/* Sintaxis JS */

let estoEsUnEjemplo; 

/* ****************TIPO DE DATOS*************** */

"Esto es un string" // cadena de caracteres
'Esto también es un string' 

3456 //Number

//Booleanos
true
false

null // Valor nulo
undefined // Valor que aún no está definido

/* ****************VARIABLES*************** */

let nombre; 
let edad; 
let estoEsCamelCase; 

//Las variables anteriores aún no almacenan ningún valor

//ASIGNANDO VALORES
/*Aquí ya no es necesario poner let, porque estaría decalrando la variable 2 veces*/
nombre = "Maca"; 
edad = 29;

console.log(nombre); 
console.log(edad);

edad = 30;
console.log(edad);

//INICIALIZAMOS VARIABLES 
/* Declaro y asigno un valor a una variable en un mismo paso */

let lenguaje = "Javascript";
console.log(lenguaje);

//CONSTANTES
const IVA = 0.19;
//Para el curso, las const van con minúsculas. Pero por convención se utilizan en MAYÚSCULAS. 

/* ****************OPERACIONES MATEMÁTICAS*************** */

//Operaciones matemáticas 
let valorUno = 8;
let valorDos = 10; 
let promedio = (valorUno + valorDos) / 2; 

console.log(promedio); 

//Concatenar texto
let nombreCliente = "Carlitos"; 
let valorCompra = 10000; 

let mensaje = nombreCliente + " el valor de su compra es " + valorCompra; 

console.log(mensaje); 

/* ****************SENTENCIAS PROMPT Y ALERT*************** */

//Prompt
let nombreAlumno = prompt("Ingrese su nombre: "); 
/*let notaPrimerParcial = prompt("Ingrese nota Primer parcial: "); 
let notaSegundoParcial = prompt("Ingrese nota Segundo Parcial: "); */

//typeof()

//console.log(typeof notaPrimerParcial); 

//parseInt()

notaPrimerParcial = parseInt(prompt("Ingrese nota Primer parcial: ")); 
notaSegundoParcial = parseInt(prompt("Ingrese nota Segundo Parcial: ")); 

console.log("El alumno " + nombreAlumno + " Primer nota: " + notaPrimerParcial + " Segunda Nota: " + notaSegundoParcial);

let promedioNotas = (notaPrimerParcial + notaSegundoParcial) /2
console.log(promedioNotas);

alert("Esto es un alert");