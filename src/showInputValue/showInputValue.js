// INPUTS
//const username = document.getElementById('username')
const email = document.getElementById('email')
const pin = document.getElementById('PIN');
const pesel = document.getElementById('pesel')
const paperPrescription = document.getElementById('paperPrescription')
const drugName = document.getElementById('drugName')
const drugDose = document.getElementById('drugDose')
const drugAmount = document.getElementById('drugAmount')
console.log(drugAmount)

// BUTTONS
const usernameButton = document.querySelector('.addUserName.button')
console.log(usernameButton)
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



 export  const usernameValue = function(e){
    const buttonEl = e.target
        const inputEl = e.target.parentElement.children[0].children[1].children[0]
        const container = document.querySelector('.textarea.data')
        let n = 0
        n++
        const value = inputEl.value.trim()
        console.log(n)
        const inputValueContainer = document.createElement('div')
        const inputValueContainerNode = container.appendChild(inputValueContainer)
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

 if(n>= 1){

    buttonEl.removeEventListener('click', usernameValue) 
    
    inputEl.addEventListener('keyup', function (event) {
        // if (event.key === "Enter") {
        //     let v = event.target.value
        //     username.blur()
        //     inputContainer.innerText = v
        //     alert('enter')
        // }
            let v = event.target.value
            //username.blur()
            inputContainer.innerText = v
            
        
    })
    }

    }

    
    
    // const username = document.getElementById('username')
    // const textareaUserName = document.querySelector('.textarea.data')
   
        
       
usernameButton.addEventListener('click', usernameValue)
useremailButton.addEventListener('click', usernameValue )
    
    


  //functionClick(useremailButton, username, textareaUserName)


//dataValue(useremailButton, email, textareaEmail)
//dataValue(paperPrescriptionButton,paperPrescription,textareapaperPrescription)

export const electronicPrescriptionValue = function(elementClicked, input1, input2, container){

    elementClicked.addEventListener('click', function(){

        if(!(input1.value.trim() === '') && !(input2.value.trim() === '')) {
            const value1 = input1.value.trim()
            const value2 = input2.value.trim()
            const inputValueContainer = document.createElement('div')
            const inputValueContainerNode = container.appendChild(inputValueContainer)
            inputValueContainer.classList.add('inputValueContainer')
            const inputContainer = document.createElement('div')
            inputValueContainerNode.appendChild(inputContainer)
            inputContainer.innerText = value1 + value2
            const button = document.createElement('button')
            button.innerText = 'X'
            inputValueContainerNode.appendChild(button)
    
            button.addEventListener('click', function (el) {
            el.target.closest('.inputValueContainer').remove()
    })
        } 
    })
    
}

electronicPrescriptionValue(electronicPrescriptionButton, pin, pesel, textareaPinPesel)

export const drugsNameValue = function(elementClicked, input1, input2, input3, container){

    let n = 0
  
        elementClicked.addEventListener('click', function(){
        console.log(input1, input2)
        n++
            const value1 = input1.value
            const value2 = input2.value
            const value3 = input3.value
            console.log(value1)
            console.log(value2)
            console.log(value3)
            if(!(input1.value.trim() === '') && (value2 === '') && (value3 === '')){
            
            const inputValueContainer = document.createElement('div')
            const inputValueContainerNode = container.appendChild(inputValueContainer)
            inputValueContainer.classList.add('inputValueContainer')
            const inputContainer = document.createElement('div')
            inputValueContainerNode.appendChild(inputContainer)
            
            inputContainer.innerText = n + "" +  value1
            
            const button = document.createElement('button')
            button.innerText = 'X'
            inputValueContainerNode.appendChild(button)
    
            button.addEventListener('click', function (el) {
            el.target.closest('.inputValueContainer').remove()

    })
        }

        
    })
    
    
   
}

drugsNameValue(nonPrescriptionButton, drugName, drugDose , drugAmount, textareaNonprescription)

export const drugsNameDoseValue = function(elementClicked, input1, input2, input3, container){

    let n = 0
    elementClicked.addEventListener('click', function(){
        
        n++
       
        if(!(input1.value.trim() === '') && !(input2.value.trim() === '') && (value3 === '') ){
            
            const value1 = input1.value.trim()
            const value2 = input2.value.trim()
            const value3 = input3.value
            const inputValueContainer = document.createElement('div')
            const inputValueContainerNode = container.appendChild(inputValueContainer)
            inputValueContainer.classList.add('inputValueContainer')
            const inputContainer = document.createElement('div')
            inputValueContainerNode.appendChild(inputContainer)
            
            inputContainer.innerText = n + "" +  value1 + value2 
            
            const button = document.createElement('button')
            button.innerText = 'X'
            inputValueContainerNode.appendChild(button)
    
            button.addEventListener('click', function (el) {
            el.target.closest('.inputValueContainer').remove()

    })
        }

        
    })
    
}

drugsNameDoseValue(nonPrescriptionButton, drugName, drugDose, drugAmount,textareaNonprescription)

export const drugsNameDoseAmountValue = function(elementClicked, input1, input2, input3, container){

    let n = 0
    elementClicked.addEventListener('click', function(){
        n++
       
        if(!(input1.value.trim() === '') && !(input2.value.trim() === '') && !(input3.value.trim() === '') ){
            alert('oooooo')
            const value1 = input1.value.trim()
            const value2 = input2.value.trim()
            const value3 = input3.value.trim()
            const inputValueContainer = document.createElement('div')
            const inputValueContainerNode = container.appendChild(inputValueContainer)
            inputValueContainer.classList.add('inputValueContainer')
            const inputContainer = document.createElement('div')
            inputValueContainerNode.appendChild(inputContainer)
            
            inputContainer.innerText = n + " " +  value1 + value2 + value3
            
            const button = document.createElement('button')
            button.innerText = 'X'
            inputValueContainerNode.appendChild(button)
    
            button.addEventListener('click', function (el) {
            el.target.closest('.inputValueContainer').remove()

    })
        }

        
    })
    
}

drugsNameDoseAmountValue(nonPrescriptionButton, drugName, drugDose, drugAmount,textareaNonprescription)










