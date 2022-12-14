import {getInformationApi} from './API.js'
import { event } from './eventos.js'
import { formNumber } from './eventos.js'
import { closeAcordion } from './acordion.js'

const mensaje = document.getElementById('mensaje')



getInformationApi().then(data =>{
    showInformation(data)
})

function showInformation (data){

    const countries = document.getElementById('countries')
    countries.innerHTML = ''

    data.forEach(country => {

        const {name, flag, region, capital,population,} = country
        
        let poblacion=formNumber(population) // poner decimales al numero (..)


        const countryElement = document.createElement('div')
        countryElement.classList.add('country')

        const countryInfo = `
        
            <div class="flag" >
                <img  src="${flag}" alt="${name}">
            </div> 
            <div  class="country-info info-one">
                <h3 class="country-name">${name}</h3>
                <p class="country-region">${region}</p>
            </div>

            <div class="country-info info-two ">
                <p><strong>Population:</strong> ${poblacion}</p>
                <p><strong>Capital:</strong> ${capital}</p>
            </div>
        `

        countryElement.innerHTML = countryInfo
        countries.appendChild(countryElement)
        mensaje.textContent=''        
        event(country)
    });

    

}

// BUSCAR Pais
const btnSearch= document.getElementById('btn-search')
btnSearch.addEventListener('click', () => {
    const inputSearch = document.getElementById('input-search')
    let value =inputSearch.value



    if (value === ''){
        getInformationApi().then(data =>{
            showInformation(data)
        })
    }
    else{
        getInformationApi(value,'name').then(data =>{
            console.log(data.status)

            if (data.status === 404){
                mensaje.textContent='No se encontró el pais, Verifica que el nombre esté en ingles '
            
            }
            else{
            showInformation(data)
            }
        })
    }
})

// FILTRAR POR REGION
const regiones = document.getElementsByClassName('region')
for (let i = 0; i < regiones.length; i++) {
    regiones[i].addEventListener('click', () => {
        let parametro=''
        const region = regiones[i].id

        if (region !== 'all'){
            parametro='region'
        }
        closeAcordion()
        
        getInformationApi(region,parametro).then(data =>{
            showInformation(data)
        })




        
    })
}



// 





