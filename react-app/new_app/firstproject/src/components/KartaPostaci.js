import React from   'react'
import styled from 'styled-components';

const Picture = styled.img`
    margin-right: 15px; 
    margin-bottom: 8px; 
    border: 1px solid silver; 
    background: white; padding: 4px;
    border-radius: 3px;
    box-shadow: 1px 1px 3px silver; 
    `;
const Picture2 = styled.p`
    display: flex;
    margin-right: 15px; 
    margin-bottom: 8px; 
    border: 1px solid silver; 
    background: white; padding: 4px;
    border-radius: 3px;
    box-shadow: 1px 1px 3px silver; 
`;

function KartaPostaci( {name ,image, status, species}) {

    return (
    <div className='card' data-name={name}>
        <Picture src={image} alt={name} />
        
        <Picture2 className='container'>
            <h4>{name}</h4>
            <p>{status}</p>
            <p>{species}</p>
            </Picture2>
        </div>
    )
}

export default KartaPostaci