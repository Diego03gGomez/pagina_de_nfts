$(document).ready(function () {
    function obtenerValorParametro(nombre) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(nombre);
    }


const nombreselect = obtenerValorParametro('nombre');
const imagenselect = obtenerValorParametro('imagen');
const precioselect = obtenerValorParametro('precio');

if(nombreselect){

$(".cont_info").append(`
<div>
<img src="${imagenselect}" alt="">
<h1>${nombreselect}</h1>
<h2>${precioselect}</h2>
</div>
`);

}


    
});