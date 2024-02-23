
//Declarar todos los elementos utilizados del DOMhtml
const ingresaTxt = document.getElementById('ingresa_txt');
const btnEncriptar = document.getElementById('btn-encriptar');
const btnDesencriptar = document.getElementById('btn-desencriptar');
const btnCopiar = document.getElementById('btn-copiar');
const resultadoTxt = document.getElementById('txt_codificado');
const letras = '^[a-z !ñ]+$'
const msjError='¡-Mensaje a codificar vacio, VERIFICA-!';


btnEncriptar.addEventListener('click', ecncriptarTxt, false);
btnDesencriptar.addEventListener('click', descriptarTxt, false);
btnCopiar.addEventListener('click', copiarTxt, false);

function ecncriptarTxt(e) {
    e.preventDefault();
       let txt = ingresaTxt.value;
       resultadoTxt.value= '';
        txt.trim();    
    if (txt.length==0) {
        setTimeout(function () {alert (msjError);}, 100);
        return;
    }

function remplazar(e) {
    let txt = ingresaTxt.value;
    let ObjRemplazar ={
        a:"ai",
        e:"enter",
        i:"imes",
        o:"ober",
        u:"ufat"    };
        txt = txt.replace(/a|e|i|o|u/g, function(matched){
            return ObjRemplazar [matched];
        });
        
}
    
}

function descriptarTxt(e) {}

function copiarTxt(e) {

    
}

