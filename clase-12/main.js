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

let nombre = prompt("Ingrese su nombre:"); 
console.log(nombre || "El usuario no ingresó su nombre"); 