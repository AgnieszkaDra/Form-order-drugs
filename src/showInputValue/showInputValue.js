export const username = document.getElementById('username')
const userNameValue = username.value.trim()
export const email = document.getElementById('email')
const emailValue = email.value.trim()

export const usernameButton = document.querySelector('.addUserName.button')
export const useremailButton = document.querySelector('.addEmail.button')
export const textareaUserName = document.querySelector('.textarea.data')
export const textareaEmail = document.querySelector('.textarea.email')

export const buttonUser = function(elementClick,input, container){

    elementClick.addEventListener('click', function() {
    const value = input.value.trim()
    const inputValueContainer = document.createElement('div')
    const inputValueContainerNode = container.appendChild(inputValueContainer)
    inputValueContainer.classList.add('inputValueContainer')
    const inputContainer = document.createElement('div')
    inputValueContainerNode.appendChild(inputContainer)
    inputContainer.innerText = value
    const button = document.createElement('button')
    button.innerText = 'X'
    inputValueContainerNode.appendChild(button)
    
    button.addEventListener('click', function (el) {
        el.target.closest('.inputValueContainer').remove()
    })
            
})}

 buttonUser(useremailButton, email, textareaEmail)
 buttonUser(usernameButton, username, textareaUserName)



