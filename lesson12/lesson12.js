// function obliczCene(name, price, vat) {
//    const cenaVAT = price + price * vat / 100
//  return `Cena produktu ${name} to ${cenaVAT} PLN`
// }

// const wynik = obliczCene('Ksiazka JS', 100, 23)
// const wynik1 = obliczCene('Ksiazka CSS', 212, 23)
// const wynik2 = obliczCene('Ksiazka C#', 79, 23)
// const wynik3 = obliczCene('Notes', 100, 8)
// console.log(wynik)
// console.log(wynik1)
// console.log(wynik2)
// console.log(wynik3)

//Cena produktu Ksiazka JS to 123 PLN

// {name, type, price}
function obliczCene2 (obj) {
     const stawkiVat = {
         ksiazka: 23,
         szkolenie: 5,
         hotel: 13,
     }
     const stawkaVat = stawkiVat[obj.type] // dokopanie się do VAT w funkcji
     const totalPrice = obj.price + obj.price * stawkaVat /100
     return `Cena produktu ${obj.type} o nazwie ${obj.name} to ${totalPrice} PLN.`
}

const produkt = {
    name: 'Książka JS',
    type: 'ksiazka',
    price: 100
}
const produkt1 = {
    name: 'Ksiazka CSS',
    type: 'ksiazka',
    price: 100
}
const produkt2 = {
    name: 'Notes',
    type: 'Art.papier',
    price: 100
}

console.log(obliczCene2(produkt))