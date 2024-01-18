//Declaracion de Variables
let  msjBienvenida= "Bienvenido al juego del número secreto";
let numeroMaximoPosible = 100;
let numSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numUsuario = 0;
let intentos = 1;
//let palabraVeces = "vez";
let maximosIntentos = 6;
alert(msjBienvenida);
while ( numUsuario != numSecreto ) {
        numUsuario = parseInt(prompt(`Teclea un numero por favor, entre 0 y ${numeroMaximoPosible}: `));

            if (numUsuario == numSecreto){       
                alert(`Acertaste, el numero que ingresaste es: ${numUsuario} y el numero secreto es: ${numSecreto}`);
                alert(` lo hiciste en ${intentos} ${intentos ==1 ? 'vez' : 'veces'}`);
            } else{
                    if(numUsuario > numSecreto){
                        alert("El numero secreto es menor ");
                    } else {
                        alert("El numero secreto es mayor");
                    }
                    // incremenatamos el contador intentos cuando no acierta
                    //intentos = intentos + 1;
                    //intentos +=1;
                    intentos++;
                    // se cambia el valor de la variable palabraVeces
                    //palabraVeces = "veces";
                    // crear ciclo para negar el numero de intentos pemitidos
                    if(intentos > maximosIntentos){
                        alert(`Llegaste al maximo de ${maximosIntentos} intentos, Gracias por jugar`);
                        break;
                    }
                // mensaje si es falsa la comparacion
                // Agrega un console.log para verificar cuando el jugador se equivoca
            /*console.log('Valor del número secreto:', numeroSecreto);
                alert("Vuelve a intentar, el numero que ingresaste es: " + numUsuario);    }*/
            }
        }