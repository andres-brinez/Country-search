
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

