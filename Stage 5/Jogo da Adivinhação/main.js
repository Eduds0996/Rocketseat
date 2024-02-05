const screen1 = document.querySelector(".screen1 ")
const screen2 = document.querySelector(".screen2 ")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

let randomNumber = Math.round(Math.random() * 10)

const h2 = document.querySelector('h2')

let xAttempts = 1

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(e) {
    if(e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }
})

// Função Callback
function handleTryClick(event) {
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")
    
    console.log(randomNumber)

    if (Number(inputNumber.value) == randomNumber) {
        togleScreeen()
        screen2.querySelector("h2").innerHTML = `Acertou em ${xAttempts} vezes`
        console.log(xAttempts)
        console.log(event)
    }

    inputNumber.value = ''

    xAttempts++
} 

function handleResetClick() {
    togleScreeen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
}


function togleScreeen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}


// if (Number(inputNumber.value) == randomNumber) {
//     // screen1.classList.add("hide")
//     // screen2.classList.remove("hide")
//     togleScreeen()
//     screen2.querySelector("h2").innerHTML = `Acertou em ${xAttempts} vezes`
//     console.log(xAttempts)
// }



// btnReset.addEventListener('click', function(){
//     screen1.classList.remove("hide")
//     screen2.classList.add("hide")
//     xAttempts = 1
// })

// toggle inverte o que ja tem