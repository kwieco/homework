// fetch ('https://rickandmortyapi.com/api/character')
//     .then(response => response.json())
//     .then(response => {
//         response.results.forEach(( { name }) => {
//             // const domElement = document.createElement('div')
//             // domElement.innerHTML = name

//             const lista = document.getElementById('Lista')
//             lista.innerHTML += name
//             console.log(name)
//         })
//     })
async function app() {
    function handleClick(){
        alert('Siemka')
    }

    const pobierzImiona = async () => {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const data = await response.json()
        console.log('data', data)

        return data.results.map(({ name }) => name)
    }
    
    const  imiona = await pobierzImiona()
    console.log(imiona)

    const lista = document.getElementById('lista')
    imiona.forEach(name => {
        const domElement = document.createElement('div')
        domElement.classList = 'name'
        domElement.innerHTML = name
        lista.appendChild(domElement)
        
    });
}
