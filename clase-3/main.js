/*****CICLOS FOR*****/

//Ejemplo A. Quiero mostrar "Hola Mundo" 10 veces por consola.
console.log("Ejemplo A:"); 

for (let i = 0; i < 10; i = i + 1){
    console.log("Hola Mundo", i);
}
// En cada vuelta, la variable i, tiene el valor anterior, más 1. 

//Ejemplo B. Si quiero que comience a contar dede 1 y que incluya al 10. 
console.log("Ejemplo B:"); 

for(let i = 1; i <=10; i++){
    console.log("Hola Mundo", i);
}

//Ejemplo C. Si quiero que cuente desde 10 hasta cero.

console.log("Ejemplo C:");

for(let i = 10; i >= 0; --i){
    console.log("Hola Mundo", i);
}