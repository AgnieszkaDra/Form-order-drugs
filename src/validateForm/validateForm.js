/**
 * form validate
 */

import { setError } from "../functions/functions.js"
import { setSuccess } from "../functions/functions.js"

const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')

form.addEventListener('submit', e => {
    e.preventDefault()
    validateInputs()
})

const validateInputs = () => {

    const userNameValue = username.value.trim()
    const emailValue = email.value.trim()
    
    function checkData() {
        if (!(userNameValue === '') && !(emailValue === "")) {
            setSuccess(username)
            setSuccess(email)
        } 

        if (userNameValue === '') {
            setError(username, 'Wypełnij powyższe pole')
        } 

        if (emailValue === '') {
            setError(email, 'Wypelnij powyższe pole')
        }
        
    }

    checkData()

}

const showInputValue = function (el, rootContainer) {

    el.addEventListener('keyup', function (event) {
        if (event.key === "Enter") {

            rootContainer.innerText = ''

            const inputValueContainer = document.createElement('div')
            const inputValueContainerNode = rootContainer.appendChild(inputValueContainer)
            const show = event.target.value


            showInput(inputValueContainerNode, show)

        }
    })
}



// const isValidEmail = email => {
//     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }