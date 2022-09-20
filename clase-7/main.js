/**************FUNCIONES DE ORDEN SUPERIOR****************/
// Función que crea un saludo 

function crearSaludo(finalDeFrase){
    return function(nombre){
        console.log("Hola " + nombre + " " + finalDeFrase);
    }
}
// saludoArgentino almacena ahora una función
const saludoArgentino = crearSaludo("che");
saludoArgentino("Juan");

// Otro ejemplo de función que retorna una función

function crearProducto(nombre){
    return function(precio){
        console.log("El producto " + nombre + " tiene un precio de: $" + precio);
    }
}
const productoFideo = crearProducto("Fideos"); 
productoFideo(100);

//Ejemplo de una función de orden superior que recibe una función por parámetro

function saludoPorConsola(funcion){
console.log("Hola " + funcion);
}
/* saludoPorConsola(prompt("Ingresa tu nombre: ")); */

// Otro ejemplo
let arrayPersonas = ["Carlos", "Lucas", "Federico", "Natalia", "María"];

function muestraNombreEnMayuscula(array, funcion){
    for(let nombre of array){
        funcion(nombre); 
    }
}

function pasarMayuscula(nombre){
    return console.log(nombre.toUpperCase()); 
}

muestraNombreEnMayuscula(arrayPersonas, pasarMayuscula); 

/************** METODOS DE BÚSQUEDA Y TRANSFORMACIÓN ***************/

// Vamos a trabajar estos métodos con array de objetos

class Producto{
    constructor(nombre, precio){
        this.nombre = nombre; 
        this.precio = precio; 
    }
}

const fideos = new Producto("Fideos", 100); 
const harina = new Producto("Harina", 250);
const gaseosa = new Producto("Coca Cola", 100); 
const pan = new Producto("Pan", 120); 

const arrayProductos = [fideos, harina, gaseosa, pan];

console.log("Array Productos: (En Stock)");
console.log(arrayProductos); 

// ForEach
console.log("For Each:"); 
// el ForEach(parámetro), recibe otra función por parámetro.
arrayProductos.forEach((producto) => {
    console.log(producto); 
});

// Cuando una función flecha recibe un único parámetro, se le puede eliminar los paréntesis.

arrayProductos.forEach(producto => console.log(producto.precio));

// Find

const buscado = arrayProductos.find(producto => producto.nombre ==="Coca Cola"); 

console.log("Find: "); 
console.log(buscado); 

// Filter

const arrayProductosMenos200 = arrayProductos.filter(producto => producto.precio < 200); 

console.log("Filter:"); 
console.log(arrayProductosMenos200); 

// Some

const hayFideos = arrayProductos.some(producto => producto.nombre === "Fideos"); 
console.log("¿Hay fideos?, Lo averiguamos con el método some: " + hayFideos); 

// Puedo ocupar un if para cambiar un true por una frase más bonita, se usa en una sola línea, que es otra forma de escribir el if. 
if(hayFideos)console.log("Si hay!"); 

// Map

const arrayProductosConIva = arrayProductos.map((producto) => {
    return {
        nombre: producto.nombre, 
        precio: (producto.precio * 1.21).toFixed(2)
    }
});

console.log("Map:"); 
console.log(arrayProductosConIva);

const arrayNombresProductos = arrayProductos.map(producto => producto.nombre); 
console.log("Array sólo con los nombres: " );
console.log(arrayNombresProductos); 


// Reduce: 

let totalPrecio = arrayProductos.reduce((acumulador, elemento) => acumulador + elemento.precio, 0);
// El valor "0" es el valor inicial, si yo quiero que cuente desde 100 por ejemplo, ese valor debería ser "100". 

console.log("Reduce:"); 
console.log(totalPrecio); 

// Sort: 

//Ejemplo A: Ordeno un array de números, de menor a mayor.

const numeros = [99, 58, 74, 8, 23]; 
numeros.sort((a,b) => a - b);
console.log("Sort: Menor a Mayor"); 
console.log(numeros); 

//Ejemplo B: Ordeno un array de números, de mayor a menor.

numeros.sort((a,b) => b - a);
console.log("Sort: Mayor a Menor"); 
console.log(numeros); 

//Ejemplo C: Ordeno precios de un array de objetos

arrayProductos.sort((a,b) => a.precio - b.precio); 
console.log("Orden precio de productos"); 
console.log(arrayProductos); 

/***********OBJETO MATH**************/

//Valor Pi

let pi = Math.PI;
console.log((pi).toFixed(4));

// Constante de Euler

let euler = Math.E; 
console.log((euler).toFixed(2)); 

//Min  y Max 
let minimo = Math.min(76, 23, 87, 1); 
console.log("Mínimo: " + minimo); 

let maximo = Math.max(76, 23, 87, 1); 
console.log("Máximo: " + maximo); 

// Redondeo: CEIL, FLOOR, ROUND

//Ceil 
console.log(Math.ceil(1.5)); 

//Floor
console.log(Math.floor(1.5)); 

// Round
console.log(Math.round(1.8)); 

// Square Root
console.log(Math.sqrt(9)); 

//RANDOM

//Random (entre 0 y 1)
console.log(Math.random()); 

//Random (entre 0 y 10)
console.log(Math.random() * 10); 

//Random (entre 0 y 50)
console.log(Math.random() * 50); 

//Random (entre 10 y 50)
console.log(Math.random() * 50 + 10); 
// Con esto le digo que el rango de números es a partir del 10.

// COMBINAR MÉTODOS

console.log(Math.round(Math.random() * 80 + 10)); 


/***********CLASE DATE**************/

// Fecha de hoy
let fechaActual = new Date(); 
console.log(fechaActual);

//Fecha con formato
let fechaConFormato = new Date(2021,8,12); 
console.log(fechaConFormato);

//Fecha con string
let fechaConString = new Date("Septiembre 12, 2023 08:00"); 
console.log(fechaConString);

//Pedir el día
let fecha = new Date(); 
let dia = fecha.getDay(); 
console.log(dia); 

//Pedir el mes
let mes = fecha.getMonth(); 
console.log("Mes: " + (mes + 1)); 

//Formatos para ver las fechas
console.log(fecha.toDateString());
console.log(fecha.toLocaleString());
console.log(fecha.toLocaleDateString());
console.log(fecha.toTimeString());