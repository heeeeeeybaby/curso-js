/*************OBJETOS*************/

//Cómo escribimos un objeto? 

let alumnoSamuel = {
    nombre: "Samuel", 
    apellido: "Tocaimaza", 
    edad: 35, 
    carrera: "Programación", 
    cuota: true 
};

console.log(alumnoSamuel);

let perro = {
    nombre: "Firulais",
    edad: 5, 
    raza: "Bulldog Francés", 
    color: "negro"
}

console.log(perro); 

let auto = {
    marca: "Ford", 
    modelo:"KA", 
    fabricacion: 2019, 
    km: 40000, 
    precio: 2000000
}

console.log(typeof auto, auto);

// Cómo accedemos a cada dato? (Dos maneras)

console.log(alumnoSamuel.carrera);
console.log(perro["raza"]);

// Asignar nuevos valores a una propiedad dentro de un objeto

console.log("Modificando el valor"); 
auto.precio = 400000000; 
console.log(auto); 

// Otro ejemplo

const yerba = {
    nombre: "Andresito", 
    precio: 350, 
    cantidad: 10
}

console.log(yerba); 
// 350
yerba.precio = 400; 
console.log(yerba); 
// 400


/*************CONSTRUCTORES*************/

function Persona(nombre, apellido, edad){
    this.nombre = nombre; 
    this.apellido = apellido; 
    this.edad = edad; 
    this.saludar = function(){
        console.log("Hola, soy " + this.nombre);
    }
}

const persona1 = new Persona("Santiago", "Tocaimaza", 9); 
const persona2 = new Persona("Pepe", "Tocaimaza", 16);

// Para pedir los datos por prompt

let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido"); 
let edad = parseInt(prompt("Ingrese edad"));

const personita = new Persona(nombre, apellido,edad); 
console.log(personita); 
personita.saludar();


/*************CLASES*************/

class Producto{
    constructor(nombre, precio){
        this.nombre = nombre; 
        this.precio = precio; 
        this.vendido = false; 
    }
    // Esto es un método dentro de la clase producto
    sumaIva(){
        return this.precio * 1.19.toFixed(2); 
    }
    vender() {
        this.vendido = true; 
    }
}

const fideos = new Producto("fideos", 90); 
console.log("El precio de los fideos es de " + fideos.precio + " y con el iva incluido " + fideos.sumaIva()); 