// obiekty

// const person = {
//     name: 'Mateusz',
//     surname: "Gabriel",
//     age: 69
// }

// person.name // Mateusz
// person ['name'] // Mateusz

// const prop = 'name'
// person [prop] // Mateusz

// function pobierzWartosc (osoba, klucz = 'name') {
//     return osoba[klucz]
// }
//  console.log(pobierzWartosc(person, 'age'))

// Pętle

const druzynaPi = ['Mateusz', 'Mati', 'Matt', 'Mameja', 'M']

console.log(`Cześć ${druzynaPi[0]}`)
console.log(`Cześć ${druzynaPi[1]}`)
console.log(`Cześć ${druzynaPi[2]}`)
console.log(`Cześć ${druzynaPi[3]}`)
console.log(`Cześć ${druzynaPi[4]}`)


for (let i =0; i < 5; i++) {
    console.log(`Cześć ${druzynaPi[i]}`)
}