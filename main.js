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



let arreglo_peaceful = arreglo_nft.filter((e)=> {
    return e.categoria == "PEACEFUL APE"
})


$.each(arreglo_peaceful, function (indexInArray, e) { 
     $(".cont_peaceful").append(`<div class="card">
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
     `);
});






let arreglo_top = [
{img_usuario: "https://axiesreact.themesflat.co/static/media/avt-1.71a23be871d509a23d2d.jpg", nom_usuario: "Crispin Berry", eth_user: 214.2 },
{img_usuario: "https://axiesreact.themesflat.co/static/media/avt-2.e101dc63363945410d54.jpg", nom_usuario: "Samson Frost", eth_user: 205.43 },
{img_usuario: "https://axiesreact.themesflat.co/static/media/avt-4.cbb2f9fb25c1e375d958.jpg", nom_usuario: "Tommy Alrez", eth_user: 170.3 },
{img_usuario: "https://axiesreact.themesflat.co/static/media/avt-5.cb38feefc0ea48ef8f43.jpg", nom_usuario: "Windsor Lane", eth_user: 120.7 },
{img_usuario: "https://axiesreact.themesflat.co/static/media/avt-5.cb38feefc0ea48ef8f43.jpg", nom_usuario: "Andy Hurldbutt", eth_user: 82.79 },
{img_usuario: "https://axiesreact.themesflat.co/static/media/avt-3.c03860ca1e2872296499.jpg", nom_usuario: "Blake Bank", eth_user: 68.2 },
]

$.each(arreglo_top, function (indexInArray, e) { 
     
$(".cont_top_seller").append(`
<div class="tarjeta_top">
<div class="img_top_seller">
    <img src="${e.img_usuario}" alt="">
</div>
<h3>${e.nom_usuario}</h3>
<h4>${e.eth_user}</h4>
</div>

`);


});




   

    

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