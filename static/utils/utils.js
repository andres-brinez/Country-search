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


