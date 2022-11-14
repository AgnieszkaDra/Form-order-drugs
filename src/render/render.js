import { showInputValue } from "../showInputValue/showInputValue"
const username = document.getElementById('username')
const email = document.getElementById('email')
alert('nnmm')
const textareaUserName = document.querySelector('.textarea.data')
const textareaEmail = document.querySelector('.textarea.email')

const render = function () {

    const usernameElement = showInputValue(username, textareaUserName)
    const emailElement = showInputValue(email, textareaEmail)
    //const pinElement = showText7(textareaPinPesel, flex)
    //const peselElement = showInputValue(pesel, textareaPesel)
    //const pinElements = validateButtons(pin, textareaPinElectronicPrescription)
    //const peselElements = validateButtons(pesel, textareaPeselElectronicPrescription)


    textareaUserName.appendChild(usernameElement)
    textareaEmail.appendChild(emailElement)
    //textareaPinPesel.appendChild(pinElement)
    //textareaPesel.appendChild(peselElement)
    //textareaPinElectronicPrescription.appendChild(pinElements)
    //textareaPeselElectronicPrescription.appendChild(peselElements)

}

//renderData(textareaData)
render()