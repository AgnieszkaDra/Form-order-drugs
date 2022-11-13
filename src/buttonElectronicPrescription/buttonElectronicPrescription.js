/**
 * buttonElectronicPrescription
 */

 const pin = document.getElementById('PIN')
 const pesel = document.getElementById('pesel')

buttonElectronicPrescription.addEventListener('click', e => {
    e.preventDefault()
    validateButtons()
}
)

const validateButtons = () => {

    const pinValue = pin.value.trim()
    const peselValue = pesel.value.trim()

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


const setError = (element, message) => {

    const inputControl = element.parentElement.parentElement
    const errorDisplay = inputControl.querySelector('.label__error')
    errorDisplay.innerText = message
    inputControl.classList.add('error')
    inputControl.classList.remove('success')
}

const setSuccess = element => {

    const inputControl = element.parentElement.parentElement
    const errorDisplay = inputControl.querySelector('.label__error')
    errorDisplay.innerText = ''
    inputControl.classList.add('success')
    inputControl.classList.remove('error')
}

const isValidEmail = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}