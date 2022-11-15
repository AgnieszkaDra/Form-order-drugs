import { username, email, textareaUserName, textareaEmail } from "../variables/variables"
// //import { userNameValue } from "../validateData/validateData"
import { validate } from "schema-utils"
import { validateData } from "../validateData/validateData"

const addUserName = document.querySelector('.addUserName')
const addEmail = document.querySelector('.addEmail')


function showInputData(button, elementValue,el, rootContainer ) {
    if (el === undefined){
        return 
    }

    button.addEventListener('click', function (e) {

        e.preventDefault()
       
        showData(elementValue, rootContainer)
    })
}

const showInput = function (element, text) {
    element.innerText = text
}

const showData = (elementValue, rootContainer) => {
    
    const value = elementValue.value.trim()

    
    

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
            
    showInput(inputContainer, value)
}

showInputData(addUserName, username,null, textareaUserName, )
showInputData(addEmail, email, null, textareaEmail, )







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