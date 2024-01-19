
function mensajeInicio() {
    let mensaje = "Hola Mundo" 
    console.log(mensaje);
}
mensajeInicio();

function MensajeIncioPersonalizado(nombre){
    console.log( `¡Hola, ${nombre}!`);  
}

MensajeIncioPersonalizado('David');

function numeroDoble(numero) {
    let convertirNumero =parseInt(numero) * 2;
       console.log( `El doble de su numero es: ${convertirNumero}!`);  
}
numeroDoble(5);

function PromedioNumeros(num1, num2, num3) {
    let _num1= parseInt(num1);
    let _num2= parseInt(num2);
    let _num3= parseInt(num3);
    let promedioNumeros = (_num1 + _num2 + _num3) / 3;
    console.log( `El promedio de sus numeros: ${_num1}, ${_num2}, ${_num3} es: ${promedioNumeros}!`);      
}

PromedioNumeros(2,5,7);

function numeroMayor(nume1, nume2) {
    let _nume1= parseInt(nume1);
    let _nume2= parseInt(nume2);
     console.log( `Ha ingresado estos numeros: ${_nume1}, ${_nume2} y el muero mas alto es: ${_nume1>_nume2 ? _nume1:_nume2}!`);  
}
numeroMayor (15, 8);

function multiplicaNumero(numero ){
    let _numero = parseInt(numero);
    let resultado = _numero * _numero;
    console.log( `Su numero es: ${_numero}! y al multiplicarlo por si mismo el resultado es: ${resultado}`);  
}

multiplicaNumero (8);
