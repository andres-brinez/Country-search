// (function () {
//     console.log("acordion.js");
//     $(".accordion-titulo").click(function (e) {

//         e.preventDefault();

//         let contenido = $(this).next(".accordion-content");

//         if (contenido.css("display") == "none") { //open		
//             contenido.slideDown(250);
//             $(this).addClass("open");
//         }
//         else { //close		
//             contenido.slideUp(250);
//             $(this).removeClass("open");
//         }

//     });
// });


// function mostrarContenido(){
//     const titulo= document.getElementsByClassName('accordion-titulo')[0]

//     titulo.addEventListener('click', function(e){
//         e.preventDefault()
//         const contenido = document.getElementsByClassName('accordion-content')[0]
//         if(contenido.style.display === 'none'){
//             contenido.style.display = 'block'
//             titulo.classList.add('open')
//         }else{
//             contenido.style.display = 'none'
//             titulo.classList.remove('open')
//         }
// })
// }


function OcultarMostrarContenido() {
    const titulo = document.getElementsByClassName('accordion-titulo')[0]

    const contenido = document.getElementsByClassName('accordion-content')[0]
    if (contenido.style.display === 'none') {
        contenido.style.display = 'block'
        titulo.classList.add('open')
    } else {
        contenido.style.display = 'none'
        titulo.classList.remove('open')
    }
}

