
//Declarar todos los elementos utilizados del DOMhtml
const ingresaTxt = document.getElementById('ingresa_txt');
const btnEncriptar = document.getElementById('btn-encriptar');
const btnDesencriptar = document.getElementById('btn-desencriptar');
const btnCopiar = document.getElementById('btn-copiar');
const resultadoTxt = document.getElementById('txt_codificado');
const letrasPermitidas = '^[a-z !ñ]+$'
const msjError='¡Mensaje a codificar vacio, validar datos!';
const msj = document.getElementById('mensaje');


btnEncriptar.addEventListener('click', ecncriptarTxt, false);
btnDesencriptar.addEventListener('click', descriptarTxt, false);
btnCopiar.addEventListener('click', copiarTxt, false);

ingresaTxt.addEventListener('keyup', (e) => {e.target.value = e.target.value.toLowerCase()})

function ecncriptarTxt(e) {
    e.preventDefault();
       let txt = ingresaTxt.value;
       resultadoTxt.value= '';
        txt.trim();    
    if (txt.length==0) {
        msj.innerHTML=msjError, 100;
    } else if(txt.match(letrasPermitidas)!=null) {
        let palabras = txt.split(' ');
        let nuevasPalabras = [];

        for ( let ObjRemplazar of palabras){
            ObjRemplazar = ObjRemplazar.replaceAll('e','enter');
            ObjRemplazar = ObjRemplazar.replaceAll('i','imes');
            ObjRemplazar = ObjRemplazar.replaceAll('a','ai');
            ObjRemplazar = ObjRemplazar.replaceAll('o','ober');
            ObjRemplazar = ObjRemplazar.replaceAll('u','ufat'); 
            nuevasPalabras.push(ObjRemplazar);  

            const palabrasResultado = nuevasPalabras.join(' ');
            resultadoTxt.value = palabrasResultado;
            msj.innerHTML= "¡ Mensaje codificado !";
        }
    } else {
        msj.innerHTML= "¡ Verifique sus Datos !"
        txt.value="";
        return;
    }
        
}

function descriptarTxt(e) {
    e.preventDefault();
    let txt = ingresaTxt.value;
    resultadoTxt.value= '';
     txt.trim();    
 if (txt.length==0) {
     msj.innerHTML=msjError, 100;
 } else if(txt.match(letrasPermitidas)!=null) {
     let palabras = txt.split(' ');
     let nuevasPalabras = [];

     for ( let ObjRemplazar of palabras){
         ObjRemplazar = ObjRemplazar.replaceAll('enter', 'e');
         ObjRemplazar = ObjRemplazar.replaceAll('imes', 'i');
         ObjRemplazar = ObjRemplazar.replaceAll('ai', 'a');
         ObjRemplazar = ObjRemplazar.replaceAll('ober', 'o');
         ObjRemplazar = ObjRemplazar.replaceAll('ufat', 'u'); 
         nuevasPalabras.push(ObjRemplazar);  

         const palabrasResultado = nuevasPalabras.join(' ');
         resultadoTxt.value = palabrasResultado;
         msj.innerHTML= "Mensaje Decodificado";
     }
 } else {
    msj.innerHTML= "¡ Verifique sus Datos !"
     txt.value="";
     return;
 }
}

function copiarTxt(e) {
    e.preventDefault(); 
    const mensajeCopiar = resultadoTxt.value;
    navigator.clipboard.writeText(mensajeCopiar);
    msj.innerHTML= " ¡ Mensaje Copiad !"
    
}




