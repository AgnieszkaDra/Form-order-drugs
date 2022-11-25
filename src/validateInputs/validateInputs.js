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

        inputs.forEach(function(input){
            console.log(input.value)
            if(input.hasAttribute("required") && (input.value === '')){
          setError(input,'Wypełnij powyższe pole')
        }
        })

        
        if (!(userNameValue === '')) {
            setSuccess(username)
            
        } else if (userNameValue === ''){
            const parent = username.parentElement
            const parentDiv = parent.querySelector('div')
            parentDiv.innerHTML = ''
        }
        // if (userNameValue === '') {
        //     setError(username, 'Wypełnij powyższe pole')
        // } 

        if (emailValue === '') {
            setError(email, 'Wypelnij powyższe pole')
        }
        
    }

    checkData()

}