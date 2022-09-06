class Producto {
    constructor(nombre, precio){
        this.nombre = nombre; 
        this.precio = precio; 
        this.cantidad = 10; 

    }

    // Métodos: 
    // Aumentar la Cantidad de un producto
    sumarStock(cantidad){
        this.cantidad = this.cantidad + cantidad; 
    }
}
const yerba = new Producto("Yerba", 360); 
const harina = new Producto("Harina", 100); 
const fideos = new Producto("Fideos", 90); 

//Una forma de agregar los productos a mano a un array
const stockProductos = [yerba, harina, fideos]; 
console.log(stockProductos); 

// Ahora más automatizado. 
const stockAutomatizado = []; 

stockAutomatizado.push(yerba);
stockAutomatizado.push(harina); 
stockAutomatizado.push(fideos); 

console.log(stockAutomatizado); 

// Cómo recorrer array de objetos 
console.log("Utilizo la sentencia for of"); 
for(let producto of stockAutomatizado){
    console.log(producto); 
}

// Creo una funcion que aumente el stock sólo a la harina. 

function aumentaStockHarina (arrayProductos){
    for (let producto of arrayProductos){
        if(producto.nombre === "Harina"){
            producto.suamrStock(100); 
        }
    }
}

aumentaStockHarina(stockAutomatizado); 
console.log(stockAutomatizado); 