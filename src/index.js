
import { prescriptionValue } from "./showInputValue/showInputValue.js"
import { drugsNameValue } from "./showInputValue/showInputValue.js"
import { drugsNameDoseValue } from "./showInputValue/showInputValue.js"
import { drugsNameDoseAmountValue } from "./showInputValue/showInputValue.js"
import { mql } from "./layoutChange/layoutChange.js"
import { instruction } from "./layoutChange/layoutChange.js"
//import { validateData } from "./validateData/validateData.js"
//import { checkUserName } from "./validateData/validateData.js"
//import { check } from "./validateData/validateData.js"
import Input from "./validateData/validateData.js"
instruction()

// const mql = window.matchMedia("(max-width: 700px)");

// if(mql.matches){

// const prescriptionFieldset = document.querySelector('.prescription')
// prescriptionFieldset.classList.add('element--hidden-mobile')
// const nonprescriptionFieldset = document.querySelector('.nonprescription')
// nonprescriptionFieldset.classList.add('element--hidden-mobile')

// const electronicPrescriptionContainer = document.querySelector('.electronicPrescriptionContainer')
// const paperPrescriptionContainer = document.querySelector('.paperPrescriptionContainer')
// const theOtherContainer = document.querySelector('.theOtherContainer')
// console.log(theOtherContainer)

// const electronicPrescriptionContainerClone = electronicPrescriptionContainer.cloneNode(true)
// const paperPrescriptionContainerClone = paperPrescriptionContainer.cloneNode(true)
// const theOtherContainerClone = theOtherContainer.cloneNode(true)
// console.log(theOtherContainer)

// const textareaPinPesel = document.querySelector('.orderDrugsForm.fieldset.electronicPrescription')
// const textareaPaperPrescription = document.querySelector('.orderDrugsForm.fieldset.paperPrescription')
// const textareaTheOtherDrugs = document.querySelector('.orderDrugsForm.fieldset.otherDrugs')
// console.log(textareaTheOtherDrugs)

// textareaPinPesel.appendChild(electronicPrescriptionContainerClone)
// textareaPaperPrescription.appendChild(paperPrescriptionContainerClone)
// textareaTheOtherDrugs.appendChild(theOtherContainerClone)

// const electronicButtonMobile = electronicPrescriptionContainerClone.querySelector('.electronicPrescription.button')
// electronicButtonMobile.classList.add('mobile')
// const paperButtonMobile = paperPrescriptionContainerClone.querySelector('.paperPrescription.button')
// paperButtonMobile.classList.add('mobile')
// const theOtherDrugsButtonMobile = theOtherContainerClone.querySelector('.nonPrescription.button')
// console.log(theOtherDrugsButtonMobile)
// theOtherDrugsButtonMobile.classList.add('mobile')

// const electronicPinMobile = electronicPrescriptionContainerClone.querySelector('.pin')
// electronicPinMobile.classList.add('mobile')
// const paperInputMobile = paperPrescriptionContainerClone.querySelector('.paperPrescription')
// paperInputMobile.classList.add('mobile')
// const theOtherDrugsDrugName = theOtherContainerClone.querySelector('.drugName')
// console.log(theOtherDrugsDrugName)
// theOtherDrugsDrugName.classList.add('mobile')

// const electronicPeselMobile = electronicPrescriptionContainerClone.querySelector('.pesel')
// electronicPeselMobile.classList.add('mobile')
// const theOtherDrugsAmountName = theOtherContainerClone.querySelector('.drugAmount')
// console.log(theOtherDrugsAmountName)
// theOtherDrugsAmountName.classList.add('mobile')
// const theOtherDrugDoseName = theOtherContainerClone.querySelector('.drugDose')
// theOtherDrugDoseName.classList.add('mobile')

// prescriptionValue(electronicButtonMobile, electronicPinMobile, electronicPeselMobile, textareaPinPesel)
// prescriptionValue(paperButtonMobile, paperInputMobile, null , textareaPaperPrescription)
// drugsNameValue(theOtherDrugsButtonMobile, theOtherDrugsDrugName, theOtherDrugDoseName, theOtherDrugsAmountName, textareaTheOtherDrugs )
// drugsNameDoseValue(theOtherDrugsButtonMobile, theOtherDrugsDrugName, theOtherDrugDoseName, theOtherDrugsAmountName, textareaTheOtherDrugs )
// drugsNameDoseAmountValue(theOtherDrugsButtonMobile, theOtherDrugsDrugName, theOtherDrugDoseName, theOtherDrugsAmountName, textareaTheOtherDrugs )
// } 


//const prescriptionFieldset = document.querySelector('.electronicPrescriptionContainer')


  
  
        
          
          // media query change
          

















const fields = [
    {
        name: 'username',
        label: 'Imi?? i nazwisko',
        required: true,
        pattern: '^[a-zA-Z ???-]+$',
    },
    {
        name: 'email',
        label: 'Email',
        required: true,
        pattern: '/^[a-zA-Z0-9.!#$%&???*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/',
    },
 ]






 






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
//         errorDisplay.innerText = 'Podaj liczb??'
//     }

//     function hideText() {
//         errorDisplay.innerText = ''
//     }

//     if (isNaN(val)) {
//         e.target.value = val.slice(0, len - 1);
//         showText(errorDisplay, 'Podaj liczb??')

//     } else if (val) {
//         hideText(errorDisplay, '')

//     } else if (val.length !== 4) {
//         setError(pin, 'Kod PIN jest 4-cyfowy')

//     } else setSuccess(pin)
    
// }

 export const setError = (element, message) => {
    // const span = document.querySelector('span')
    const spanok = element.parentElement.parentElement.children[1].children[1]
    console.log(spanok)
    const spanwrong = element.parentElement.parentElement.children[1].children[2]
    console.log(spanwrong)

 
    
    const inputControl = element.parentElement.parentElement
    console.log(inputControl)
    const errorDisplay = inputControl.querySelector('.label__error')
    errorDisplay.innerText = message
    element.classList.remove('success')
   // spanok.classList.add('spanok')
    element.parentElement.classList.remove('success')
    element.classList.add('error')
    element.parentElement.classList.add('error')
    //spanok.classList.add('spanok')
    spanok.classList.remove('spanShow')
    spanwrong.classList.add('spanShow')

    // element.classList.add('error')
    // element.parentElement.classList.add('error')
    
    
   
}

export const setSuccess = element => {

    console.log(element)
    const inputControl = element.parentElement.parentElement
    console.log(inputControl)
    const spanok = element.parentElement.parentElement.children[1].children[1]
    const spanwrong = element.parentElement.parentElement.children[1].children[2]
    // //span.setAttribute('class')
    //spanok.classList.remove('spanok')
    //spanwrong.classList.add('spanwrong')
    // //spanwrong.classList.add('spanShow')
    // //spanwrong.classList.remove('spanNone')
    // //spanok.classList.remove('span')
    // //spanok.classList.remove('spanNone')
    //spanok.classList.add('spanShow')
    // console.log(span)
    const errorDisplay = inputControl.querySelector('.label__error')
    errorDisplay.innerText = ''
    element.classList.remove('error')
    element.parentElement.classList.remove('error')
    element.classList.add('success')
    element.parentElement.classList.add('success')
    //spanok.classList.remove('spanok')
    spanok.classList.add('spanShow')
    spanwrong.classList.remove('spanShow')
    
    //inputControl.classList.remove('error')
    
   
    
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
//             setError(username, 'Wype??nij powy??sze pole')
//         } 

//         if (emailValue === '') {
//             setError(email, 'Wypelnij powy??sze pole')
//         }
        
//     }

//     checkData()

// }

// const showInputValue = function (el, rootContainer) {

//     el.addEventListener('keyup', function (event) {
//         if (event.key === "Enter") {

//             rootContainer.innerText = ''

//             const inputValueContainer = document.createElement('div')
//             const inputValueContainerNode = rootContainer.appendChild(inputValueContainer)
//             const show = event.target.value


//             showInput(inputValueContainerNode, show)

//         }
//     })
// }





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

