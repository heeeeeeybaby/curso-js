// By ID
const tituloPrincipal = document.getElementById("tituloPrincipal");
console.log(tituloPrincipal); 

// By Class
const nombres = document.getElementsByClassName("nombres");
console.log(nombres); 
// Retorna un array con todos los elementos 

//By Tagname
const meses = document.getElementsByTagName("li");
console.log(meses); 

for (let mes of meses){
    console.log(mes); 
}

//querySelector
const queryNombres = document.querySelector(".nombres"); 
console.log(queryNombres); 
//Retorna el primer elemento que coincida con la búsqueda

//querySelectorAll
const queryNombresAll = document.querySelectorAll(".nombres"); 
console.log(queryNombresAll); 

/*********** MODIFICAR NODOS *************/

// InnerText
tituloPrincipal.innerText = "Modifica el título desde JS"; 

//InnerHtml
tituloPrincipal.innerHTML = `<p>Esto es un párrafo</p>`

//ClassName
tituloPrincipal.className = "titulo"; 

/*********** AGREGAR NODOS *************/
const contenedor = document.getElementById("_contenedor");
const parrafo = document.createElement("p");
parrafo.innerText = "Este es un texto escrito 100% en JS";
parrafo.className = "titulo";

contenedor.appendChild(parrafo); 

/*********** ELIMINAR NODOS *************/

parrafo.remove();

/*********** MODIFICAR EL DOM PARA MOSTRAR UN ARRAY *************/

const arrayPersonas = ["Juan", "María", "Pepelepu", "Ana", "Pedro"]; 
const listaPersonas = document.getElementById("_listaPersonas");

for(let persona of arrayPersonas){
    let itemLista = document.createElement("li"); 
    itemLista.innerText = persona; 
    listaPersonas.appendChild(itemLista); 
}

/*********** MODIFICAR EL DOM PARA MOSTRAR UN OBJETO *************/
class Producto{
    constructor(nombre, precio){
        this.nombre = nombre; 
        this.precio = precio; 
    }
}

const yerba = new Producto("Yerba", 360); 
const harina = new Producto("Harina", 180); 
const pan = new Producto("Pan", 100); 
const leche = new Producto("Leche", 200);

const arrayProductos =[yerba, harina, pan, leche];

const contenedorProductos = document.getElementById("_contenedorProductos"); 

arrayProductos.forEach(producto => {
    let div = document.createElement("div"); 
    div.innerHTML = `<p>${producto.nombre}</p>
                    <p>Precio: ${producto.precio}</p>
                    <button>Agregar al carrito</button>`;
    contenedorProductos.appendChild(div); 
});