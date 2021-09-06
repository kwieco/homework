import React from   'react'
import styled from 'styled-components';

const Card = styled.div `
    background-color: #fff;
    color: #000;
    display: grid;
    align-items: center;
    max-width: 325px;
`

const Picture = styled.img`
    margin-right: 15px; 
    margin-bottom: 8px; 
    border: 1px solid silver; 
    background: white; padding: 4px;
    border-radius: 3px;
    box-shadow: 1px 1px 3px silver; 
    `;

const Frame = styled.div `
    border: 1px solid silver;
    display: flex;
    justify-content: center;
    background: white; padding: 4px;
    max-width: 300px;
    box-shadow: 1px 1px 3px silver;
`
const TextData = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px; 
    margin-bottom: 8px; 
    /* width: 350px; */
    
    /* border: 1px solid silver; 
    background: white; padding: 4px;   */
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