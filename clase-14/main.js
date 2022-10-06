
/**********PROGRAMACIÓN ASINCRÓNICA************/

console.group("Programación Asincrónica"); 

setTimeout( ()=>{
    console.log("Tarea A"); 
}, 3000); 

setTimeout( ()=>{
    console.log("Tarea B"); 
}, 2000); 

// Ejemplo A. 

setTimeout(()=>{
    document.getElementById("ejemplo1").style.backgroundColor = "bisque"; 
}, 3000)

// Ejemplo B. En un array. 

for (let letra of "Hola Mundo"){
    setTimeout(()=>{
    console.log(letra);         
    }, 3000)
}

// SET INTERVAL 

/* setInterval(()=>{
    console.log("Tic"); 
}, 1000) */


let contador = 0; 
const interval = setInterval(()=>{
    console.log("Tuki"); 
    contador++; 

    if(contador == 5){
        clearInterval(interval); 
    }
}, 2000);

// Ejemplo B. 
const colores = ["red", "green", "yellow", "orange", "pink", "purple", "black", "bisque", "white"]; 

let i = 0; 
const intervalDos = setInterval(()=>{
    document.getElementById("ejemplo2").style.backgroundColor = colores[i]; 
    i++; 

    if(i == colores.length){
        clearInterval(intervalDos); 
    }
}, 800); 

/*************PROMESAS**************/

const falsasPromesas = () =>{
    return new Promise ( (resolve, rejected)=> {
        // resolve = se ejecuta cuando la promesa se cumple
        // reject = se ejecuta cuando la promesa no se cumple
    }) 
    

    }
console.log(falsasPromesas()); 

// Ejemplo A. 

class Usuario {
    constructor(user, password){
        this.user = user, 
        this.password = password
    }
}
const user1 = new Usuario("user1", 1234); 
const user2 = new Usuario("user2", 1234); 
const admin = new Usuario("admin", 4321); 

const usuarios = [user1, user2, admin]; 
const solicitarUsuarios = (estado) => {
    return new Promise((resuelto, rechazado)=>{
        if(estado == true){
            resuelto(usuarios); 
        }else{
            rechazado("Seguí intentando"); 
        }
    })
}
// Verifica por consola 
console.log(solicitarUsuarios(true)); 

/*********THEN Y CATCH*********/

solicitarUsuarios(true)
.then((usuarios)=> {
    console.table(usuarios); 
})
.catch((error)=>{
    console.error(error);
})
.finally()