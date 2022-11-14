/**
 * buttonElectronicPrescription
 */
 import { setError } from "../functions/functions.js"
 import { setSuccess } from "../functions/functions.js"


 const pin = document.getElementById('PIN')
 const pesel = document.getElementById('pesel')
 const textareaPinPesel = document.querySelector('.textarea.pinpesel')
 const buttonElectronicPrescription = document.querySelector('.button__electronicPrescription')

buttonElectronicPrescription.addEventListener('click', e => {
    
    e.preventDefault()
    validateButtons()
}
)

const validateButtons = () => {

    const pinValue = pin.value.trim()
    const peselValue = pesel.value.trim()

    function checkData() {
         if (pinValue.length !== 4) {
        setError(pin, 'Kod PIN jest 4-cyfowy')
    } else {
        setSuccess(pin)
    }

    if (peselValue.length !== 11) {
        setError(pesel, 'Kod PESEL jest 11-cyfowy')
    } else {
        setSuccess(pesel)
    }

    if (pin.closest('.label').classList.contains('success') && pesel.closest('.label').classList.contains('success')) {
        const showpin = pin.value
        const showpesel = pesel.value
        showText2(textareaPinPesel, showpin, showpesel)
    }
    }

    checkData()

   
}

const showText2 = function (container, text, pesel) {

    const pinPeselContainer = document.createElement('div')
    pinPeselContainer.classList.add('pinPeselCont')
    container.appendChild(pinPeselContainer)

    const pinContainer = document.createElement('div')
    pinContainer.classList.add('pinCont')
    pinPeselContainer.appendChild(pinContainer)
    pinContainer.innerText = text

    const peselContainer = document.createElement('div')
    peselContainer.classList.add('peselCont')
    pinPeselContainer.appendChild(peselContainer)
    peselContainer.innerText = pesel

    if (pesel) {

        const button = document.createElement('button')
        button.innerText = 'X'
        peselContainer.appendChild(button)
        button.classList.add('flexButton')

        button.addEventListener('click', function (el) {
            el.target.closest('.pinPeselCont').remove()
        })
    }

}


