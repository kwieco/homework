const {listaAllegro, students, rentalCarCompany} = require('./data')
// const laptopy = []
// for (let i = 0; i < listaAllegro.length; i++){
//     const produkt = listaAllegro[i]
//     if (produkt.category === 'laptopy') {
//         laptopy.push(produkt)
//     }
// }
//  console.log('laptopy', laptopy)

//  const laptopy2 = listaAllegro.filter(function(produkt){
//      if (produkt.category === 'laptopy') {
//          return true
//      }

//  })
// //  console.log(laptopy2)
// function discount10 (item, index, tablica) {
//     return {
//         ...item,
//         price: +(item.price * 0.9).toFixed(2) 
//     };
// function findLaptopy() {
//     if (item.category === 'laptopy'){
//         return true
//         }
//     };
// const lista = listaAllegro
//                         .filter(findLaptopy)
//                         .map(discount10)
// console.log(lista)

function reduce(funkcjaRedukujaca, wartoscPoczatkowa) {
    let wartosc = wartoscPoczatkowa
    for (let i =0; i < listaAllegro.length; i++) {
        const item = listaAllegro[i]
       

       wartosc =  funkcjaRedukujaca(warotsc, item)
    }
    return wartosc
}

const result = listaAllegro.reduce(function(acc,{price, soldProducts}) { 
    const sum = acc + soldProducts * price
    return sum

}, 0)

console.log(result)