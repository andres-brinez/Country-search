export  function event (data){
    
    const container = document.getElementsByClassName('country')
    const flag = document.getElementsByClassName('flag')
    const menuRegions= document.getElementsByClassName('regions')[0]

    // saber a cual container se paso el mouse

    for (let i = 0; i < container.length; i++) {
        // obtiene el elemento info-one e info-two
        const infoOne=container[i].childNodes[3]
        const infoTwo=container[i].childNodes[5]
        
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
    }

   
    

}


export function formNumber (num){
    let number = num.toString()
    let newNumber = ''
    let cont = 0
    for (let i = number.length-1; i >= 0; i--) {
        if (cont == 3) {
            newNumber = '.' + newNumber
            cont = 0
        }
        newNumber = number[i] + newNumber
        cont++
    }
    return newNumber
}




