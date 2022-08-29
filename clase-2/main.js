let verdadero = true; 
let falso = false; 

console.log(verdadero, typeof verdadero);

/* **********CONDICIONALES************* */ 

let esSoleado = true; 
//if(esSoleado){
//    alert("Es un día soleado, nos vamos a la playa"); }

//alert("Fin del código, gracias, vuelva pronto");

/* **********VARIABLES BOOLEANAS************* */ 

// Como 3 no es menor que cero, la variable almacenará un false
let ejemploUno = 3 < 0; 
console.log("Ejemplo Uno: "); 
console.log(ejemploUno, typeof ejemploUno);

let ejemploDos = 3 > 0; 
console.log("Ejemplo Dos: "); 
console.log(ejemploDos, typeof ejemploDos); 

/* **********OPERADORES LÓGICOS************* */ 

// Igual 
let ejemploTres = (54 == 54); 
console.log("Ejemplo Tres: ");
console.log(ejemploTres, typeof ejemploTres);

let ejemploCuatro = (54 == "54"); 
console.log("Ejemplo Cuatro: ");
console.log(ejemploCuatro, typeof ejemploCuatro);

let ejemploCinco = (54 === "54"); 
console.log("Ejemplo Cinco: ");
console.log(ejemploCinco, typeof ejemploCinco);

// Distinto
let ejemploSeis = (76 != "76"); 
console.log("Ejemplo Seis: "); 
console.log(ejemploSeis, typeof ejemploSeis); 

let ejemploSiete = (76 !== "76"); 
console.log("Ejemplo Siete: "); 
console.log(ejemploSiete, typeof ejemploSiete); 

// Menor, Menor igual, mayor, mayor igual

let ejemploOcho = (10 > 10);
console.log("Ejemplo Ocho: "); 
console.log(ejemploOcho); 

let ejemploNueve = (10 >= 10);
console.log("Ejemplo Nueve: ");
console.log(ejemploNueve);

// Operador ! not

let clima = "soleado";
let ejemploDiez = (clima != "lluvioso");
console.log(ejemploDiez);

//Operadores && y ||

let temperatura = 30;
let ejemploOnce = (temperatura >= 40) && (clima == "soleado");
console.log(ejemploOnce);

let ejemploDoce = (temperatura >= 40) || (clima == "soleado");
console.log("Ejemplo Doce: "); 
console.log(ejemploDoce); 

/* **********PRÁCTICA CON CONDICIONALES************* */ 

let edad = parseInt(prompt("Ingrese su edad: ")); 
if(edad < 12){
    alert("Sos un niño!"); 
} else if(edad >= 12 && edad <=16){
    alert("Estás en la pubertad"); 
}else if(edad >16 && edad <= 19){
    alert("Estás en la adolescencia"); 
}else{
    alert("Estas viejito u.u");
}

// Ejemplo Usuario Contraseña 
let usuarioAutorizado = "heeeeeeybaby"
let passwordAutorizado = "pepelepuf"

let usuarioIngresado = prompt("Ingrese su nombre de usuario: "); 
let passwordIngresado = prompt("Ingrese su password: "); 

if(usuarioIngresado === usuarioAutorizado && passwordIngresado === passwordAutorizado){
    alert("Los datos son correctos");
}else{
    alert("Estás hackeando el sistema");
}

//Ejemplo Nombre de Usuario

let nombre = prompt("Ingrese su nombre: "); 
if(nombre === "samuel" || nombre ==="SAMUEL"){
    alert("Bienvenido Samuel!"); 
}else{
    alert("Quién sos?!");
}

// Ejemplo Promedio de notas 

let notaUno = parseInt(prompt("Ingrese la nota del primer parcial: "));
let notaDos = parseInt(prompt("Ingrese la nota del segundo parcial: "));
let promedio = (notaUno + notaDos) / 2; 
alert("El promedio del alumno es " + promedio); 

if (promedio ==10){
    alert("Excelente, calificación perfecta!");
}else if (promedio >= 7 && promedio < 10){
alert("Muy bien, aprobado");
}else if (promedio >= 1  && promedio < 7){
alert("Lo lamento, tendrás que recursar");
}else{
    alert("Ingresaste mal los datos"); 
}
