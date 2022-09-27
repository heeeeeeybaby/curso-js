// Operador Ternario 

let edadClientes = 18; 

//ANTES
if(edadClientes >= 18){
    console.log("Mayor de edad");
}else {
    console.log("Es menor de edad");
}

//DESPUÉS
edadClientes >=18 ? console.log("Es mayor") : console.log("es menor"); 

let tienePermiso = edadClientes >= 18 ? true : false; 
console.log(tienePermiso, typeof tienePermiso);

let carrito = []; 
carrito = [150, 25, 30]; 

//Así se almacena un JSON en el local storage
localStorage.setItem("carrito", JSON.stringify(carrito)); 

//Iniciamos el programa: sin en el carrito hay datos, los muestra, sino, carrito vacío. 
carrito = localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : []; 

console.log(carrito); 


//OPERADOR LÓGICO && AND
let nombreCliente = "Samuel"; 

// Si el valor de la variable nombreCliente, ejecuta el alert. Si la condición es falsa, el código no se ejecuta. 
nombreCliente === "Samuel" && alert("Bienvenido Samuel"); 


//Otro ejemplo
carrito = []; 
carrito.length === 0 && console.log("El carrito está vacío"); 

//Retornar vacío
let vacio = carrito.length === 0 && "Esto está vacío"; 

//OPERADOR OR 

console.log(0 || "Verdadero"); 
console.log(1 || "Verdadero"); 

// Ejemplo: Lo utilizamos para pedir datos al usuario
let nombreAlumno; 
//let nombre = prompt("Ingrese su nombre:"); 
console.log(nombreAlumno || "El usuario no ingresó su nombre"); 


//OPERADOR NULLISH

console.log(0 ?? "Verdadero"); 
nombreAlumno = prompt("Ingrese su nombre:") ?? "Cliente Anónimo"; 
console.log(nombreAlumno); 

//ACCESO CONDICIONAL A UN OBJETO

const cliente = null; 
console.log("Acceso condicional"); 

// Me retornará el error si ocupo: 
//console.log(cliente.nombre || "El cliente no existe"); 

// Pero puedo mejorar esto así: 
console.log(cliente?.nombre || "El cliente no existe"); 

//DESESTRUCTURACION

const alumno = {
    nombre: "Juan",
    apellido: "Perez", 
    edad: 25, 
    curso: "Javascript"
}; 

//ANTES 
let alumnoNombre = alumno.nombre; 
let alumnoApellido = alumno.apellido; 
let alumnoEdad = alumno.edad; 
let alumnoCurso = alumno.curso; 

//DESPUÉS
let {nombre, apellido, edad, curso:carrera} = alumno; 
console.log(nombre); 
console.log(carrera); 


//Otro ejemplo
const gato = {
    duenio: "Juan", 
    raza: "Felino", 
    edad: 5, 
    direccion: {
        calle: "Avenida Siempre Viva",
        numero: 123, 
        ciudad: "Springfield" 
    }
}; 

let {duenio, raza, edad:edadGato, direccion:{calle, numero, ciudad}} = gato; 

console.log(calle); 
console.log(edadGato); 

// DESESTRUCTURACION POR PARÁMETROS: 

const saludar = ({nombre, apellido, edad}) => {
    console.log(`Hola ${nombre}${apellido} tienes ${edad} años`);
}
saludar(alumno); 


//DESESTRUCTURACIÓN DE ARRAYS

let arrayNumeros = [1, 2, 3,4, 5]; 
let [primero, segundo, tercero, cuarto, quinto] = arrayNumeros; 
