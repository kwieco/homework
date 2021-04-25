console.log("Welcome in Washroom")

const srodkiMyjace = ['proszek bialy', 'plyna do prania', 'ply do plukania', 'proszek kolorowy']
const suszarka = ['spodnie', 'majtki', 'koszulka', 'koszulka']
const brudneUbrania = ['brudne majty',' brudne koszulka', 'brudne spodnie']
function zrobPranie(ubrania, proszek, plyn, program = 'sport'){
    // console.log('ubrania', ubrania)
    // console.log('proszek', proszek)
    // console.log('plyn', plyn)
    // console.log('program', program)
    console.log('brudneUbrania przed zmina', ubrania)

    if (ubrania.lenght < 5) {
        ubrania.push('brudne skarpety')
        ubrania.push('brudne biale skarpety')
    }
    
    console.log ('brudneUbrania po zmianie', brudneUbrania)

    const dostepneProgramy = ['sport', 'delikatne']
    if (!ubrania) {
        console.log("Wrzuc unbrania!")
    }

    if (!proszek) {
        console.log("Wrzuc proszek!")
    }

    if (!plyn) {
        console.log("Wlej płyn!") 
    }

    if (!dostepneProgramy.includes(program)) {
        console.log('Nieznany program')
    }
    return ubrania
}

// const proszek = srodkiMyjace[0]
// console.log(srodkiMyjace[0] )
// console.log(srodkiMyjace[1])
console.log('brudne ubrania przed', brudneUbrania)
const koszNaPranie = zrobPranie(brudneUbrania, 'Persil', srodkiMyjace[1], 'delikatne')
console.log('brudne ubrania po', brudneUbrania)
// console.log(koszNaPranie)