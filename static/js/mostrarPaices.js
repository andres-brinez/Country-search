import {getInformationApi} from './API.js'



getInformationApi().then(data =>{
    console.log(data)
    showInformation(data)
})

function showInformation (data){

    const countries = document.getElementById('countries')
    countries.innerHTML = ''

    data.forEach(country => {

        const {name, flag, region, capital,population,} = country

        const countryElement = document.createElement('div')
        countryElement.classList.add('country')

        const countryInfo = `
            <div>
                <img class="flag" src="${flag}" alt="${name}">
            </div>
            <div class="country-info">
                <h3 class="country-name">${name}</h3>
                <p><strong>Population:</strong> ${population}</p>
                <p class="country-region"><strong>Region:</strong> ${region}</p>
                <p><strong>Capital:</strong> ${capital}</p>
            </div>
        `

        countryElement.innerHTML = countryInfo
        countries.appendChild(countryElement)
    });
}





