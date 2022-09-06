let arrayCombinado = ["Hola", 99, true];
console.log(arrayCombinado); 

// Array de letras
let arrayLetras = ["A", "B", "C", "D"]; 
console.log("Array de letras:");
console.log(arrayLetras); 
console.log(arrayLetras[2]);

// Modificar un elemento del array

arrayLetras[2] = 100; 

//Recorrer un array 

for(let i = 0; i < arrayLetras.length; i++){
    alert(arrayLetras[i]);
}

// Propiedad LENGTH
let number = [1, 2, 3];
console.log("Propiedad Length en array: " + number.length); 

// Método Push
let familia = ["Pedro", "Juan", "Diego"]; 
console.log(familia); 

familia.push("Cachupín"); 
console.log(familia); 

// Unshift, agrega valores por el inicio del array
familia.unshift("Mishi"); 
console.log(familia); 

//Método POP
let eliminado = familia.pop(); 
console.log("Valor eliminado " + eliminado); 

// Método Shift
let primerEliminado = familia.shift();
console.log("primer eliminado: " + primerEliminado); 

// Método Splice 
familia.splice(2,2); 
console.log(familia); 

// También puedo hacer que los elementos eliminados de un array queden en unaa variable. 
familia.push("Mishi 1", "Mishi 2"); 
let eliminadosSplice = familia.splice(2,2); 
console.log(familia); 

// Método Join
let stringFamilia = familia.join(","); 
console.log(stringFamilia); 

// Método Concat
let familiaUnidaOtraVez = familia.concat(eliminadosSplice); 
console.log("Familia Unida: " + familiaUnidaOtraVez); 

//Método Slice
let slice = familiaUnidaOtraVez.slice(0,2); 
console.log("Método Slice: "); 
console.log(slice); 

//Método indexOf
let indicePedro = familiaUnidaOtraVez.indexOf("Pedro"); 
console.log("Indice de Pedro: " + indicePedro); 

//Método includes()
let booleanoPedro = familiaUnidaOtraVez.includes("Pedro"); 
console.log("Booleano: " + booleanoPedro); 

// Método Reverse 
console.log("Método Reverse"); 
console.log(familiaUnidaOtraVez);
familiaUnidaOtraVez.reverse(); 
console.log(familiaUnidaOtraVez);