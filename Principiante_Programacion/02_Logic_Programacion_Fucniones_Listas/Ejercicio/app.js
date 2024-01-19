let numeroSecreto = generarNumeroSecreto();
console.log(numeroSecreto);

function asignarTextoElemto(elemento, texto) {
    let elementHtml = document.querySelector(elemento);
    elementHtml.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroUsuario = document.getElementById("valorUsuario").value;
    console.log(numeroUsuario);
    console.log(numeroSecreto);
    console.log(numeroUsuario == numeroSecreto);
    alert('Click desde la funcion')
    return;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random() *10)+1;
}

asignarTextoElemto('h1', 'Juego del numero de secreto');
asignarTextoElemto('p',  'Indica un numero del 1 al 100');