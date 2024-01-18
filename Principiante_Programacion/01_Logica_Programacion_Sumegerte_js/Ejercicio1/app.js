//Declaracion de Variables
let  msjBienvenida= "Bienvenido al juego del número secreto";
alert(msjBienvenida);
let numSecreto = 6;
let numUsuario = prompt("Teclea un numero por favor, entre 0 y 10: ");
// Agrega un console.log para verificar el valor
console.log("Valor es: ", numUsuario);

/* Se genera un if para validar el numero a buscar
*/
// Agrega un console.log para verificar la comparación entre los numeros
console.log('Resultado de la comparación:', numUsuario == numeroSecreto);
    if (numUsuario == numSecreto){
        // mensaje si es verrdadera la comparacion
        alert(`Acertaste, el numero que ingresaste es: ${numUsuario} y el numero secreto es: ${numSecreto}`);
    } else{
            if(numUsuario > numSecreto){
                alert("El numero secreto es menor ");
            } else {
                alert("El numero secreto es mayor");
            }
        // mensaje si es falsa la comparacion
        // Agrega un console.log para verificar cuando el jugador se equivoca
    /*console.log('Valor del número secreto:', numeroSecreto);
        alert("Vuelve a intentar, el numero que ingresaste es: " + numUsuario);    }*/
    }