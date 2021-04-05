//lesson8 //

//exercise_1//

const firstName = "Kamil"
const age = 31
const isOpen = true


//exercise_2//

let firstName = "Kamil",
  age = 32,
  isOpen = false

//zmiana//
 
let firstName = "Michał",
  age = 12,
  isOpen = true

Console.log(firstName)   //(string)//
Console.log(age) //(number)//
Console.log(isOpen)  //(boolean)//


//lesson9.1// 

//exercise_1//

function sayHello() {

console.log('Cześć Karol')

}

//exercise_2//

function sum() {

console.log(6 + 6)

}

function minus() {

console.log(9 - 3)

}

function divide() {

console.log(12 + 3)

}
function multiple() {

console.log(12 * 12)

}

function modulo() {

console.log(9 % 2)

}

function power() {

console.log(6 ** 2)

}

//lesson9.2 //

//exercise_1//


function power(firstNum, secondNum) {

return firstNum ** secondNum

}

power(3, 3)


//exercise_2//


function multiple(firstNum, secondNum) {

return firstNum * secondNum

}

multiple(2, 3)


//exercise_3//


function changeMinForSec(minutes) {

return minutes * 60
}

changeMinForSec(60)


//exercise_4//


function sayHello(name) {

return "Cześć, " + name
}

sayHello('Łukasz')
