function CalcularIMC(peso,altura) {
    let _peso = parseInt(peso);
    let _altura = parseInt(altura);
    let imc = peso / (altura * altura);
    
    console.log(`Su peso es: ${_peso}kg  y su altura es: ${_altura}cm por lo tanto su IMCE es ${imc}`);
    return;
}
CalcularIMC(80, 169)

function numFactorial(nume) {
    let _nume= parseInt(Math.round(nume));

    if (_nume==0 || _nume == 1 ) {
                console.log(`El factorial de ${_nume} es ${_nume}`);
    }else{
        console.log(`El factorial de ${_nume} es ${_nume}`);
        
    }
    
}

numFactorial(3)

function convertirDolarPesoMex(cantidadDolares) {
    let dolarEu=18.05;
    let _canitdadDolares = parseInt(cantidadDolares);
    let pesoMexicano= _canitdadDolares * dolarEu;
       console.log(`${_canitdadDolares} dólares  es RPeso Mexicano$ ${pesoMexicano}`);
    return;
    }

    convertirDolarPesoMex(100);

    function areaPerimetroRectangulo(altura, ancho) {
        let _altura = altura;
        let _anchor = ancho;
        let area = _altura * _anchor;
        let perimetro = 2 *(_altura * _anchor)
        console.log("la altura es " + _altura +  "y el ancho es " + _anchor + "El area es: " + area);
        console.log("la altura es " + _altura +  "y el ancho es " + _anchor + "El perimetro  es: " + perimetro);
    }

    areaPerimetroRectangulo(20, 15);

    function calculoAreaPerimetro(radio) {
        let valorPi = Math.PI;
        let _radio = parseInt(radio);
        let _diametro = _radio * 2;
        let areaCirculo = valorPi * _radio *_radio;
        let perimetroCirculo = valorPi * _diametro;
        console.log("la radio es " + _radio + "El area es: " + areaCirculo);
        console.log("El radio es " + _radio +  "El perimetro  es: " + perimetroCirculo);
    }
    calculoAreaPerimetro(15);

    function TablaMultitplcar(numrero) {
        let _numero1= numrero;
        for (let index = 1; index <= 10; index++) {
          let res = _numero1 * index;
          console.log(_numero1 + "x" + index + "=" + res);            
        }
    }

    TablaMultitplcar(4)