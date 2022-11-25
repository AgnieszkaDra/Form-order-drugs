import { setError } from "../functions/functions.js"
import { setSuccess } from "../functions/functions.js"

const inputs = document.querySelectorAll('input')

export const validateInputs = () => {

    const required = document.querySelector('[required]')
    console.log(required)
    const userNameValue = username.value.trim()
    console.log(userNameValue)
    const emailValue = email.value.trim()
    
    function checkData() {

        // inputs.forEach(function(input){
        //     console.log(input.value)
        //     if(input.hasAttribute("required") && (input.value === '')){
        //   setError(input,'Wypełnij powyższe pole')
        // }
        // })
        if ( emailValue && !(emailValue === '')) {
            setSuccess(email)
            
        } else if (emailValue === ''){
            
            email.style.border = '2px solid black'
            const parent = email.parentElement
            const parentDiv = parent.querySelector('div')
            parentDiv.innerHTML = ''
            setError(emailValue)
        
        } else if(emailValue === '') {
            return
        }
        
        if (userNameValue && !(userNameValue === '')) {
            setSuccess(username)
            
        } else if (userNameValue === ''){
            username.classList.remove('success')
            username.style.border = '2px solid black'
            const parent = username.parentElement
            const parentDiv = parent.querySelector('div')
            parentDiv.innerHTML = ''
        
        } else if ( userNameValue === ''){
            return
        }
        // if (userNameValue === '') {
        //     setError(username, 'Wypełnij powyższe pole')
        // } 

        // if (emailValue === '') {
        //     setError(email, 'Wypelnij powyższe pole')
        // }
        
    }

    checkData()

}