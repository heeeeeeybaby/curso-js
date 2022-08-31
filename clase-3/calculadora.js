    let valorUno = parseInt(prompt("Ingrese el primer valor:"));
    let operacion = prompt("Ingrese la operación a realizar (+, -, *, /)");
    
    // Para validar que el usuario me entregue alguno de los valores de operación correctamente
    
    while(operacion != "+" && operacion != "-" && operacion != "*" && operacion != "/"){
        operacion = prompt("Debes ingresar una operación válida (+, -, *, /)");}
    
    let valorDos = parseInt(prompt("Ingrese el segundo valor:")); 

    // Trabajamos cada caso
    
    switch(operacion){
        
        case "+":
            console.log(valorUno + valorDos); 
            alert("El resultado es " + (valorUno + valorDos));
            break; 
        case "-":
            console.log(valorUno - valorDos); 
            alert("El resultado es " + (valorUno - valorDos));
            break; 
        case "*":
            console.log(valorUno * valorDos);
            alert("El resultado es " + (valorUno * valorDos));
            break; 
        case "/":
            console.log(valorUno / valorDos);
            alert("El resultado es " + (valorUno / valorDos));
            console.log(confirmacion);
            break; 
        default: 
        console.log(confirmacion); 
        break;
    }