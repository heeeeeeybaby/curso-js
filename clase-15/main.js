/****************MÉTODO AJAX****************/
// Conectando a jsonplaceholder

const url = "https://jsonplaceholder.typicode.com/users"; 

// Creamos un objeto de tipo XMLHttpRequest

const xhr = new XMLHttpRequest(); 

/* function manejador(){
    if(this.readyState === 4 && this.status === 200){
        const datos = JSON.parse(this.response); 
        console.log(datos); 
        mostrarUsuarios(datos); 
    }
} */
/* xhr.addEventListener("load", manejador); 
xhr.open("GET", url); 
xhr.send(); 

function mostrarUsuarios(datos){
    datos.array.forEach(element => {
        
    });
} */

const apiFotos = "https://jsonplaceholder.typicode.com/photos"; 
const contenedorFotos = document.getElementById("contenedorFotos"); 

fetch(apiFotos)
.then(respuesta => respuesta.json())
.then((datos) => {
    console.log(datos); 
    mostrarFotos(datos); 
})
.catch(error => console.log(error))

// Creamos una función que se llame "mostrarFotos" y que reciba como parámetro "datos". 

function mostrarFotos(datos){
    datos.forEach(foto =>{
        const img = document.createElement("img"); 
        img.src = foto.thumbnailUrl; 
        contenedorFotos.appendChild(img);
    })
}

const criptoYa = "https://criptoya.com/api/dolar";
let divDolar = document.getElementById("divDolar"); 

setInterval(()=> {
    fetch(criptoYa)
        .then(response => response.json())
        .then(({blue, ccb, ccl, mep, oficial, solidario}) => {
            divDolar.innerHTML = `
            <h2> Tipos de Dólar: </h2>
            <p> Dólar Oficial: ${oficial}</p>
            <p> Dólar Solidario: ${solidario}</p>
            <p> Dólar MEP: ${mep}</p>
            <p> Dólar CCL: ${ccl} </p>
            <p> Dólar CCB: ${ccb}</p>
            <p> Dólar Blue: ${blue}</p>
            `
        })
        .catch(error => console.error(error))
}, 3000)
