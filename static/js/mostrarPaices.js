import {getInformationApi} from './API.js'
import { event } from './eventos.js'
import { formNumber } from './eventos.js'


getInformationApi().then(data =>{
    console.log(data)
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
        
        event(country)
    });

    

    return 'mensajes cargados '
}

// BUSCAR Paid
const btnSearch= document.getElementById('btn-search')
btnSearch.addEventListener('click', () => {
    const inputSearch = document.getElementById('input-search')
    const value = inputSearch.value
    

    if (value === ''){
        getInformationApi().then(data =>{
            showInformation(data)
        })
    }
    else{
        getInformationApi(value).then(data =>{
            showInformation(data)
        })
    }
})


// 





