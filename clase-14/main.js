
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
    document.body.style.backgroundColor = "bisque"; 
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