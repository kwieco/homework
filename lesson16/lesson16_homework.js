/*Pętla for...in */

//a) napisz obiekt(zawierający conajmniej 3 elementy klucz-wartość) i pętle która wyświetli wszystkie wartości tego obiektu,
    // const imionka = {
    //     firstname: "Jarosław",
    //     secondname: "Maria",
    //     age: '34'
    // }

    // for( key in imionka) {
    //     console.log(imionka[key])
    // }

//b) napisz tablice(conajmniej 5 elementową) i wyświetl wszystkie elementy tej tablicy,

// const tablica = [ 'jednen', 'dwa', 'trzy', 'cztery', 'pięć']

// for (kluczyczek in tablica) {
//     console.log(tablica[kluczyczek])
// }

/*Pętla for...of*/

// a) Napisz pętle która wyświetli elementy tablicy tej samej co w zadaniu 1b,

// for (kluczyczek of tablica) {
//     console.log(kluczyczek)
// }


// b) Napisz pętle która wyświetli elementy stringa "Hello World",

// const string = "hello World"

// for (show of string){
//     console.log(show)
// }
// c) Jaka jest różnica między for..in a for..of?

/* for... in:   przydaje sie do iteracji po właściwościach obiektu
                w tablicy z elementami beda indeksy elementów tablicy
                działa na obiektach
    for.. of:   przydatna do iteracji po obiektach, tabliach i lancuchach znaków
                w tablicy elemantami interacji beda warotsci tablicy
                nie dziala na obiektach */

/*Pętla while oraz do...while */

// a) napisz pętlę, która wyświetli liczby od -5 do 5

// let x = -5
// while (x <=5) {
//      console.log(x)
//      x++
//  }
// b) napisz taka samą pętle za pomocą do...while

// let y = -5
// do {
//     console.log(y)
//     y++
// } while (y <=5)


/* metoda map() */
// const array = [1, 2, 3, 4, 5] //przykładowa tablica
//a) stwórz nową tablicę z taką samą liczbą elementów gdzie każdy jest pomnożony razy 2,

// const arrayMuliplayed = array.map(function(table) {
//     return table *2
// })

// console.log('array', array)
// console.log('Pomonożona tablica:', arrayMuliplayed)


//b) stwórz tablicę z imionami i nową tablice, która wyświetli powitanie dla każdego imienia w tablicy,

// const lastname = ['Kowalski', 'Nowak', 'Jeziorowski', 'Krakowiak']

// const welcomeLastname = lastname.map(function(item){
//     return `Good Morning Mr. ${item}`
// })

// console.log(welcomeLastname)



/* metoda filter() */ 
// const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9] //przykładowa tablica


//a) z tablicy array stwórz nową tablicę w której będą tylko liczby nieparzyste,

// const newArray1 = array1.filter(function(item){
//     if (item % 2 == 0){
//         return true
//     } 
// })
// console.log('array', array1)
// console.log('new array', newArray1)
//b) z tablicy array stwórz nową tablicę z cyframi większymi od 5ciu,

// const newArray2 = array1.filter(function(item) {
//     if (item > 5) {
//         return true
//     }
// })
// console.log('array', array1)
// console.log('new array', newArray2)

//c) stwórz tablicę z obiektami(z wartościami: name, lastname, gender - przynajmniej 4 osoby w tablicy powinny być) i przefiltruj ją tak aby zostały tylko osoby płci żeńskiej w nowej tablicy, 
    // const arrayObiect = [ 
    //         {name: 'Karol',
    //         lastname: 'Kowal',
    //         gender: 'male'
    //         },
    //         {name: 'Jola',
    //         lastname: 'Lojalna',
    //         gender: 'female'
    //         },
    //         {name: 'Michał',
    //         lastname: 'Homar',
    //         gender: 'male'
    //         },
    //         {name: 'Karolina',
    //         lastname: 'Nowicki',
    //         gender: 'female'
    //         }
    //     ]

    // const filteredArrayObiect = arrayObiect.filter(function(find) {
    //     if (find.gender === "female") {
    //         return true
    //     }
    // })

    // console.log(arrayObiect)
    // console.log(filteredArrayObiect)

/*metoda forEach() */
//a) zmień tablice  array3 tak aby każda wartość została pomniejszona o 1,

// const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9] 

// const arrayMinusOne = array3.forEach(function(number) {      
// console.log(number -1 )})

// console.log('Podstawowa tablica', array3)
// console.log('Tablica z odjetymi od 1', arrayMinusOne)


/*metoda sort() */

//a) posortuj alfabetycznie tablicę ze stringami 
// const str = ['d', 'a', 's', 'f']

// const strSorted = str.sort()

// console.log(strSorted)

//b) posortuj od liczby najmniejszej do największej tablicę
// const array4 = [9, 2, 1, 6, 5, 4, 7, 8, 3, 11]

// const sortedNumbers1 = array4.sort(function(a,b) {
//     return a-b
// })
// console.log(sortedNumbers1)

//c) powyższą tablicę array posortuj od największej do najmniejszej,
// const sortedNumbers = array4.sort(function(a,b) {
//     return b-a
// })
// console.log(sortedNumbers)

/* 8**. łączenie metod map(), filter(), sort() */
const array5 = [9, 2, 1, 6, 5, 4, 7, 8, 3]
// a) stwórz nową tablicę od array tylko każdy element powinien być powiększony o 2, a następnie przefiltruj tą tablicę 
//tak aby wyświetliła tylko liczby większe od 10 i posortuj tą tablicę od najmniejszej liczby do największej, 

const array5edited = array5
                            .map(add2)
                            .filter(above10)
                            .sort(sortowanko)
console.log(array5)
console.log(array5edited)

function add2 (item) {
    return item + 2
};

function above10 (item) {
    if (item > 10) {
        return true
    }
};

function sortowanko(a,b) {
    return a - b
};
