

// Function() constructor

// expressao new
// criar um novo objeto
// this keyword

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " andando"
    }
}

const mayk = new Person('Mayk')

console.log(mayk.walk())



let name = new String()