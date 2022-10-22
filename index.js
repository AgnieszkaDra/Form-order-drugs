



let mainContainer = null

const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const pin = document.getElementById('PIN')
const pesel = document.getElementById('pesel')
const paperPrescription = document.getElementById('paperPrescription')
const drugName = document.getElementById('drugName')
drugName.detail = 1
console.log(drugName)
const drugDose = document.getElementById('drugDose')
const amountDrugs = document.getElementById('amountDrugs')
const textarea = document.querySelector('.orderDrugsForm.textarea')

const inputs = [username,email, pin, pesel, paperPrescription, drugName, drugDose, amountDrugs, textarea]

const buttonPaperPrescription = document.querySelector('.button__paperPrescription')

const divError = document.querySelector('.label__error')
const ul = document.querySelectorAll('ul')

console.log(form, username, email, pin, pesel, paperPrescription, drugName, drugDose, amountDrugs)

form.addEventListener('submit', e => {
  e.preventDefault()
   validateInputs()
})

buttonPaperPrescription.addEventListener('click', e => {
    e.preventDefault()
    validateButtons()
})


const showText = (element, text) =>  {
    element.innerText = text
}

const setLiFunc = function(e) {
    const li = document.createElement('li')
    const button = document.createElement('button')
    button.innerText = 'usuń'
    li.classList.add('liclass')
    e.appendChild(li)
    e.appendChild(button)
    return li
}

const appendArray = function (array, container) {
    array.forEach(function (element, index, array) {
        container.appendChild(element) // dla każdego elementu tablicy chcemy dodać go do kontenera
    })
}

const renderList = function (names) {

    

    const listNameItems = names.forEach(function (e) {

        e.addEventListener('keyup', function (e) {
           
            if (e.key === "Enter") { 
                const listContainer = document.createElement('ul')
    listContainer.classList.add("label__input2")
    textarea.appendChild(listContainer)
                const show = e.target.value
                showText(setLiFunc(listContainer), show)
            }
        })

    })

    appendArray(listNameItems, listContainer)

    return listContainer

}



const renderListPin = function (names) {


    const listContainer2 = document.createElement('ul')
    textarea.appendChild(listContainer2)

    const listNameItems = names.forEach(function (e) {


        e.addEventListener('keyup', function (e) {
            if (e.key === "Enter") {
                const show = e.target.value
                showText(setLiFunc(listContainer2), show)

            }
        })

    })

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

            errorDisplay.innerText =''
        }
  
        if(isNaN(val)) {

            e.target.value = val.slice(0, len-1);
            showText(errorDisplay, 'Podaj liczbę')
           
        } else if(val) {
            hideText(errorDisplay, '')
        } else if(val.length !== 4) {
            setError(pin, 'Kod PIN jest 4-cyfowy')
            
        }  else if(typeof val === String){
            setSuccess(pin)
    }
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
    } else if(!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address')
    } else {
        setSuccess(email)
    }

    if (pinValue === '') {
        return

    } else if(pinValue.length !== 4) {
        setError(pin, 'Kod PIN jest 4-cyfowy')
        
    }  else if(typeof pinValue === String){
        setSuccess(pin)

    } 

    

    const inputEl = document.querySelector('input');
    inputEl.addEventListener('keyup', insertNumbers);
    function insertNumbers(e) {
        const val = e.target.value
        const len = val.length;
        if(isNaN(val)) {
            e.target.value = val.slice(0, len-1);
        }}

}

const validateButtons = () => {
    buttonPaperPrescription.addEventListener('click', showDrugs)
}

function showDrugs(e) {
    
    const drugNameofPatient = document.querySelector('#paperPrescription')
    const inputControl = e.target.parentElement.parentElement
    const errorDisplay = inputControl.querySelector('.label__error.paperPrescription')
    const tekst  = drugNameofPatient.value

    const ul = document.createElement('ul')
    errorDisplay.appendChild(ul)
    

    
    const li = document.createElement('li')
    li.classList.add('liclass')
    
    showText(setLiFunc(ul), tekst)

   }



const render = function (rootContainer) {

    rootContainer.innerHTML = ''
    const listElement = renderList(inputs)
    const listPin = renderListPin(pinList)

    rootContainer.appendChild(listElement)
    rootContainer.appendChild(listPin)



}

render(textarea)



