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

//Ejemplo D. Si quiero mostrar sólo los números pares del 0 al 10

console.log("Ejemplo D:");

for (let i = 0; i <= 10; i = i + 2){
    console.log(i);
}

//Otra manera de resolver ejemplo D
console.log("Ejemplo D-2");

for (let i = 0; i <=10; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}

// SENTENCIA BREAK
// Ejemplo E. Pido una contraseña al usuario hasta que la ingrese correctamente. 

console.log("Ejemplo E:");

let passwordUsuario = prompt("Ingrese su contraseña: ");
const passwordAutorizado = 1234; 

for (let i = 0; i < 2; i++){
    if(passwordUsuario == passwordAutorizado){
        console.log("Muy bien amiguito");
        alert("Muy bien amiguito");
        break; 
    }else{
        let intentos = 2 - i; 
        if (intentos === 1){
            console.log(passwordUsuario);
            passwordUsuario = prompt("Contraseña incorrecta, vuelva a intentar, te queda " + intentos + " intento");
            passwordUsuario = alert("Lo siento, no le atinaste, Se borrará tu compu");
        }else{
            console.log(passwordUsuario);
            passwordUsuario = prompt("Contraseña incorrecta, vuelva a intentar, te quedan " + intentos + " intentos");
        }
    }
}