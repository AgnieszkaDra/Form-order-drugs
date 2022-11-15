import { username, email, textareaUserName, textareaEmail, pin ,pesel, textareaPinPesel } from "../variables/variables"
// //import { userNameValue } from "../validateData/validateData"
import { validate } from "schema-utils"
import { validateData } from "../validateData/validateData"

const addUserName = document.querySelector('.addUserName')
const addEmail = document.querySelector('.addEmail')
const addPinPesel = document.querySelector('.button__electronicPrescription')


function showInputData(button, elementValue, el2, rootContainer ) {
    if(!(el2 === null)){
alert('ok')
    }
    button.addEventListener('click', function (e) {

        e.preventDefault()
       showData(elementValue, rootContainer)
      
    })
}

const showInput = function (element, el,rootContainer) {

    element.innerText = el 

    if(element && el) {
        const pinPeselContainer = document.createElement('div')
    pinPeselContainer.classList.add('pinPeselCont')
    //pinPeselContainer.innerText = el + text
    rootContainer.appendChild(pinPeselContainer)
   

    }

}

const showData = (elementValue,rootContainer) => {
   
    
    const value = elementValue.value.trim()
    //const val2 = el.value.trim()

    const inputValueContainer = document.createElement('div')
    const inputValueContainerNode = rootContainer.appendChild(inputValueContainer)
    inputValueContainer.classList.add('inputValueContainer')
    

    const inputContainer = document.createElement('div')
   
    inputValueContainerNode.appendChild(inputContainer)
    
   

    const button = document.createElement('button')
    button.innerText = 'X'
    inputValueContainerNode.appendChild(button)
    

    button.addEventListener('click', function (el) {
        el.target.closest('.inputValueContainer').remove()
    })
            
    showInput(inputContainer, value, rootContainer)
}

showInputData(addUserName, username,null,textareaUserName, )
showInputData(addEmail, email,null,textareaEmail)
showInputData(addPinPesel, pin, pesel, textareaPinPesel )







const checkData2 = (el) => {
    console.log(el.value.trim())

    const value1 = el.value.trim()

    //alert(value1)
    alert(checkData2(username))
    //checkData2(username, addUserName)
    //checkData2(email, addEmail)
}







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