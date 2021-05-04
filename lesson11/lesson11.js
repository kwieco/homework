// function obliczPoleProstokata(a, b) {
//     return a * b
// }

//  const pole = obliczPoleProstokata (2, 5)
//  console.log(pole)

// napisz funkcje przyjmujaca dwa parametry, ktora oblicza nam pole trojkata 1/2 *a*h zwroci wynik w tej postaci
// "Pole trójkąta o podstawie 10 i wysoosci 12 wynosi 60 "

// function obliczPoleTrojkata (a, h) {
//     const pole = (a * h)/2
//     return `Pole trójkąta o podstawie ${a} i wysokości ${h} wynosi ${pole}`
// }
// const pole = (obliczPoleTrojkata(10, 12))
// console.log(pole)

// Funkcja konwetujaca godziny minut i sekundy na sekundy, funkcja przyjmuje  3 parametry , h,m,s  return iloscSekund(Number)

// function konweter(h, m, s) {
//     const iloscSekund = s + (m*60) + (h*3600)
//    return `${iloscSekund} sekund`
// }
// const iloscSekund = konweter(0, 10, 10)
// console.log (iloscSekund)

// function canIwatchMovie (wiek){
//     if (wiek< 18) {
//         elese {
//             return `Nie możesz obejrzeć film`
//         }
//     } return `Możesz obejrzeć film`
// }



// v1 Funkcja przyjmuje 2 parametry age(Number) i isDrunk(Boolean), funkcja ma zwrócić wartość Boolean odpowiadając na pytanie czy barman może podać piwo
// Jeżeli osoba ma > 18 lat i nie jest pijana to barman może podać piwo, natomiast jeżeli osoba ma mniej niż 18 lat lub jest pijana to barman nie może podać piwa
// isDrunk domyślnie true
// canServeBeer(age, isDrunk) 
// canServe = canServeBeer()
// true: "Proszę oto Twoje piwo", false: "Przykro mi, dzisiaj nie dostaniesz piwka"

            function canServeBeer(age, isDrunk) {
                if (age >= 18 && isDrunk == true) {
                    return `Proszę oto Twoje piwo`
                } else {
                    return ` Przykro mi, dzisiaj nie dostaniesz piwka`
                }
            }
            canServe = canServeBeer(22,false)
            console.log(canServe)

// v2, zamiast age   i isDrunk, funkcja przyjmuje 1 parametr obiektu osoby, obiekt ma w sobie wartości age, isDrunk (default value na true), name
// zamiast Boolean zwracamy string Kasiu oto Twoje winko, Kasiu, przykro mi, dzisiaj nie ma winka
// const string = canServeBeer(person)

let person = {
    age: 17,
    isDrunk: true,
}

function canServeBeerv2(person) {
    if (person.age >= 18 && person.isDrunk == true) {
        return `Kasiu oto Twoje winko`
    } else {
        return `Kasiu, przykro mi, dzisiaj nie ma winka`
    }
}
canServev2 = (canServeBeerv2(person))
console.log(canServev2)

// const queue = []
// const name = 'test'


// function orderCar(car, CarQueue) {
//     if (car && car.type) {
//         CarQueue.push(car)
//     }
// }

// const ford = {
//     type: 'mustang',
//     isDiesiel: false
// }

// console.log('before', queue)
// orderCar(ford,queue)
// console.log('after', queue)