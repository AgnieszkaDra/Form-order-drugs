

export const setError = (element, message) => {
   
    const inputControl = element.parentElement.parentElement
    const errorDisplay = inputControl.querySelector('.label__error')
    errorDisplay.innerText = message
    inputControl.classList.add('error')
    inputControl.classList.remove('success')
}

export const setSuccess = element => {

    const inputControl = element.parentElement.parentElement
    const errorDisplay = inputControl.querySelector('.label__error')
    errorDisplay.innerText = ''
    inputControl.classList.add('success')
    inputControl.classList.remove('error')
}