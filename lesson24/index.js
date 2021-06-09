let page = 1
let info = null

async function main(){
    const $buttonPrev = document.getElementById('prev')
    const $buttonNext = document.getElementById('next')
    console.log('info before', info)
    
    $buttonPrev.addEventListener('click', async (el) => {
        if (info.prev === null) {
            alert('Jesteś na pierwszej stronie')
            return
        }
        page--
        const characters = await pobierzPostaci()
        info = characters.info
        const $listaPostaci = document.getElementById('lista')
        $listaPostaci.innerHTML = ''

        characters.results.forEach(stworzKartePostaci)
    })
    $buttonNext.addEventListener('click', async (el) => {
        if (info.next === null) {
            alert('Jesteś na ostatniej stronie')
            return
        }
        page++
        const characters = await pobierzPostaci()
        info = characters.info
        const $listaPostaci = document.getElementById('lista')
        $listaPostaci.innerHTML = ''

        characters.results.forEach(stworzKartePostaci)
    })

    async function pobierzPostaci() {

        const data = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        const response = await data.json()
        console.log('asdf')
        return response

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

        const $lista = document.getElementById('lista')
        $lista.appendChild($card)

    }

    const characters = await pobierzPostaci()
    info = characters.info
    const $listaPostaci = document.getElementById('liczba-postaci')
    $listaPostaci.innerHTML = characters.info.count

    const $numerStrony = document.getElementById('numer-strony')
    $numerStrony.innerHTML = characters.info.pages

    const $page = document.getElementById('page')
    $page.innerHTML = page

    console.log('char', characters)

    characters.results.forEach(stworzKartePostaci)


}
main()