/****BLOCKBUSTER*****/

//Creamos Clases

class Cliente {
    constructor(nombre, edad, membresia){
        this.nombre = nombre; 
        this.edad = edad; 
        this.membresia = membresia; 
    }
}

class Pelicula {
    constructor(nombre, genero){
        this.nombre = nombre; 
        this.genero = genero; 
    }
}

class Alquiler {
    constructor(pelicula, cliente, costo, fecha){
        this.pelicula = pelicula; 
        this.cliente = cliente; 
        this.costo = Math.round(costo); 
        this.fecha = fecha || new Date();
    }
}

// Si el cliente tiene membresía gold, puede demorar 3 días en devolver la película. 

//Si el cliente tiene membresía normal, puede demorar 2 días en devolder la película. 

//Creamos algunos clientes

const clienteUno = new Cliente("Juan", 30, "Gold"); 
const clienteDos = new Cliente("Pedro", 20, "Normal"); 
const clienteTres = new Cliente("María", 25, "Gold"); 

const arrayClientes = [clienteUno, clienteDos, clienteTres]; 
console.log(arrayClientes);

//Creamos algunas películas

const peliculaUno = new Pelicula("El Señor de los Anillos", "Fantasía"); 
const peliculaDos = new Pelicula("El Padrino", "Drama"); 
const peliculaTres = new Pelicula("Titanic", "Romance"); 

const arrayPeliculas = [peliculaUno, peliculaDos, peliculaTres]; 
console.log(arrayPeliculas); 

//Creamos Alquileres 

const alquilerUno = new Alquiler(peliculaUno, clienteUno, 3.80); 
const alquilerDos = new Alquiler(peliculaDos, clienteDos, 3.28, new Date("Septiembre 9, 2022 10:00")); 

const arrayAlquileres = [alquilerUno, alquilerDos]; 
console.log(arrayAlquileres); 

//Creamos una función para saber si hay películas que deben devolverse hoy. 

function diasAlquilerSegunMembresia(cliente){
    if(cliente.membresia == "Gold"){
        return 3; 
    }else{
        return 2; 
    }
}
function peliculasDevolverHoy(alquiler){
    let fechaAlquiler = alquiler.fecha; 
    let fechaActual = new Date(); 
    let diasAlquiler = diasAlquilerSegunMembresia(alquiler.cliente); 

    fechaAlquiler.setDate(fechaAlquiler.getDate() + diasAlquiler); 
    if(fechaAlquiler < fechaActual){
        return `La película ${alquiler.pelicula.nombre} debe devolverse hoy, su costo es de: $${alquiler.costo}`;     
    }else{
        return `La película ${alquiler.pelicula.nombre} no debe devolverse hoy, su costo es de: $${alquiler.costo}`; 
    }
}

console.log(peliculasDevolverHoy(alquilerUno)); 
console.log(peliculasDevolverHoy(alquilerDos)); 