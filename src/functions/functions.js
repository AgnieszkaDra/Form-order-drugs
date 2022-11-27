

export const setError = (element, message) => {
    const inputControl = element.parentElement.parentElement
    console.log(inputControl)
    const errorDisplay = inputControl.querySelector('.label__error')
    console.log(errorDisplay)
    inputControl.classList.add('error')
    inputControl.classList.remove('success')
    errorDisplay.innerText = message
    
}



export const setSuccess = element => {

    element.style.border = 'none'
    const inputControl = element.parentElement.parentElement
    console.log(inputControl.classList)
   
    
    
    const span = element.nextElementSibling
    span.removeAttribute('class')
    span.classList.remove('.span')
    const errorDisplay = inputControl.querySelector('.label__error')
    errorDisplay.innerText = ''
    span.classList.add('success')
    element.classList.add('success')
    span.classList.remove('error')
    element.classList.remove('error')

   
    
}
