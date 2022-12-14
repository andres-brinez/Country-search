import {getInformationApi} from './API.js'
import { eventContainer } from './eventos.js'
import { formNumber } from '../utils/utils.js'

const mensaje = document.getElementById('mensaje')



getInformationApi().then(data =>{
    showInformation(data)
})

export function showInformation (data){

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

        eventContainer(country) // al cargar  la página y los paices se  puede hacer eventos sobre el 
    });

    

}








