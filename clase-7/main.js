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

const arrayProductos = (fideos, harina, gaseosa, pan);

console.log("Array Productos: (En Stock)");
console.log(arrayProductos); 

// ForEach
console.log("For Each"); 
arrayProductos.ForEach(producto) => {
    
}