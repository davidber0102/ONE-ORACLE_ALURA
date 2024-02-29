
//Declarar todos los elementos utilizados del DOMhtml
const ingresaTxt = document.getElementById('ingresa_txt');
const btnEncriptar = document.getElementById('btn-encriptar');
const btnDesencriptar = document.getElementById('btn-desencriptar');
const btnCopiar = document.getElementById('btn-copiar');
const resultadoTxt = document.getElementById('txt_codificado');
const letrasPermitidas = '^[a-z !ñ]+$'
const msjError='¡-Mensaje a codificar vacio, VERIFICA-!';
const ObjRemplazar ={
    a:"ai",
    e:"enter",
    i:"imes",
    o:"ober",
    u:"ufat"    };


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
    
    /*
    https://es.stackoverflow.com/questions/510006/m%C3%A9todo-de-encriptado-en-javascript
    https://github.com/netosolis1990/cifrado-de-mensajes-con-javascript/blob/master/js/app.js
    https://github.com/diegofdg/encriptador_de_texto/blob/main/js/script.js
    else{
        for(txt.match(letrasPermitidas)!=null){
            txt = txt.replace(/a|e|i|o|u/g, function(matched){
            return ObjRemplazar [matched];
    }
*/
    
}

function descriptarTxt(e) {

}

function copiarTxt(e) {

    
}
