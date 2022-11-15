import { username} from "../variables/variables"
import {setError} from "../functions/functions"

//const username = document.getElementById('username')
//const email = document.getElementById('email')
//const username = document.querySelector('.username')



export const validateData = (el) => {
   

   el.addEventListener('keyup', insertNumbers)
  

   function insertNumbers(e) {
  let val = e.target.value
    
    //alert(e.target.value)
       
      
       //console.log(val)
       let len = val.length;
       const inputControl = document.querySelector('.label')
       const errorDisplay = inputControl.querySelector('.label__error')
   
    //    function showText() {
    //        errorDisplay.innerText = 'Podaj liczbę'
    //    }
   
    //    function hideText() {
    //        errorDisplay.innerText = ''
    //    }
   
    //    if (val > 5) {
    //        e.target.value = val.slice(0, len - 1);
    //        showText(errorDisplay, 'Podaj liczbę')
   
    //    } else if (val) {
    //        hideText(errorDisplay, '')
   
    //    } else if (val.length !== 4) {
    //        setError(pin, 'Kod PIN jest 4-cyfowy')
   
    //    } else setSuccess(pin)
       
     if(len > 5){
       
      e.target.value = val.slice(0, len - 1)
      } else if (len === 4){
        const inputControl = e.target.parentElement.parentElement
        const errorDisplay = inputControl.querySelector('.label__error')
        errorDisplay.innerText = 'Kod jest 4 -cyfrowy'
    }    

   }

}

validateData(username)









// const addUserName = document.querySelector('.addUserName')
// const addEmail = document.querySelector('.addEmail')

// add.addEventListener('click', function(e){
    
//     e.preventDefault()
//     alert(userNameValue)
// })

// function checkData(el, button) {
//     button.addEventListener('click', function(e){
//         const value1 = el.value.trim()
//         e.preventDefault()
//         alert(value1)
//     })
// }

// checkData(username, addUserName)
// checkData(email, addEmail )


// function checkData(el, value) {
// const val = value
//     el.addEventListener('click', function(e){
// e.preventDefault()
// console.log(userNameValue)

//     })
//     if (!(userNameValue === '') && !(emailValue === "")) {
//         setSuccess(username)
//         setSuccess(email)
//     } 

//     if (userNameValue === '') {
//         setError(username, 'Wypełnij powyższe pole')
//     } 

//     if (emailValue === '') {
//         setError(email, 'Wypelnij powyższe pole')
//     }
    
// }

// checkData(add, userNameValue)



//export const pin = document.getElementById('PIN');




  

// pin.addEventListener('keyup', insertNumbers);

// function insertNumbers(e) {
//     alert('okmm')
//     const val = e.target.value
//     const len = val.length;
//     const inputControl = document.querySelector('.label')
//     const errorDisplay = inputControl.querySelector('.label__error')

//     function showText() {
//         errorDisplay.innerText = 'Podaj liczbę'
//     }

//     function hideText() {
//         errorDisplay.innerText = ''
//     }

//     if (isNaN(val)) {
//         e.target.value = val.slice(0, len - 1);
//         showText(errorDisplay, 'Podaj liczbę')

//     } else if (val) {
//         hideText(errorDisplay, '')

//     } else if (val.length !== 4) {
//         setError(pin, 'Kod PIN jest 4-cyfowy')

//     } else setSuccess(pin)
    
// }

