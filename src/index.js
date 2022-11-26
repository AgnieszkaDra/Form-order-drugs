import { usernameValue} from "./showInputValue/showInputValue.js"
import { electronicPrescriptionValue } from "./showInputValue/showInputValue.js"
import { drugsNameValue } from "./showInputValue/showInputValue.js"
import { drugsNameDoseValue } from "./showInputValue/showInputValue.js"






// import { validateInputs } from "./validateInputs/validateInputs.js"
// console.log(validateInputs)


const username = document.getElementById('username')
const email = document.getElementById('email')
const inputs = document.querySelectorAll('input')
const usernameButton = document.querySelector('.addUserName.button')
console.log(inputs)

const fields = [
    {
        name: 'username',
        label: 'Imię i nazwisko',
        required: true,
        pattern: '^[a-zA-Z –-]+$',
    },
    {
        name: 'email',
        label: 'Email',
        required: true,
        pattern: '/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/',
    },
 ]

// fields.forEach(function(e){
// console.log(e.name)
//  })

// inputs.forEach(function(input){
//     input.addEventListener('keyup', function (event) {
//         if (event.key === "Enter") {
//             input.blur()
//             validateInputs()
// }}) 
// })
console.log(form)
const userNameValue = username.value.trim()
console.log(userNameValue)
const emailValue = email.value.trim()
export const textareaUserName = document.querySelector('.textarea.data')
export const textareaEmail = document.querySelector('.textarea.email')
// email.addEventListener('keyup', function (event) {
//     if (event.key === "Enter") {
//         username.blur()
//         checkEmail()
// }}) 

// const buttonUser = function(){
// usernameButton.addEventListener('click', function() {

//     const userNameValue = username.value.trim()
//     const inputValueContainer = document.createElement('div')
//     const inputValueContainerNode = textareaUserName.appendChild(inputValueContainer)
//     inputValueContainer.classList.add('inputValueContainer')
//     const inputContainer = document.createElement('div')
//     inputValueContainerNode.appendChild(inputContainer)
//     inputContainer.innerText = userNameValue
//     const button = document.createElement('button')
//     button.innerText = 'X'
//     inputValueContainerNode.appendChild(button)
    

//     button.addEventListener('click', function (el) {
//         el.target.closest('.inputValueContainer').remove()
//     })
            
    
    
//  })
// }

// buttonUser()

 







    username.addEventListener('keyup', function (event) {
        if (event.key === "Enter") {
            username.blur()
            alert('use')
            checkUserName()
}})







 function checkUserName() {
    const userNameValue = username.value.trim()
    if (!(userNameValue === '')) {
        alert('username')
        setSuccess(username)
        
    } else if (userNameValue === ''){
        username.classList.remove('success')
        username.style.border = '2px solid black'
        const parent = username.parentElement
        const parentDiv = parent.querySelector('div')
        parentDiv.innerHTML = ''
    
    } else if ( userNameValue === ''){
        return
    }
 }


 function checkEmail(){
    const email = document.getElementById('email')
    if ( emailValue && !(emailValue === '')) {
        alert('email')
        setSuccess(email)
        
    } else if (emailValue === ''){
        
        email.style.border = '2px solid black'
        const parent = email.parentElement
        const parentDiv = parent.querySelector('div')
        parentDiv.innerHTML = ''
        setError(emailValue)
    
    } else if(emailValue === '') {
        return
    }
 }



//import './buttonElectronicPrescription/buttonElectronicPrescription'
/**
 * data
 */
//const pin = document.getElementById('PIN');

//const form = document.getElementById('form')


//const pesel = document.getElementById('pesel')
const paperPrescription = document.getElementById('paperPrescription')
const drugName = document.getElementById('drugName')
const drugDose = document.getElementById('drugDose')
const amountDrugs = document.getElementById('amountDrugs')
const textareaDrugs = document.querySelector('.orderDrugsForm.textarea')
// const textareaUserName = document.querySelector('.textarea.data')
// const textareaEmail = document.querySelector('.textarea.email')
const textareaPinPesel = document.querySelector('.textarea.pinpesel')
const textareaPin = document.querySelector('.textarea.pin')
const textareaPesel = document.querySelector('textarea.pesel')
const textareaPinElectronicPrescription = document.querySelector('.textarea.electronicPinPrescription')
const textareaPeselElectronicPrescription = document.querySelector('.textarea.electronicPeselPrescription')
const textareaButtonPeselElectronicPrescription = document.querySelector('.textarea.electronicPeselPrescription.button')
const flex = document.querySelector('.flex')


const divError = document.querySelector('.label__error')






//const username = document.getElementById('username')

// xszdconst email = document.getElementById('email')


const isValidEmail = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// pin.addEventListener('keyup', insertNumbers);

// function insertNumbers(e) {
//     const val = e.target.value
//     const len = val.length;
//     const inputControl = document.querySelector('.label')
//     const errorDisplay = inputControl.querySelector('.label__error')

//     function showText() {
//         errorDisplay.innerText = 'Podaj liczbę'
//     }

//     function hideText() {
//         errorDisplay.innerText = ''
//     }

//     if (isNaN(val)) {
//         e.target.value = val.slice(0, len - 1);
//         showText(errorDisplay, 'Podaj liczbę')

//     } else if (val) {
//         hideText(errorDisplay, '')

//     } else if (val.length !== 4) {
//         setError(pin, 'Kod PIN jest 4-cyfowy')

//     } else setSuccess(pin)
    
// }

 const setError = (element, message) => {
   
    const inputControl = element.parentElement.parentElement
    const errorDisplay = inputControl.querySelector('.label__error')
    errorDisplay.innerText = message
    inputControl.classList.add('error')
    inputControl.classList.remove('success')
}

 const setSuccess = element => {

    element.style.border = 'none'
    const inputControl = element.parentElement.parentElement
   
    
    console.log(inputControl)
    const span =element.nextElementSibling
    span.removeAttribute('class')
    span.classList.remove('.span')
    const errorDisplay = inputControl.querySelector('.label__error')
    errorDisplay.innerText = ''
    inputControl.classList.add('success')
    inputControl.classList.remove('error')
   
    
}
form.addEventListener('submit', e => {
    e.preventDefault()
    //validateInputs()
})



// const validateInputs = () => {

    
//     const userNameValue = username.value.trim()
//     console.log(userNameValue)
//     const emailValue = email.value.trim()
    
//     function checkData() {
//         if (!(userNameValue === '')) {
//             setSuccess(username)
            
//         } else if (userNameValue === ''){
//             const parent = username.parentElement
//             const parentDiv = parent.querySelector('div')
//             parentDiv.innerHTML = ''
//         }
//         if (userNameValue === '') {
//             setError(username, 'Wypełnij powyższe pole')
//         } 

//         if (emailValue === '') {
//             setError(email, 'Wypelnij powyższe pole')
//         }
        
//     }

//     checkData()

// }

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





const buttonElectronicPrescription = document.querySelector('.button__electronicPrescription')

// buttonElectronicPrescription.addEventListener('click', e => {
    
//     e.preventDefault()
//     validateButtons()
// }
// )

// const validateButtons = () => {

//     const pinValue = pin.value.trim()
//     const peselValue = pesel.value.trim()

//     function checkData() {
//          if (pinValue.length !== 4) {
//         setError(pin, 'Kod PIN jest 4-cyfowy')
//     } else {
//         setSuccess(pin)
//     }

//     if (peselValue.length !== 11) {
//         setError(pesel, 'Kod PESEL jest 11-cyfowy')
//     } else {
//         setSuccess(pesel)
//     }

//     if (pin.closest('.label').classList.contains('success') && pesel.closest('.label').classList.contains('success')) {
//         const showpin = pin.value
//         const showpesel = pesel.value
//         showText2(textareaPinPesel, showpin, showpesel)
//     }
//     }

//     checkData()

   
// }

// const showText2 = function (container, text, pesel) {

//     const pinPeselContainer = document.createElement('div')
//     pinPeselContainer.classList.add('pinPeselCont')
//     container.appendChild(pinPeselContainer)

//     const pinContainer = document.createElement('div')
//     pinContainer.classList.add('pinCont')
//     pinPeselContainer.appendChild(pinContainer)
//     pinContainer.innerText = text

//     const peselContainer = document.createElement('div')
//     peselContainer.classList.add('peselCont')
//     pinPeselContainer.appendChild(peselContainer)
//     peselContainer.innerText = pesel

//     if (pesel) {

//         const button = document.createElement('button')
//         button.innerText = 'X'
//         peselContainer.appendChild(button)
//         button.classList.add('flexButton')

//         button.addEventListener('click', function (el) {
//             el.target.closest('.pinPeselCont').remove()
//         })
//     }

// }







// const isValidEmail = email => {
//     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }


// const render = function () {

//     const usernameElement = showInputValue(username, textareaUserName)
//     const emailElement = showInputValue(email, textareaEmail)
//     //const pinElement = showText7(textareaPinPesel, flex)
//     //const peselElement = showInputValue(pesel, textareaPesel)
//     //const pinElements = validateButtons(pin, textareaPinElectronicPrescription)
//     //const peselElements = validateButtons(pesel, textareaPeselElectronicPrescription)


//     textareaUserName.appendChild(usernameElement)
//     textareaEmail.appendChild(emailElement)
//     //textareaPinPesel.appendChild(pinElement)
//     //textareaPesel.appendChild(peselElement)
//     //textareaPinElectronicPrescription.appendChild(pinElements)
//     //textareaPeselElectronicPrescription.appendChild(peselElements)

// }

// //renderData(textareaData)
// render()

























// const render = function () {

//     const usernameElement = showInputValue(username, textareaUserName)
//     const emailElement = showInputValue(email, textareaEmail)
//     //const pinElement = showText7(textareaPinPesel, flex)
//     //const peselElement = showInputValue(pesel, textareaPesel)
//     //const pinElements = validateButtons(pin, textareaPinElectronicPrescription)
//     //const peselElements = validateButtons(pesel, textareaPeselElectronicPrescription)


//     textareaUserName.appendChild(usernameElement)
//     textareaEmail.appendChild(emailElement)
//     //textareaPinPesel.appendChild(pinElement)
//     //textareaPesel.appendChild(peselElement)
//     //textareaPinElectronicPrescription.appendChild(pinElements)
//     //textareaPeselElectronicPrescription.appendChild(peselElements)

// }

// //renderData(textareaData)
// render()

