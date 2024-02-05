
function sayMyName(name = "") {
    if (name =='') {
        throw 'Nome é obrigatorio'
    }
}

try {
    sayMyName('')
} catch(e) {
    console.log(e)
}



// for of

let name = 'mayk'
let names = ['edu', 'paulo', 'pedro']

for (let char of name) {
    console.log(char)
}


// for in


let person = {
    name:'john',
    age:30,
    weight: 88.6
}

for (let property in person) {
    console.log(property)
}

if (name in 'y') {
    console.log("oi")
}