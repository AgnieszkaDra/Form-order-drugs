/**
 * form validate
 */

import { pin } from '../index'
import { setSuccess } from '../index'
import { setError } from '../index'
//const pin = document.getElementById('PIN')
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
    const pinValue = pin.value.trim()
    const peselValue = pesel.value.trim()
    const paperPrescriptionValue = paperPrescription.value.trim()
    const drugNameValue = drugName.value.trim()
    const drugDoseValue = drugDose.value.trim()
    const amountDrugsValue = amountDrugs.value.trim()

    function checkUserName() {
        if (userNameValue === '') {
            setError(username, 'Wypełnij powyższe pole')

        } else return username

    }

    checkUserName()

    function checkEmail() {
        if (emailValue === '') {
            setError(email, 'Wypełnij powyższe pole')

        } else return email
    }
    checkEmail()

    function checkData() {
        if (!(userNameValue === '') && !(emailValue === "")) {

            setSuccess(username)
            setSuccess(email)
        }


    }

    checkData()




    //  if (!isValidEmail(emailValue)) {
    //     setError(email, 'Provide a valid email address')
    // } else {
    //     setSuccess(email)
    // }

}


const isValidEmail = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}