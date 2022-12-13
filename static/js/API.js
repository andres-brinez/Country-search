
export const getInformationApi = async (name) => {
    
    let api= ""
    if (name==undefined){ // si no pasa parametros
        api = `https://restcountries.com/v2/all`
    }
    else{
        api = `https://restcountries.com/v2/name/${name}`
    }

    const response = await fetch(api)
    const data = await response.json()


    return data
}











