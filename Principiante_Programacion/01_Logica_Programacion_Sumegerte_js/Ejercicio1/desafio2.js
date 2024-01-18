//Segundo Desafio
// Pimer punto
/**
     Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo",
    muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
 */
let diaSemana = prompt("En que dia de la semana te encuetras: ");
let msjFinSemana = "¡Buen fin de semana!";
let msjSemana= "Buena semana!";

if (diaSemana === "Sabado" || diaSemana === "Domingo"){
    alert(msjFinSemana);
}else{
    alert(msjSemana);
}       
//Segundo Puntp
/* 
    Verifica si un número ingresado por el usuario es positivo o negativo. 
    Muestra una alerta informativa.
*/
let numUsuario = prompt("Ingrese un numero (Positivo o negativo)");
let msjPositivo= "Su numero es Positivo";
let msjNegativo= "Su numero es Negativo";
let msjCero= "Su numero es igual a Cero";
 if (numUsuario >0){
    alert(msjPositivo);
 } else if (numUsuario  < 0){
    alert(msjNegativo);
    }else{
        alert(msjCero);
    }

    // Tercer Punto
    /* 
        Crea un sistema de puntuación para un juego. 
        Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". 
        En caso contrario, muestra "Intenta nuevamente para ganar.".
    */
   let puntuacion = 105;
   let msjsGanar = "¡Felicidades, has ganado!";
   let msjsContinua = "Intenta nuevamente para ganar."
   if (puntuacion >=100){
        alert(msjsGanar);
   }else{
        alert(msjsContinua);
   }

   //Cuarto Punto
   /* 
    Crea un mensaje que informe al usuario sobre el saldo de su cuenta, 
    utilizando un template string para incluir el valor del saldo.
   */
  let SaldoCuenta = 1000;

  alert(`El saldo de tu cuenta es: ${SaldoCuenta}`);

  //    Quinto punto
  /* 
   Pide al usuario que ingrese su nombre mediante un prompt. 
   Luego, muestra una alerta de bienvenida usando ese nombre.
  */

let nombreUsuario = prompt("Ingrese su nombre, por favor");

alert(`Bienvenido: ${nombreUsuario}`);