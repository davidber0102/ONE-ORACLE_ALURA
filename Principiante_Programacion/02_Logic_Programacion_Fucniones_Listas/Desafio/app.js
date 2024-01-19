
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío';

function mensajeConsola(){
    console.log('El botón fue clicado');
    alert('el botón fue clicado')
}

function mensajePais() {
    pais= prompt('Mencione la cuidad donde vive: ');
    alert(`Estuve en ${pais} y me acordé de ti`);
    
}

function mensajeAlert() {
    alert("Yo amo JS  ");
}

function mensajeSuma() {
    numSuma1= parseInt(prompt('Digite un primer Numero'));
    numSuma2 = parseInt(prompt('Digite un segundo Numero'));
    resltadoSuma = numSuma1+numSuma2;
    alert(`El resultado de la suma de numero ${numSuma1} y numero ${numSuma2} es: ${resltadoSuma} `)
    
}