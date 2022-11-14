/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _showInputValue_showInputValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

const username = document.getElementById('username')
const email = document.getElementById('email')
alert('nnmm')
const textareaUserName = document.querySelector('.textarea.data')
const textareaEmail = document.querySelector('.textarea.email')

const render = function () {

    const usernameElement = (0,_showInputValue_showInputValue__WEBPACK_IMPORTED_MODULE_0__.showInputValue)(username, textareaUserName)
    const emailElement = (0,_showInputValue_showInputValue__WEBPACK_IMPORTED_MODULE_0__.showInputValue)(email, textareaEmail)
    //const pinElement = showText7(textareaPinPesel, flex)
    //const peselElement = showInputValue(pesel, textareaPesel)
    //const pinElements = validateButtons(pin, textareaPinElectronicPrescription)
    //const peselElements = validateButtons(pesel, textareaPeselElectronicPrescription)


    textareaUserName.appendChild(usernameElement)
    textareaEmail.appendChild(emailElement)
    //textareaPinPesel.appendChild(pinElement)
    //textareaPesel.appendChild(peselElement)
    //textareaPinElectronicPrescription.appendChild(pinElements)
    //textareaPeselElectronicPrescription.appendChild(peselElements)

}

//renderData(textareaData)
render()

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showInputValue": () => (/* binding */ showInputValue)
/* harmony export */ });
console.log('input value')


const showInput = function (element, text) {
    element.innerText = text
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


// const render = function () {

//     const usernameElement = showInputValue(username, textareaUserName)
//     const emailElement = showInputValue(email, textareaEmail)
//     //const pinElement = showText7(textareaPinPesel, flex)
//     //const peselElement = showInputValue(pesel, textareaPesel)
//     //const pinElements = validateButtons(pin, textareaPinElectronicPrescription)
//     //const peselElements = validateButtons(pesel, textareaPeselElectronicPrescription)


//     textareaUserName.appendChild(usernameElement)
//     textareaEmail.appendChild(emailElement)
//     //textareaPinPesel.appendChild(pinElement)
//     //textareaPesel.appendChild(peselElement)
//     //textareaPinElectronicPrescription.appendChild(pinElements)
//     //textareaPeselElectronicPrescription.appendChild(peselElements)

// }

// //renderData(textareaData)
// render()

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/**
 * form validate
 */




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
            (0,_functions_functions_js__WEBPACK_IMPORTED_MODULE_0__.setSuccess)(username)
            ;(0,_functions_functions_js__WEBPACK_IMPORTED_MODULE_0__.setSuccess)(email)
        } 

        if (userNameValue === '') {
            (0,_functions_functions_js__WEBPACK_IMPORTED_MODULE_0__.setError)(username, 'Wypełnij powyższe pole')
        } 

        if (emailValue === '') {
            (0,_functions_functions_js__WEBPACK_IMPORTED_MODULE_0__.setError)(email, 'Wypelnij powyższe pole')
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

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setError": () => (/* binding */ setError),
/* harmony export */   "setSuccess": () => (/* binding */ setSuccess)
/* harmony export */ });


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

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/**
 * buttonElectronicPrescription
 */
 
 


 const pin = document.getElementById('PIN')
 const pesel = document.getElementById('pesel')
 const textareaPinPesel = document.querySelector('.textarea.pinpesel')
 const buttonElectronicPrescription = document.querySelector('.button__electronicPrescription')

buttonElectronicPrescription.addEventListener('click', e => {
    
    e.preventDefault()
    validateButtons()
}
)

const validateButtons = () => {

    const pinValue = pin.value.trim()
    const peselValue = pesel.value.trim()

    function checkData() {
         if (pinValue.length !== 4) {
        (0,_functions_functions_js__WEBPACK_IMPORTED_MODULE_0__.setError)(pin, 'Kod PIN jest 4-cyfowy')
    } else {
        (0,_functions_functions_js__WEBPACK_IMPORTED_MODULE_0__.setSuccess)(pin)
    }

    if (peselValue.length !== 11) {
        (0,_functions_functions_js__WEBPACK_IMPORTED_MODULE_0__.setError)(pesel, 'Kod PESEL jest 11-cyfowy')
    } else {
        (0,_functions_functions_js__WEBPACK_IMPORTED_MODULE_0__.setSuccess)(pesel)
    }

    if (pin.closest('.label').classList.contains('success') && pesel.closest('.label').classList.contains('success')) {
        const showpin = pin.value
        const showpesel = pesel.value
        showText2(textareaPinPesel, showpin, showpesel)
    }
    }

    checkData()

   
}

const showText2 = function (container, text, pesel) {

    const pinPeselContainer = document.createElement('div')
    pinPeselContainer.classList.add('pinPeselCont')
    container.appendChild(pinPeselContainer)

    const pinContainer = document.createElement('div')
    pinContainer.classList.add('pinCont')
    pinPeselContainer.appendChild(pinContainer)
    pinContainer.innerText = text

    const peselContainer = document.createElement('div')
    peselContainer.classList.add('peselCont')
    pinPeselContainer.appendChild(peselContainer)
    peselContainer.innerText = pesel

    if (pesel) {

        const button = document.createElement('button')
        button.innerText = 'X'
        peselContainer.appendChild(button)
        button.classList.add('flexButton')

        button.addEventListener('click', function (el) {
            el.target.closest('.pinPeselCont').remove()
        })
    }

}




/***/ }),
/* 6 */
/***/ (() => {

//import '../functions/functions'


//export const pin = document.getElementById('PIN');




    alert('jjjj');

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



/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pin": () => (/* binding */ pin)
/* harmony export */ });
/* harmony import */ var _render_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _validateForm_validateForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _buttonElectronicPrescription_buttonElectronicPrescription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _showInputValue_showInputValue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _validateData_validateData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _validateData_validateData__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_validateData_validateData__WEBPACK_IMPORTED_MODULE_4__);








/**
 * data
 */
const pin = document.getElementById('PIN');


const pesel = document.getElementById('pesel')
const paperPrescription = document.getElementById('paperPrescription')
const drugName = document.getElementById('drugName')
const drugDose = document.getElementById('drugDose')
const amountDrugs = document.getElementById('amountDrugs')
const textareaDrugs = document.querySelector('.orderDrugsForm.textarea')
const textareaUserName = document.querySelector('.textarea.data')
const textareaEmail = document.querySelector('.textarea.email')
const textareaPinPesel = document.querySelector('.textarea.pinpesel')
const textareaPin = document.querySelector('.textarea.pin')
const textareaPesel = document.querySelector('textarea.pesel')
const textareaPinElectronicPrescription = document.querySelector('.textarea.electronicPinPrescription')
const textareaPeselElectronicPrescription = document.querySelector('.textarea.electronicPeselPrescription')
const textareaButtonPeselElectronicPrescription = document.querySelector('.textarea.electronicPeselPrescription.button')
const flex = document.querySelector('.flex')

const buttonElectronicPrescription = document.querySelector('.button__electronicPrescription')
const divError = document.querySelector('.label__error')






const username = document.getElementById('username')

const email = document.getElementById('email')


const isValidEmail = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// pin.addEventListener('keyup', insertNumbers);

// function insertNumbers(e) {
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

























// const render = function () {

//     const usernameElement = showInputValue(username, textareaUserName)
//     const emailElement = showInputValue(email, textareaEmail)
//     //const pinElement = showText7(textareaPinPesel, flex)
//     //const peselElement = showInputValue(pesel, textareaPesel)
//     //const pinElements = validateButtons(pin, textareaPinElectronicPrescription)
//     //const peselElements = validateButtons(pesel, textareaPeselElectronicPrescription)


//     textareaUserName.appendChild(usernameElement)
//     textareaEmail.appendChild(emailElement)
//     //textareaPinPesel.appendChild(pinElement)
//     //textareaPesel.appendChild(peselElement)
//     //textareaPinElectronicPrescription.appendChild(pinElements)
//     //textareaPeselElectronicPrescription.appendChild(peselElements)

// }

// //renderData(textareaData)
// render()
})();

/******/ })()
;