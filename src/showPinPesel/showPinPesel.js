import {pin, pesel, textareaPinPesel} from '../variables/variables'

const addPinPesel = document.querySelector('.button__electronicPrescription')

function showPinPesel(button, elementValue,el2,  rootContainer ) {
    
    button.addEventListener('click', function (e) {

        e.preventDefault()
    
       showData(elementValue,el2,  rootContainer)
      
    })
}

const showInput = function (element, el, el2) {

    element.innerText = el + " " + el2

    // if(element && el) {
    //     const pinPeselContainer = document.createElement('div')
    // pinPeselContainer.classList.add('pinPeselCont')
    // //pinPeselContainer.innerText = el + text
    // rootContainer.appendChild(pinPeselContainer)
   

    // }

}



const showData = (elementValue,el2, rootContainer) => {
   
    
    const value = elementValue.value.trim()
    const val2 = el2.value.trim()
    

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
            
    showInput(inputContainer, value, val2)
}

showPinPesel(addPinPesel, pin,pesel,textareaPinPesel )
