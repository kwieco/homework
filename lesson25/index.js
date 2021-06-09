const stanAplikacji = {
    page: 1,
    info: null,
    $liczbaPostaci: document.getElementById('lista'),
    $lista: document.getElementById('lista'),
}

const $buttonPrev = document.getElementById('prev')
const $buttonNext = document.getElementById('next')
const $inputFilter = document.getElementById('filter')


$buttonPrev.addEventListener('click', handlePageChangeClick)
$buttonNext.addEventListener('click', handlePageChangeClick)
$inputFilter.addEventListener('keyup', handleFilter)


function handleFilter(event) {
    const { value } = event.target

   const cards = document.getElementsByClassName('card')
   Array
    .from(cards)
    .forEach((card) => {
        card.classList = 'card'
        if (!card.dataset.name.toLowerCase().includes(value.toLowerCase())){
           card.classList += ' hidden'
       }
})
}

async function handlePageChangeClick(event) {
    const direction = event.target.id

    if (direction === 'prev' && stanAplikacji.info.prev === null) {
        alert( 'Jesteś na 1 stornie')
        return
    } else if (direction === 'next' && stanAplikacji.info.next === null) {
        alert( 'Jesteś na ostatniej stornie')
        return
    }

    direction === 'prev' ? stanAplikacji.page-- : stanAplikacji.page++

        const characters = await pobierzPostaci()
        stanAplikacji.info = characters.info
        stanAplikacji.$listaPostaci.innerHTML = ''
        characters.results.forEach(stworzKartePostaci)
}

async function pobierzPostaci() {
    const data = await fetch(`https://rickandmortyapi.com/api/character?page=${stanAplikacji.page}`)
    const response = await data.json()
    return response

    // return fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
    //     .then((data) => {return data.json() })
    //     .then((response) => response)
}
function stworzKartePostaci(data) {
    const $card = document.createElement('div')
    $card.classList = 'card'

    const $img = document.createElement('img')
    $img.src = data.image
    $img.alt = data.name

    $card.appendChild($img)

    const $container = document.createElement('div')
    $container.classList = 'container'

    const $name = document.createElement('h4')
    $name.innerHTML = data.name

    const $species = document.createElement('p')
    $species.innerHTML = data.species

    $container.appendChild($name)
    $container.appendChild($species)
    $card.appendChild($container)
    $card.dataset.name = data.name
    stanAplikacji.$lista.appendChild($card)

}

async function main() {

    const characters = await pobierzPostaci()
    stanAplikacji.info = characters.info
    const $liczbaPostaci = document.getElementById('liczba-postaci')
    $liczbaPostaci.innerHTML = characters.info.count
    characters.results.forEach(stworzKartePostaci)
}



main()