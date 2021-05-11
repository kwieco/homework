// const numbers = [ 33, 22, 55, 332, 44, 71237]
// const samochod = {
//     marka: 'lambo',
//     model: 'ursus',
//     kolor: 'black perl',
//     km: '783'
// }
// const samochod2 = {
//     marka: 'bmw',
//     model: 'e32',
//     kolor: 'black yellow',
//     km: '123'
// }

// const samochody = [samochod, samochod2]

// for ( let i = 0; i < samochody.length; i++)
// {
//     const samochod = samochody[i]
//     for (klucz in samochody[i]) {
//         console.log(` ${klucz}: ${samochody[i][klucz]}`)
//     }
//     console.log('\n')
// }
// // for (let i = 0; i <numbers.length; i++) {
//     console.log(numbers[i])
// }

// const klucz = 'marka'
// samochod[klucz]
// samochod.marka



// for (klucz in samochod) {
//     console.log(` ${klucz}: ${samochod[klucz]}`)
// }

// for (index in numbers) {
//     console.log('index', index)
//     console.log(numbers[index])
// // }
// let i = 0
// while (i < numbers.length) {
//     console.log(numbers[i])
//     i++;

// }

// let i = 0;

// do {
//     console.log(numbers[i])

// } while (i < 0 ) // do while wykona sie raz przynajmniej



// console.log(numbers.sort()) 

// function sortuj(liczba1, liczba2) {
//     if (liczba1> liczba2){
//         return 1
 
//    }
//    if (liczba2> liczba1){
//        return -1
//    }
//    return 0;
// }


//mnozenie x2
// const numbers = [ 33, 22, 55]

// const samochod = {
//     marka: 'lambo',
//     model: 'ursus',
//     kolor: 'black perl',
//     km: '783'
// }
// const samochod2 = {
//     marka: 'bmw',
//     model: 'e32',
//     kolor: 'black yellow',
//     km: '123'
// }

// const samochody = [samochod, samochod2]

// function funkcjaMapujaca(element, index, tablica) {

//     return {
//         ...element,
//         km: +element.km + 100
//     }
// }

// const samochodyPodrasowane = samochody.map(funkcjaMapujaca) 
// console.log('samochodyPodrasowane', samochodyPodrasowane)

// const numbersDoubled = numbers.map(funkcjaMapujaca) 
// console.log('numbers', numbers)
// console.log('numbersDoubled', numbersDoubled)

//mozna tez wrzucić ciało funkcji

/* const double = numbers.map(function (element, index, tablica) {
    console.log('element', element)
    console.log('index', index)
    console.log('tablica', tablica)
})

ale już bez nazwy funkcji */

const samochod1 = {
    marka: 'lambo',
    model: 'ursus',
    kolor: 'black perl',
    km: '783'
}
const samochod2 = {
    marka: 'bmw',
    model: 'e32',
    kolor: 'black yellow',
    km: '123'
}
const samochod3 = {
    marka: 'volvo',
    model: 'c30',
    kolor: 'red',
    km: '155'
}


function funkcjaMapujaca(element, index, tablica) {

    return {
        'model': element.model,
        km: +element.km + 250
    }
}

function filtrujaca(elemencik) {
    if (elemencik.km > 400){
        return true
    }
    return false
}


const samochody = [samochod1, samochod2, samochod3]

// const samochodyPodrasowane = samochody.map(funkcjaMapujaca)
// console.log('samochodyPodrasowane', samochodyPodrasowane)

// const samochodyPrzefiltrowane = samochodyPodrasowane.filter(filtrujaca)
// console.log('samochodyPrzefiltrowane', samochodyPrzefiltrowane)

const samochodyPodrasowaneIPrzefiltrowane = 
    samochody
        .map(funkcjaMapujaca)
        .filter(filtrujaca)

console.log('samochodyPodrasowaneIPrzefiltrowane', samochodyPodrasowaneIPrzefiltrowane)

// samochody.forEach(function (element){
//     a.push
// })