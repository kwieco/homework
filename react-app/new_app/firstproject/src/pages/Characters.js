import React, { useState, useEffect} from 'react'
import ListaPostaci from '../components/Characters/ListaPostaci'
import styled from 'styled-components'
 
const MainContainer = styled.div `
    background-color: #FFFF00;
    display: flex; 
    max-width: 99vw;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between; 
`

function Characters() {
    const [postaci, setPostaci] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    
    useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/`)
        .then(response => response.json())
        .then(data => setPostaci(data))
}, [])

    if(!postaci) {
        return (
        <div className='app'>
            No data! Check database!...
        </div>)
}

return (
    <MainContainer>
        <ListaPostaci postaci={postaci}  /> 
    </MainContainer>
    );
}

 export default Characters