/**
 * buttonElectronicPrescription
 */
 import { setError } from "../functions/functions.js"
 import { setSuccess } from "../functions/functions.js"


 const pin = document.getElementById('PIN')
 const pesel = document.getElementById('pesel')
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


