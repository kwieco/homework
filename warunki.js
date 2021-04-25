const person ={
    imie: 'Mateusz',
    age: 11,
    address: {
        city: 'Warsaw'
    }
}

// const x = 11 

// if (x >= 18) {
//     console.log("Możesz kupić alko")
// } else  if ( x > 12) {
//     console.log("Przyjdź za jakiś czas")
// } else {
//     console.log("zawołaj mamę")
// }

console.log(person.address.city) // poszukiwanie do srodka by wyswietlic WWA


if (person.age >= 18) {
    console.log("Możesz kupić wnko")
} else if (person.age > 12) {
    console.log("Możesz sobie kupic tylko piccolo")
} else {
    console.log("Nie powinieneś sam robić zakupów w ", person.address.city)
}