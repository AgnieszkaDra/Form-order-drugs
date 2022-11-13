/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pin": () => (/* binding */ pin),
/* harmony export */   "setError": () => (/* binding */ setError),
/* harmony export */   "setSuccess": () => (/* binding */ setSuccess)
/* harmony export */ });
/* harmony import */ var _validateForm_validateForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);




console.log('dta')
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
    const inputControl = document.querySelector('.label')
    const errorDisplay = inputControl.querySelector('.label__error')

    function showText() {
        errorDisplay.innerText = 'Podaj liczbę'
    }

    function hideText() {
        errorDisplay.innerText = ''
    }

    if (isNaN(val)) {
        e.target.value = val.slice(0, len - 1);
        showText(errorDisplay, 'Podaj liczbę')

    } else if (val) {
        hideText(errorDisplay, '')

    } else if (val.length !== 4) {
        setError(pin, 'Kod PIN jest 4-cyfowy')

    } else setSuccess(pin)
    
}

























const render = function () {

    const usernameElement = showInputValue(username, textareaUserName)
    const emailElement = showInputValue(email, textareaEmail)
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
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/**
 * form validate
 */




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
    const pinValue = _index__WEBPACK_IMPORTED_MODULE_0__.pin.value.trim()
    const peselValue = pesel.value.trim()
    const paperPrescriptionValue = paperPrescription.value.trim()
    const drugNameValue = drugName.value.trim()
    const drugDoseValue = drugDose.value.trim()
    const amountDrugsValue = amountDrugs.value.trim()

    const check1 = function checkUserName(){
        if (userNameValue === '') {
        (0,_index__WEBPACK_IMPORTED_MODULE_0__.setError)(username, 'Wypełnij powyższe pole')
        
    } else return username
     
    }

    check1()

    const check2 = function checkEmail() {
        if (emailValue === '') {
            (0,_index__WEBPACK_IMPORTED_MODULE_0__.setError)(email, 'Wypełnij powyższe pole')
            
        } else return email
    }
    check2()

   function checkData(){
    if(!(userNameValue === '') && !(emailValue === "")){
        alert('njfksj')
        ;(0,_index__WEBPACK_IMPORTED_MODULE_0__.setSuccess)(username)
        ;(0,_index__WEBPACK_IMPORTED_MODULE_0__.setSuccess)(email)
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	
/******/ })()
;