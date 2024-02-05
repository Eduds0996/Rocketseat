// Aula 1

// let nome = prompt("Qual o seu nome")

// alert(`Olá, ${nome}`)


// // // Aula 2 -------------------------------

// let numberOne = prompt("Digite o numero 1:")
// let numberTwo = prompt("Digite o numero 2:")

// alert(`O Resultado final é:${Number(numberOne) + Number(numberTwo)}`)


// Aula 3 --------------------------------------------------


// let numberOne = Number(prompt("Digite o numero 1:"))
// let numberTwo = Number(prompt("Digite o numero 2:"))


// let numero  = Math.round(Math.random() * 10)


let result = prompt("Advinhe o número que estou pensando? Está entre 0 e 10")
const randomNumber = Math.round(Math.random() * 10)

let xAttempts = 1

while(Number(result) != randomNumber) {
  result = prompt("Erro, tente novamente:")
  xAttempts++
}

alert(`Parabéns! O número que eu pensei foi ${randomNumber} e você advinhou o número em ${xAttempts} tentativas`)