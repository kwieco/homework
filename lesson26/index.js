const stanAplikacji = {
    page: 1,
    info: null,
    $listaPostaci: document.getElementById('lista'),
    $lista: document.getElementById('lista'),
    $liczbaPostaci: document.getElementById('liczba-postaci'),
    filters: {
        name: ''
    }
}
const $buttonPrev = document.getElementById('prev')
const $buttonNext = document.getElementById('next')
const $inputFilter = document.getElementById('filter')
$buttonPrev.addEventListener('click', handlePageChangeClick)
$buttonNext.addEventListener('click', handlePageChangeClick)
$inputFilter.addEventListener('keyup', handleFilterBackend)
function handleFilterFrontend(event) {
    const { value } = event.target
    const cards = document.getElementsByClassName('card')
    Array.from(cards).forEach((card) => {
        card.classList = 'card'
        if (!card.dataset.name.toLowerCase().includes(value.toLowerCase())) {
            card.classList += ' hidden'
        }
    })
}
async function handleFilterBackend(event) {
    const { value } = event.target
    stanAplikacji.filters.name = value
    const characters = await pobierzPostaci()
    stanAplikacji.info = characters.info
    stanAplikacji.$listaPostaci.innerHTML = ''
    characters.results.forEach(stworzKartePostaci)
    stanAplikacji.$liczbaPostaci.innerHTML = characters.info.count
}
async function handlePageChangeClick(event) {
    const direction = event.target.id
    if (direction === 'prev' && stanAplikacji.info.prev === null) {
        alert('Jesteś na 1 stronie!')
        return
    } else if (direction === 'next' && stanAplikacji.info.next === null) {
        alert('Jesteś na ostatniej stronie!')
        return
    }
    direction === 'prev' ? stanAplikacji.page-- : stanAplikacji.page++
    const characters = await pobierzPostaci()
    stanAplikacji.info = characters.info
    stanAplikacji.$listaPostaci.innerHTML = ''
    characters.results.forEach(stworzKartePostaci)
}
async function pobierzPostaci() {
    let params = `?page=${stanAplikacji.page}`
    if (stanAplikacji.filters.name) {
        params += `&name=${stanAplikacji.filters.name}`
    }
    const data = await fetch(`https://rickandmortyapi.com/api/character${params}`)
    const response = await data.json()
    return response
}
const bazaDanych = {
    characters: [] // 600 postaci
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
    stanAplikacji.$liczbaPostaci.innerHTML = characters.info.count
    characters.results.forEach(stworzKartePostaci)
}
main()