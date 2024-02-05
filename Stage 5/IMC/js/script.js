import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
import { IMC , notNumber } from "./utils.js"

// Variables

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()

// inputWeight.oninput = () => {
    
//     if (notNumber(weight)) {
//         AlertError.open()
//     }
//     else {
//         AlertError.close()
//     }
// }

form.onsubmit = function (event) {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height)
    
    if (weightOrHeightIsNotANumber) {
        AlertError.open()
        return;
    }

    AlertError.close()

    const result = IMC(weight, height)
    displayResultMessage(result)

    console.log(result)
}

function displayResultMessage(result) {
    const message = `Seu IMC é de  ${result}`

    Modal.message.innerText = message
    // modalWrapper.classList.add('open')
    Modal.open()
}



// const modalWrapper = document.querySelector('.modal-wrapper')
// const modalMessage = document.querySelector('.modal .title span')
// const modalBtnClose = document.querySelector('.modal button.close')


// const Modal = {
//     open: function() {},
//     close: function() {}
// }


// modalBtnClose.onclick = () => modalWrapper.classList.remove('open')


// form.onsubmit = () => {}

// form.onsubmit = handleSubmit

// function handleSubmit() {

// }