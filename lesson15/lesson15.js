

const uczniowie = [
    {
    name: 'Mateusz',
    ocena: 1,
    attempts: 6
    },
        {
    name: 'Jola',
    ocena: 3,
    attempts: 2
    },
        {
    name: 'Robert',
    ocena: 4,
    attempts: 1
    },
        {
    name: 'Janusz',
    ocena: 6,
    attempts: 2
    },
    {
    name: 'Karolina',
    ocena: 6,
    attempts: 2
    },
]

const mateusz = uczniowie[0] // pierwsza pozycja listy     {
                                                    // name: 'Mateusz',
                                                    // ocena: 1
                                                    // },
// console.log(uczniowie[0].name)
// const name = mateusz.name

// console.log(name)

// uczniowie[0].name 

// for (let i = 0 ; i < uczniowie.length ; i++ ) {
//     const uczen = uczniowie[i]

//     sayHello(uczen)
//     passed(uczen)
// }
function sayHelloToTheClass(klasa, ocena = 5){
        for (let i = 0 ; i < klasa.length ; i++ ) {
        const uczen = klasa[i]
        
        sayHello(uczen, ocena)
        passed(uczen)
    }
}

function passed(uczen){
    if (uczen.ocena <= 2 && uczen.attempts > 2){
        console.log('Przykro mi nie zdałeś')
    } else if (uczen.ocena > 2){
        console.log('Zdałeś!')
    } else {
        console.log('Spróboj jeszcze raz')
    }
}


function sayHello(uczen, ocena) {
    let tekst = `Cześć ${uczen.name}`
    if (uczen.ocena >= ocena) {
        tekst += `, dobra robota! zaliczyłeś/aś na ${uczen.ocena}`
    }

    console.log(tekst)
}



// sayHelloToTheClass(uczniowie)

//  1 2 3 4 5 6 7 8 9 10 tabliczka mnozenia
//  2 4 6 8 10
//  3 6 9
// for (let i = 0; i < 10; i++) {

//     let row = ''
//     for (let a = 0; a < 10; a++){
//         const liczba = ( (i + 1) * (a + 1))
//         row = `${row} ${liczba}`
//     }
//     console.log(row)
// }

// for (let i = 0; i < 10; i++) {

//     let row = ''
//     for (let a = 0; a < 10 - i; a++){
//         row += '*'
//     }
//     console.log(row)
// }

// console.log(uczniowie)

// const uczniowie2 = []
// for (let i = 0; i < uczniowie.length; i ++) {
//     const uczen = uczniowie[i]
//     uczniowie2.push({
//         ...uczen
//     })
//     uczen.ocena++
// }

// console.log(uczniowie)
// console.log(uczniowie2)


const liczby = ['a', 'b',' c', 'd',' e']

liczby.map(function (element, index){
    console.log('element', element)
    console.log('index', index)
})