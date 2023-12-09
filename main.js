$(document).ready(function () {
   let arreglo_nft = [
    {nombre: "Ape #233", categoria: "PEACEFUL APE", precio: 0.04, imagen: "/imagenes/imagen1.png"},
    {nombre: "Lions #17", categoria: "LAZY LIONS", precio: 3, imagen: "/imagenes/img2.jpg"},
    {nombre: "Lions #35", categoria: "LAZY LIONS", precio: 1.48, imagen: "/imagenes/imagen3.jpg"},
    {nombre: "Ape #214", categoria: "PEACEFUL APE", precio: 0.04, imagen: "/imagenes/imagen4.png"},
    {nombre: "Cat #1046", categoria: "GUTTER CAT", precio: 0.17, imagen: "/imagenes/imagen5.png"},
    {nombre: "Lions #46", categoria: "LAZY LIONS", precio: 1.35, imagen: "/imagenes/imagen6.jpg"},
    {nombre: "HAPE #8161", categoria: "HAPE PRIME", precio: 7.5, imagen: "/imagenes/imagen7.png"},
    {nombre: "Cat #3000", categoria: "GUTTER CAT", precio: 10, imagen: "/imagenes/imagen8.png"},
   ]


   

    

$.each(arreglo_nft, function (i, e) { 
    

$(".cont_fondo3").append(`

<div class="card">
<div class="cont_img">
    <img src="${e.imagen}" alt="">
</div>




<div class="nombres">
    <h3>${e.nombre}</h3>
    <p><img src="./imagenes/icono.svg" alt="">  ${e.precio}</p>
</div>
<hr>
<div class="categoria">
    <p class="categoria" >${e.categoria}</p>
    <p><i class="fa-solid fa-heart"></i></p>
</div>

<div class="cont_oculto" >

<div class="nombres">
    <h3>${e.nombre}</h3>
    <p><img src="./imagenes/icono.svg" alt="">  ${e.precio}</p>
</div>
<hr>
<div class="categoria">
    <p class="categoria" >${e.categoria}</p>
    <p><i class="fa-solid fa-heart"></i></p>
</div>
<div class="cont_info" >
<a  href="info.html?nombre=${encodeURIComponent(e.nombre)}&imagen=${encodeURIComponent(e.imagen)}&precio=${e.precio}" >Ver mas</a>

</div>


</div>



</div>



`);
});



$(".cont_oculto").hide();


$(".card").hover(function () {
        // over
        $(this).find(".cont_oculto").fadeIn();
     
        
    }, function () {
        // out
        $(this).find(".cont_oculto").fadeOut();
    }
);







$(".cont_fondo3 h1").click(function (e) { 
   e.preventDefault();
   
let h1 = $(this).text();

console.log(h1);

});



$(".barramenu").click(function (e) { 
    e.preventDefault();
   $(".fondo_menu").toggleClass("tras");
$(".header_menu").toggleClass("agregar");
$(".opciones_header").toggleClass("agregar");
    
});

$(".cerrar_menu").click(function (e) { 
    e.preventDefault();
    $(".fondo_menu").removeClass("tras");
    $(".header_menu").removeClass("agregar");
    $(".opciones_header").removeClass("agregar");

    
});







   
});