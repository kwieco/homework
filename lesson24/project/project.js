

// a) Stwórz stronę index.html, do której dołączysz plik javascriptowy. W tym pliku pobierz jeszcze raz tablicę postaci
// za pomocą async await,
// const characters = async () => {
//     const data = await fetch('https://rickandmortyapi.com/api/character')
//     const json = await data.json()
//     return json.results

// b) Z pobranej tablicy stwórz nową tablicę zawierającą pierwsze 10 postaci za pomocą filter lub splice,
// const 10characters = async() => {
//         const data = await fetch('https://rickandmortyapi.com/api/character')
//         const json = await data.json()
//         const only10 = await json.results.splice(0, 10)
//         return only10



// c) Za pomocą flexa, dodaj na górze strony tytuł "Lista Rick and Morty"


// d) Pod tytułem dodaj opis który będzie zawierał informację "Wszystkich dostępnych postaci jest X"(tutaj gdzie X wyswietl
// liczbe wszystkich dostepnych postaci)
// e) Na stronie wyświetl imie przynajmniej jednej postaci z pobranej tablicy,

// Dodatkowe funkcjonalności dla chętnych:
// f) Wyświetl w formie listy 10 pierwszych postaci tak aby wyświetlić imie postaci, zdjecie i typ postaci w formie
// opisu czyli musicie uzyć z obiektu postaci: name, image i type.
// g) Wyświetl pod opisem a nad listą dwa przyciski poprzednia i następna, które będą wyświetlały kolejne 10 postaci
// z tablicy lub poprzednie 10, (można to zrobić obcinając tablicę lub używając nowych endpointów z dokumentacji
// pod które mozna podstawiac zmienne i same pobiorą nam dowolną stronę - fetch(<https://rickandmortyapi.com/api/character/?page=1))> WAŻNE! Jeśli endpoint zwraca więcej niz 10 postaci to mozecie wyswietlic ich wiecej!
// h) Wyświetl aktualnie na której stronie jesteśmy i ile jest maksymalnie stron w formie string nad przyciskami
// "Aktualna strona to X na X"

const main = async() => {
    const characters = async() => {
        const data = await fetch(`https://rickandmortyapi.com/api/character`)
        const json = await data.json()
        const $ilosc = await  document.getElementById('quantity')
        $ilosc.innerHTML = await json.info.count
        return json
    }
    const $strona = document.getElementById('actual')
    $strona.innerHTML = 1
    const $wszystkieStrony = document.getElementById('allPages')
    $wszystkieStrony.innerHTML = 2

    const $buttonOneCharacter = document.getElementById('oneCharacter')
    const $buttonPrev = document.getElementById('prev')
    const $buttonNext = document.getElementById('next')

    $buttonPrev.addEventListener('click', async (el)  => {
        const data = await fetch("https://rickandmortyapi.com/api/character?page=1")
        const json = await data.json()
        const $lista = document.getElementById('lista')
        $strona.innerHTML = 1
        $lista.innerHTML = ''
        json.results.splice(0, 10).forEach((character) => tab(character))
    })

    $buttonNext.addEventListener('click', async (el)  => {
        const data = await fetch("https://rickandmortyapi.com/api/character?page=1")
        const json = await data.json()
        const $lista = document.getElementById('lista')
        $strona.innerHTML = 2
        $lista.innerHTML = ''
        json.results.splice(10, 10).forEach((character) => tab(character))
        
    })

    $buttonOneCharacter.addEventListener('click', async (el)  => {
        const data = await fetch("https://rickandmortyapi.com/api/character?page=15")
        const json = await data.json()
        const $lista = document.getElementById('lista')
       
        $lista.innerHTML = ''
        json.results.splice(19, 1).forEach((character) => tab(character))
        
    })

    
    const tab = (data) => {
        const $card = document.createElement('div')
        $card.classList = 'card'
        const $img = document.createElement('img')
        $img.src = data.image
        $img.alt = data.name

        $card.appendChild($img)
        const $lista = document.getElementById('lista')
        const $container = document.createElement('div')
        $container.classList = 'container'

        const $name = document.createElement('h4')
        $name.innerHTML = data.name

        const $status = document.createElement('p')
        $status.innerHTML = `Status: ${data.status}`
     
        $container.appendChild($name)
        $container.appendChild($status)
        $card.appendChild($container)
        $lista.appendChild($card)
        
    }
    
    const splitCharacters = await characters()
    splitCharacters.results.splice(0, 10).forEach((character) => tab(character))
    
}
main()