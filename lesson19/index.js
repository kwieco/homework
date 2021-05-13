const {listaAllegro, students, rentalCarCompany} = require('./data')

// const grades = students.reduce(function(grades, students) {
//     students.grades.forEach(function({ rate }) {
//         const key = `rate ${rate}`
//         if (grades[key] !== undefined) {
//             grades[key]++
//         } else {
//             grades[key] = 1
//         }
        
//     })

//     return grades
// })

// console.log(grades)


//students

// function naszReduce() {
//     console.log('nasz reduce', this)
// }

// // Array.prototype.naszReduce = naszReduce

// Array.prototype.naszReduce = naszReduce

// const arr =  [1, 2, 3, 4, 5, 6, 7]

// const suma = arr.naszReduce(function(sum, next){
//     return sum + next
// }, 0)

// console.log(suma)


function Student(name, age) {
    this.name = name
    this.age = age
}
Student.prototype.sayHello = function () {
    console.log(`Hello ${this.name}`)
}


const studentA = new Student('Bart', 18)
studentA.sayHello()