// INPUTS
const username = document.getElementById('username')
const email = document.getElementById('email')
const pin = document.getElementById('PIN');
const pesel = document.getElementById('pesel')
const paperPrescription = document.getElementById('paperPrescription')
const drugName = document.getElementById('drugName')
const drugDose = document.getElementById('drugDose')
const drugAmount = document.getElementById('drugAmount')

// BUTTONS
const usernameButton = document.querySelector('.addUserName.button')
const useremailButton = document.querySelector('.addEmail.button')
const electronicPrescriptionButton = document.querySelector('.electronicPrescription.button')
const paperPrescriptionButton = document.querySelector('.paperPrescription.button')
const nonPrescriptionButton = document.querySelector('.nonPrescription.button')

// TEXTAREA
const textareaUserName = document.querySelector('.textarea.data')
const textareaEmail = document.querySelector('.textarea.email')
const textareaPinPesel = document.querySelector('.textarea.pinpesel')
const textareapaperPrescription = document.querySelector('.textarea.paperPrescription')
const textareaNonprescription = document.querySelector('.textarea.nonPrescription')
const textareaDrugDose = document.querySelector('.textarea.drugDose')
const textareaDrugAmount = document.querySelector('.textarea.drugAmount')

// FUNCTIONS

export const usernameValue = function(usernameButton, username, textareaUserName){
    usernameButton.addEventListener('click', function() {
      
            const value = username.value.trim()
    const inputValueContainer = document.createElement('div')
    const inputValueContainerNode = textareaUserName.appendChild(inputValueContainer)
    inputValueContainer.classList.add('inputValueContainer')
    const inputContainer = document.createElement('div')
    inputValueContainerNode.appendChild(inputContainer)
    inputContainer.innerText = value
    const button = document.createElement('button')
    button.innerText = 'X'
    inputValueContainerNode.appendChild(button)
    
    button.addEventListener('click', function (el) {
        el.target.closest('.inputValueContainer').remove()
    })

    
})
}

usernameValue(usernameButton, username, textareaUserName)

// export const buttonUser = function(elementClick,input, container){
    
//     elementClick.addEventListener('click', function() {
        
//         if(elementClick === usernameButton || elementClick === useremailButton){
//             const value = input.value.trim()
//     const inputValueContainer = document.createElement('div')
//     const inputValueContainerNode = container.appendChild(inputValueContainer)
//     inputValueContainer.classList.add('inputValueContainer')
//     const inputContainer = document.createElement('div')
//     inputValueContainerNode.appendChild(inputContainer)
//     inputContainer.innerText = value
//     const button = document.createElement('button')
//     button.innerText = 'X'
//     inputValueContainerNode.appendChild(button)
    
//     button.addEventListener('click', function (el) {
//         el.target.closest('.inputValueContainer').remove()
//     })

//     } 

//     elementClick.addEventListener('click', function(){
//          if(elementClick === electronicPrescriptionButton){
//       alert('ok')
//         if(!(pin.value.trim() === '') && !(pesel.value.trim() === '')){
//             alert('ok')
//         }
//     }
//     })
   
            
// })
// }

//  buttonUser(useremailButton, email, textareaEmail)
//  buttonUser(usernameButton, username, textareaUserName)
//  buttonUser(electronicPrescriptionButton, pin, textareaPinPesel) 
//  buttonUser(electronicPrescriptionButton, pesel, textareaPinPesel)
//  buttonUser(paperPrescriptionButton, paperPrescription, textareapaperPrescription)
//  buttonUser(nonPrescriptionButton, drugName, textareaNonprescription)
//  buttonUser(nonPrescriptionButton, drugAmount, textareaNonprescription)
//  buttonUser(nonPrescriptionButton, drugDose, textareaNonprescription)





