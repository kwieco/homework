import React from 'react'
import KartaPostaci from './KartaPostaci'
import styled from 'styled-components'

// const Card = styled.div`
//     border: 1px solid black;
//     background-color: yellow;
//     `;
const TitleCharacters = styled.div`
    padding-top: 12px;
    text-align: center;
    background: #fff;

    `;

const Button = styled.button`
    color: black;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;

`;


function ListaPostaci( {postaci, ilosc}) {
    return (
        <div>
            <TitleCharacters>Lista Postaci ( {postaci.info.count} ) </TitleCharacters>
            <Button id='next'>NEXT</Button>
            <Button id='prev'>BACK</Button>
            {
                postaci.results
                    .filter((item, index) => index <5)
                    .map(({name, species, status, image}) => 
                        <KartaPostaci name={name} species={species} status={status} image={image} />)
            }
            </div>)
            
}

export default ListaPostaci