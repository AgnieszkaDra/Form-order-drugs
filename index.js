
const form = document.getElementById('form')
const username = document.getElementById('username')

const email = document.getElementById('email')
const pin = document.getElementById('PIN')
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

const buttonElectronicPrescription = document.querySelector('.button__electronicPrescription')

const divError = document.querySelector('.label__error')


form.addEventListener('submit', e => {
    e.preventDefault()
    validateInputs()
})

buttonElectronicPrescription.addEventListener('click', e => {
    e.preventDefault()
   validateButtons()
   }
   
)


const showText = (element, text) => {
    element.innerText = text

}

const setLiFunc = function (e) {
    const li = document.createElement('li')
    const button = document.createElement('button')
    //button.innerText = 'usuń'
    li.classList.add('liclass')
    e.appendChild(li)
    //e.appendChild(button)
    return li
}

const appendArray = function (array, container) {
    array.forEach(function (element, index, array) {
        container.appendChild(element) // dla każdego elementu tablicy chcemy dodać go do kontenera
    })
}

// const renderList = function (names) {



//     const listNameItems = names.forEach(function (e) {

//         e.addEventListener('keyup', function (e) {

//             if (e.key === "Enter") { 
//                 const listContainer = document.createElement('ul')
//     listContainer.classList.add("label__input2")
//     textareaDrugs.appendChild(listContainer)
//                 const show = e.target.value
//                 showText(setLiFunc(listContainer), show)
//             }
//         })

//     })

//     appendArray(listNameItems, listContainer)

//     return listContainer

// }

const showInputValue = function (el, rootContainer) {

    el.addEventListener('keyup', function (event) {
        if (event.key === "Enter") {

            rootContainer.innerText = ''

            const inputValueContainer = document.createElement('div')
            const inputValueContainerNode = rootContainer.appendChild(inputValueContainer)
            const show = event.target.value

            showText(inputValueContainerNode, show)

        }
    })
}

const showPinPeselValue = function(el1, el2, rootContainer ) {
   
    el1.addEventListener('keyup', function(event){
        if (event.key === 'Enter') {

            rootContainer.innerText = ''

            const inputValueContainer = document.createElement('div')
            const inputValueContainerNode = rootContainer.appendChild(inputValueContainer)
            const show = event.target.value

            showText(inputValueContainerNode, show)

        }
    })

    
    

}





// pin.addEventListener('keyup', function (event) {
//     if (event.key === 'Enter') {
//         const conatiner = document.createElement('ul')
//         textareaDrugs.appendChild(conatiner)
//         //const pin = document.getElementById('PIN')
//         //const li = document.createElement('li')
//         const show = e.currentTarget.value
//         showText(setLiFunc(conatiner), show)
//         conatiner.appendChild(li)


//     }




// })



const renderListPin = function (names) {
    const listContainer2 = document.createElement('ul')
    textareaDrugs.appendChild(listContainer2)

    const listPinItem = names.forEach(function (e) {


        pin.addEventListener('keyup', function (event) {
            if (event.key === 'Enter') {
                const li = document.createElement('li')
                conatiner.appendChild(li)
                const showPin = e.target.value
                li.appendChild(showPin)
            }
        })

        pesel.addEventListener('keyup', function (event) {
            if (event.key === 'Enter') {
                const li = document.createElement('li')
                conatiner.appendChild(li)
                const showPesel = e.target.value
                li.appendChild(showPesel)
            }
        })

        if (pin && pesel) {
            showText(setLiFunc(conatiner), showPin)
        }


        appendArray(listPinItem, conatiner)
        return conatiner
    })
    //console.log(listPinItem)

    // const listNameItems = names.forEach(function (e) {


    //     e.addEventListener('keyup', function (e) {
    //         if (e.key === "Enter") {
    //             const show = e.target.value
    //             showText(setLiFunc(listContainer2), show)

    //         }
    //     })

    // })

    appendArray(listNameItems, listContainer2)
    return listContainer2
}


// inputs.forEach(function(el){



//     el.addEventListener('keyup', function(e){
// console.log(e)
//         // e.key === "Enter"
//     //const code = e.keyCode ? e.keyCode : e.which;
//     if (e.key === "Enter") {
//         const show = e.target.value
//         showText(setLiFunc(textarea), show)
//     } else if(e.detail === 0){
//         console.log('ol')
//     }
// }
// )})









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




pin.addEventListener('keyup', insertNumbers);

function insertNumbers(e) {
    const val = e.target.value
    const len = val.length;

    const inputControl = e.target.parentElement.parentElement
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
    //if (typeof val === Number) {
        //setSuccess(pin)

        
    }





const validateInputs = () => {
    const userNameValue = username.value.trim()
    const emailValue = email.value.trim()
    const pinValue = pin.value.trim()
    const peselValue = pesel.value.trim()
    const paperPrescriptionValue = paperPrescription.value.trim()
    const drugNameValue = drugName.value.trim()
    const drugDoseValue = drugDose.value.trim()
    const amountDrugsValue = amountDrugs.value.trim()


    if (userNameValue === '') {
        setError(username, 'username is required')
    } else {
        setSuccess(username)
    }

    if (emailValue === '') {
        setError(email, 'Email is required')
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address')
    } else {
        setSuccess(email)
    }

    //if (pinValue === '') {
        //return

    //} else 
    // if (pinValue.length !== 4) {
    //     setError(pin, 'Kod PIN jest 4-cyfowy')

    // } else {setSuccess(pin)
    // //if (typeof pinValue === String) {
    //     //setSuccess(pin)
    // }
    



    // const inputEl = document.querySelector('input');
    // inputEl.addEventListener('keyup', insertNumbers);
    // function insertNumbers(e) {
    //     const val = e.target.value
    //     const len = val.length;
    //     if (isNaN(val)) {
    //         e.target.value = val.slice(0, len - 1);
    //     }
    // }

}

// pin.addEventListener('enter', validate)



// function validate(e) {
//     const val = e.target.value
//     const inputControl = e.target.parentElement.parentElement
//     const errorDisplay = inputControl.querySelector('.label__error')

    

//     function hideText() {

//         errorDisplay.innerText = ''
//     }

//     if (val) {
//         hideText(errorDisplay, '')
//     } else if (val.length !== 4) {
//         setError(pin, 'Kod PIN jest 4-cyfowy')

//     } else {setSuccess(pin)
//     //if (typeof val === Number) {
//         //setSuccess(pin)
//     }

    

// }

const validateButtons = ( e, rootContainer) => {

    const pinValue = pin.value.trim()
    const peselValue = pesel.value.trim()


    if (pinValue.length !== 4) {
        setError(pin, 'Kod PIN jest 4-cyfowy')

    } else {
        setSuccess(pin)
        // pin.addEventListener('keyup', function (eu) {
        //     console.log('pun')
        //     if (eu.key === "Enter") {
     
                 //rootContainer.innerText = ''
     
                 const inputValueContainer = document.createElement('div')
                 inputValueContainer.classList.add('flex2')
                 const inputValueContainerNode = textareaPinElectronicPrescription.appendChild(inputValueContainer)
                 const show = pin.value
                // console.log('button')
            
            showText(inputValueContainerNode, show)
             
            
     
          
             }
         }
     
    
    

    if (peselValue.length !== 11) {
        setError(pesel, 'Kod PESEL jest 11-cyfowy')

    } else {setSuccess(pesel)
    //if (typeof pinValue === String) {
        //setSuccess(pin)
    } 

    //console.log(pinValue.taget.classList)

    // e.addEventListener('keyup', function (eu) {
    //    if (eu.key === "Enter") {

    //         //rootContainer.innerText = ''

    //         const inputValueContainer = document.createElement('div')
    //         inputValueContainer.classList.add('flex2')
    //         const inputValueContainerNode = rootContainer.appendChild(inputValueContainer)
    //         const show = eu.target.value
    //        // console.log('button')
       
    //    showText(inputValueContainerNode, show)
        
       

     
    //     }
    // })

    // console.log(e)
    // const listContainer2 = document.createElement('ul')
    // rootContainer.appendChild(listContainer2)
    
    //     const li = document.createElement('li')
    //             listContainer2.appendChild(li)
    //             const showPin = e.value
    //             li.appendChild(showPin)
    //             showText(li.appendChild(showPin), showPin)





function showDrugs(e, rootContainer) {

    const drugNameofPatient = document.querySelector('#paperPrescription')
    const inputControl = e.target.parentElement.parentElement
    const errorDisplay = inputControl.querySelector('.label__error.paperPrescription')
    const tekst = drugNameofPatient.value

    const ul = document.createElement('ul')
    errorDisplay.appendChild(ul)



    const li = document.createElement('li')
    li.classList.add('liclass')

    showText(setLiFunc(ul), tekst)

}

const renderData = function (rootContainer) {

    rootContainer.innerHTML = ''
    const usernameData = dataList(username, textareaData)

    rootContainer.appendChild(usernameData)
}


const render = function () {

    const usernameElement = showInputValue(username, textareaUserName)
    const emailElement = showInputValue(email, textareaEmail)
    //const pinElement = showInputValue(pin, textareaPin)
    //const peselElement = showInputValue(pesel, textareaPesel)
    //const pinElements = validateButtons(pin, textareaPinElectronicPrescription)
    //const peselElements = validateButtons(pesel, textareaPeselElectronicPrescription)
   

    textareaUserName.appendChild(usernameElement)
    textareaEmail.appendChild(emailElement)
    textareaPinPesel.appendChild(pinElement)
    textareaPesel.appendChild(peselElement)
    //textareaPinElectronicPrescription.appendChild(pinElements)
    //textareaPeselElectronicPrescription.appendChild(peselElements)

}

//renderData(textareaData)
render()



