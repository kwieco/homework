import React, { useState, useEffect} from 'react'
import ListaPostaci from '../components/ListaPostaci'






function Characters() {
    const [postaci, setPostaci] = useState(null)
    
    useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => setPostaci(data))
}, [])

    if(!postaci) {
        return (
        <div className='app'>
            Brak Danych
        </div>)
}


return (
    <div className='charactersList'>
    <ListaPostaci postaci={postaci} /> </div>);
}

 export default Characters