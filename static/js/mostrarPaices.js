import {getInformationApi} from './API.js'
import { eventContainer } from './eventos.js'
import { formNumber } from '../utils/utils.js'

const mensaje = document.getElementById('mensaje')
const h2= document.getElementById('detalles')


getInformationApi().then(data =>{
    showInformationCountries(data)
})

export function showInformationCountries (data){

    document.title ='REST Countries API'
    document.getElementsByTagName('link')[0].attributes[1].textContent='https://cdn-icons-png.flaticon.com/512/921/921475.png'
    

    h2.style.display='none'

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

        eventContainer() // al cargar  la página y los paices se  puede hacer eventos sobre el 
    });

    

}

export function showDetailsCountry(name){
    getInformationApi(name,'name').then(data =>{
        document.title =name
        
        h2.style.display='block'

        const countries = document.getElementById('countries')
        countries.innerHTML = ''

        data.forEach(country => {
            console.log(data)

            const {name, flag, region, capital,population,subregion,area,nativeName,demonym,timezones,alpha3Code} = country

            document.getElementsByTagName('link')[0].attributes[1].textContent=flag


            const countryElement = document.createElement('div')
            countryElement.classList.add('container')

            const countryInfo = `
            <div class="countryInfo">
            <div class="info contry-info-one">
                <div class="country__flag">
                    <img src=${flag} alt="${name}">
                </div>
                <p class="country__name"><span>Nombre </span>${name}</p>
                <p class="country__region"><span>Capital </span>${capital}</p>
                
            </div>
            <div class="info contry-info-two">
                <p class="country__capital"><span>Code </span>${alpha3Code}</p>
                <p class="country__region"><span>Region </span>${region}</p>
                <p class="country__population"><span>Population </span>${formNumber(population)}</p>
                <p class="country__subregion"><span>Subregion </span>${subregion}</p>

            </div>

            <div class="info contry-info-tree">
                <p class="country__area"><span>Area</span> ${formNumber(area)} km<sup>2</sup></p>
                <p class="country__languages"><span>Semonym</span> ${demonym} </p>
                <p class="country_zone_time"><span>Zone Time</span> ${timezones}</p>
                <p class="country__borders"><span>NativeName</span> ${nativeName}</p>
                
            </div>


        </div>

                
            `

            countryElement.innerHTML = countryInfo
            countries.appendChild(countryElement)
            mensaje.textContent=''  

        });
    })

}










