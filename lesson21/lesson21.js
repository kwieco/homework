// console.log('A')

// function fn() {
//     console.log('B')

// }
// // 1000 ms = 1s
// setTimeout(() => {
//     console.log('C')
// }, 2000)

// fn()
// function funkcjaAsynchroniczna() {
//     return {
//         then: (fn) => console.log('then')}
//     }
// }


// const wynik = funkcjaAsynchroniczna()
//     wynik.then(() => {
//         console.log()
//     })



const person = {
    name: "Mateusz",
    age: 19
}

function showName() {
    console.log(this.name)
}
person.showName = showName
person.showName()

function Person(name) {
    this.name = name
}

const person2 = new Person("MAT")
console.log(person2)
showName()