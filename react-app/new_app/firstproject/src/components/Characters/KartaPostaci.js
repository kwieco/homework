import React from   'react'
import styled from 'styled-components';

const Card = styled.span `
    background-color: #fff;
    color: #000;
    display: grid;
    align-items: center;
    max-width: 325px;
`

const Picture = styled.img`
    margin-bottom: 8px; 
    border: 1px solid silver; 
    background: black; 
    padding: 4px;
    border-radius: 3px;
    box-shadow: 1px 1px 3px silver; 
    `;

const Frame = styled.div `
    border: 1px solid black;
    background: white; 
    padding: 4px;
    max-width: 300px;
    box-shadow: 1px 1px 3px silver;
    margin-bottom: 12px;
`
const TextData = styled.span`
    display: flex;
    flex-direction: column;
    align-content: space-around;
    flex-wrap: wrap;
`;

function KartaPostaci( {name ,image, status, species}) {

    return (
        <>
        <Card> 
            <Picture src={image} alt={name} />
            
            <Frame>
                <TextData>Name: {name}</TextData>
                <TextData>Status: {status}</TextData>
                <TextData>Species: {species}</TextData>
            </Frame>
        </Card>
    </>
    )
}

export default KartaPostaci