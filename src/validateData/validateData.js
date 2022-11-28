import { setSuccess } from "../index.js"
import {setError} from "../index.js"
import { email } from "../variables/variables.js"
// import {form} from "../variables/variables"
// const ulList = document.querySelector('ul');
// console.log(username)

//const username = document.getElementById('username')
//const email = document.getElementById('email')
//const username = document.querySelector('.username')
export const fields = [
   {
       name: 'username',
       label: 'Imię i nazwisko',
       required: true,
       pattern: '^[a-zA-Z –-]+$',
   },
   {
       name: 'email',
       label: 'Email',
       required: true,
       pattern: '/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/',
   },
]
console.log(fields)



export function checkUserName(input) {
    input.addEventListener('keyup', function (event) {
    if (event.key === "Enter") {
        const userNameValue = event.target.value
        console.log(userNameValue)
        let result = event.target.value 
        input.blur()
        check(input, result)
}})};
    
 export function check(input,result){
    //const userNameValue = result.value.trim()
    //let len = userNameValue.length;
    //console.log(len)
    if (!(result === '')) {
        setSuccess(input)
        
    } 
    
    if (result === ''){
        
        setError(input, 'Wypełnij powyższe pole')
        const parent = input.parentElement
        const parentDiv = parent.querySelector('div')
        parentDiv.innerHTML = ''
    
    } 
}

checkUserName(username)
checkUserName(email)


// fields.forEach(function(e){
//     e.addEventListener('keyup', checkSubmit(e))
// })
    

// function checkSubmit(e) {
//    alert('ok')
//    e.preventDefault();
   
//    const errors = [];
//         fields.forEach(function (field) {
//             const {name, label, required = false, type = 'text', pattern = null} = field;

//             const value = form.elements[name].value;

//             if (required) {
//                 if (value.length === 0) {
//                     errors.push('Dane w polu ' + label + ' są wymagane.');
//                 }
//             }

//             if (type === 'number') {
//                 if (Number.isNaN(Number(value))) {
//                     errors.push(
//                         'Dane w polu ' + label + ' muszą być liczbą.'
//                     );
//                 }
//             }

//             if (pattern) {
//                 const reg = new RegExp(pattern);
//                 if (!reg.test(value)) {
//                     errors.push(
//                         'Dane w polu ' +
//                             label +
//                             ' zawierają niedozwolone znaki lub nie są zgodne z przyjętym w Polsce wzorem.'
//                     );
//                 }
//             }
//         });

//         uList.innerHTML = '';
//         if (errors.length === 0) {
//             alert('Dane zostały wypełnione prawidłowo!');
//             fields.forEach(function (el) {
//                 form[el.name].value = '';
//             });
//         } else {
//             errors.forEach(function (text) {
//                 const liEl = document.createElement('li');
//                 liEl.innerText = text;
//                 uList.appendChild(liEl);
//             });
//         }
//     }




// export const validateData = (el) => {
   

//    el.addEventListener('keyup', insertNumbers)
  

//    function insertNumbers(e) {
//   let val = e.target.value
    
//     //alert(e.target.value)
       
      
//        //console.log(val)
//        let len = val.length;
//        const inputControl = document.querySelector('.label')
//        const errorDisplay = inputControl.querySelector('.label__error')
   
//     //    function showText() {
//     //        errorDisplay.innerText = 'Podaj liczbę'
//     //    }
   
//     //    function hideText() {
//     //        errorDisplay.innerText = ''
//     //    }
   
//     //    if (val > 5) {
//     //        e.target.value = val.slice(0, len - 1);
//     //        showText(errorDisplay, 'Podaj liczbę')
   
//     //    } else if (val) {
//     //        hideText(errorDisplay, '')
   
//     //    } else if (val.length !== 4) {
//     //        setError(pin, 'Kod PIN jest 4-cyfowy')
   
//     //    } else setSuccess(pin)
       
//      if(len > 5){
       
//       e.target.value = val.slice(0, len - 1)
//       } else if (len === 4){
//         const inputControl = e.target.parentElement.parentElement
//         const errorDisplay = inputControl.querySelector('.label__error')
//         errorDisplay.innerText = 'Kod jest 4 -cyfrowy'
//     }    

//    }

// }

// validateData()









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

