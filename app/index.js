

const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const pin = document.getElementById('PIN')
const pesel = document.getElementById('pesel')
const paperPrescription = document.getElementById('paperPrescription')
const drugName = document.getElementById('drugName')
const drugDose = document.getElementById('drugDose')
const amountDrugs = document.getElementById('amountDrugs')

const divError = document.querySelector('.label__error')

console.log(form, username, email, pin, pesel, paperPrescription, drugName, drugDose, amountDrugs)

form.addEventListener('submit', e => {
    e.preventDefault()
    validateInputs()
})

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
            showText()
           
        } else if(val) {
            hideText()
        }}


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

