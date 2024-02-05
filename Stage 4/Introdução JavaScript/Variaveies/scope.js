
// Var é uma variavel global que existe em varios scopos
console.log('> existe x antes do bloco?' , x)

{
    var x = 0
}

console.log('> existe x depois do bloco?' , x)


// o let é uma variavel local que só existe no mesmo scopo
// porem ela consegue ser acessar e modificada em outros scopos 
//se ja for declarada
console.log('> existe y antes do bloco?' , y)

{
    let y = 0
}

console.log('> existe y depois do bloco?' , y)



// a const é uma variavel local que não pode ser modificada