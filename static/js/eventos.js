import { closeAcordion } from './acordion.js'
import {showInformation} from './mostrarPaices.js'
import {getInformationApi} from './API.js'


const container = document.getElementsByClassName('country')
const flag = document.getElementsByClassName('flag')
const countryName = document.getElementsByClassName('country-name')
const inputSearch = document.getElementById('input-search')
const btnSearch= document.getElementById('btn-search')
const regiones = document.getElementsByClassName('region')




// eventos sobre el container que tiene a cada pais
export  function eventContainer (data){
    
    // saber a cual container se paso el mouse

    for (let i = 0; i < container.length; i++) {
        // obtiene el elemento info-one e info-two
        const infoOne=container[i].childNodes[3]
        const infoTwo=container[i].childNodes[5]
        
        // mostrar y ocultar  información sobre el pais al efectuar un evento sobre este
        container[i].addEventListener('mouseover', () => {
            container[i].style.backgroundColor = '#418FDE'
            flag[i].style.width='90%'
            flag[i].style.height='120px'
            flag[i].style.transition='width 0.8s linear 0.2s'

            infoOne.style.display='none'
            infoTwo.style.display='block'
            
        
        })
        container[i].addEventListener('mouseout', () => {
            container[i].style.backgroundColor = ''
            flag[i].style.width=''
            flag[i].style.height=''
            
            infoOne.style.display='block'
            infoTwo.style.display='none'
           


        })

        container[i].addEventListener('click', () => {
            // obtener el nombre del pais
            const NameCountry=countryName[i].textContent
            console.log(NameCountry)
            

        })


    }
}

// BUSCAR Pais
btnSearch.addEventListener('click', () => {
    
    let value =inputSearch.value

    // si no es escribe nada
    if (value === ''){
        getInformationApi().then(data =>{
            showInformation(data)
        })
    }
    else{
        getInformationApi(value,'name').then(data =>{
            // control de erroes 
            if (data.status === 404){
                mensaje.textContent='No se encontró el pais, Verifica que el nombre esté en ingle '
            }
            else{
            showInformation(data)
            }
        })
    }
})

// FILTRAR POR REGION
for (let i = 0; i < regiones.length; i++) {
    regiones[i].addEventListener('click', () => {
        let parametro=''
        const region = regiones[i].id

        // si nos escoge ver todos los paices 
        if (region !== 'all'){
            parametro='region'
        }
        closeAcordion()
        
        getInformationApi(region,parametro).then(data =>{
            showInformation(data)
        })


        
    })
}



