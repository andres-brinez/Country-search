export const getInformationApi = async (name,query) => {
    let api= ""
    
    if (name==undefined){ // si no pasa parametros
        api = `https://restcountries.com/v2/all`
    }
    else{
        api = `https://restcountries.com/v2/${query}/${name}`
    }

    

    const response = await fetch(api)
    const data = await response.json()


    return data
}











