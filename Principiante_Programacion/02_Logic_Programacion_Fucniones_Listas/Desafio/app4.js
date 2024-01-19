let listaGenerica = [];
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];





console.log(listaGenerica);
console.log(listaGenerica.length);

console.log(lenguagesDeProgramacion);
console.log(lenguagesDeProgramacion.length);


lenguagesDeProgramacion.push("Java");
lenguagesDeProgramacion.push("Ruby");
lenguagesDeProgramacion.push("GoLang");

console.log(lenguagesDeProgramacion);
console.log(lenguagesDeProgramacion.length);


function ElemtosProgramacion() {
    for (let index = 0; index < lenguagesDeProgramacion.length; index++) {
        console.log(lenguagesDeProgramacion[index]);        
    }    
}

function ElemtosProgramacionInverso() {
    for (let index = lenguagesDeProgramacion.length - 1; index>=0; index--) {
        console.log(lenguagesDeProgramacion[index]);        
    }    
}

ElemtosProgramacion();
ElemtosProgramacionInverso();

function name(params) {
    
}

