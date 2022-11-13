
import "./validateForm/validateForm"


console.log('dta')
/**
 * data
 */
export const pin = document.getElementById('PIN');


const pesel = document.getElementById('pesel')
const paperPrescription = document.getElementById('paperPrescription')
const drugName = document.getElementById('drugName')
const drugDose = document.getElementById('drugDose')
const amountDrugs = document.getElementById('amountDrugs')
const textareaDrugs = document.querySelector('.orderDrugsForm.textarea')
const textareaUserName = document.querySelector('.textarea.data')
const textareaEmail = document.querySelector('.textarea.email')
const textareaPinPesel = document.querySelector('.textarea.pinpesel')
const textareaPin = document.querySelector('.textarea.pin')
const textareaPesel = document.querySelector('textarea.pesel')
const textareaPinElectronicPrescription = document.querySelector('.textarea.electronicPinPrescription')
const textareaPeselElectronicPrescription = document.querySelector('.textarea.electronicPeselPrescription')
const textareaButtonPeselElectronicPrescription = document.querySelector('.textarea.electronicPeselPrescription.button')
const flex = document.querySelector('.flex')

const buttonElectronicPrescription = document.querySelector('.button__electronicPrescription')
const divError = document.querySelector('.label__error')





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

const showInput = function (element, text) {
    element.innerText = text
}

const showInputValue = function (el, rootContainer) {

    el.addEventListener('keyup', function (event) {
        if (event.key === "Enter") {

            rootContainer.innerText = ''

            const inputValueContainer = document.createElement('div')
            const inputValueContainerNode = rootContainer.appendChild(inputValueContainer)
            const show = event.target.value


            showInput(inputValueContainerNode, show)

        }
    })
}

export const setError = (element, message) => {

    const inputControl = element.parentElement.parentElement
    const errorDisplay = inputControl.querySelector('.label__error')
    errorDisplay.innerText = message
    inputControl.classList.add('error')
    inputControl.classList.remove('success')
}

export const setSuccess = element => {

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

pin.addEventListener('keyup', insertNumbers);

function insertNumbers(e) {
    const val = e.target.value
    const len = val.length;
    const inputControl = document.querySelector('.label')
    const errorDisplay = inputControl.querySelector('.label__error')

    function showText() {
        errorDisplay.innerText = 'Podaj liczbę'
    }

    function hideText() {
        errorDisplay.innerText = ''
    }

    if (isNaN(val)) {
        e.target.value = val.slice(0, len - 1);
        showText(errorDisplay, 'Podaj liczbę')

    } else if (val) {
        hideText(errorDisplay, '')

    } else if (val.length !== 4) {
        setError(pin, 'Kod PIN jest 4-cyfowy')

    } else setSuccess(pin)
    
}

























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