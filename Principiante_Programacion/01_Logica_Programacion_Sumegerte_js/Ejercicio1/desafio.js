let msjBienvenida = '¡Bienvenida y bievenido a nuestro sitio web!';
let nombre = 'Luna';
let edad = 25;
let numeroDeVentas = 50;
let saldoDisponible = 1000;
let msjError = "¡Error! Completa todos los campos";

let nombreUsuario= prompt("Introduce tu nombre de usuario: ");
let edadUsuario = prompt("Introduce tu edad: ");
let msjsEdad = "¡Puedes obtener tu licencia de conducir!";


alert(msjBienvenida);
alert(msjError);

if (edad>18) {
    alert(msjsEdad);
}