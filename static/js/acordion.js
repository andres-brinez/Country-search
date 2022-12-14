

 const titulo = document.getElementsByClassName('accordion-titulo')[0]
 const contenido = document.getElementsByClassName('accordion-content')[0]
 const menuRegions = document.getElementsByClassName('toggle-icon')[0]


menuRegions.addEventListener('mouseover', () => {
    if (document.getElementsByClassName('open')[0]===undefined){
        contenido.style.display = 'block'
        titulo.classList.add('open')
    }
    else{
        contenido.style.display = 'none'
        titulo.classList.remove('open')
    }
    
})

export function closeAcordion(){
    contenido.style.display = 'none'
    titulo.classList.remove('open')
}






