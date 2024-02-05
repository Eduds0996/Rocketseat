// arrow function

const sayMyName = () => {
    console.log('edu')
}

// callback function

function sayMyNome(name){
    console.log('antes de executar uma callback')

    name()

    console.log('depois de executar um callback')
}

sayMyNome(
    () => {
        console.log('estou em uma callback')
    }
)