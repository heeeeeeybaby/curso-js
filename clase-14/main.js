
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