export function event (){
    
    const container = document.getElementsByClassName('country')

    // saber a cual container se paso el mouse

    for (let i = 0; i < container.length; i++) {
        container[i].addEventListener('mouseover', () => {
            container[i].style.backgroundColor = 'red'
        })
        container[i].addEventListener('mouseout', () => {
            container[i].style.backgroundColor = ''
        })
    }

}






