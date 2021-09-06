import React, { useState} from 'react'
import KartaPostaci from './KartaPostaci'
import styled from 'styled-components'
import { Button } from '@material-ui/core';

const TitleCharacters = styled.div`
    padding-top: 12px;
    text-align: center;
    background: #FFFF00;
    width: 100%;
    font-size: 24px;
    font-weight: 700;

    `;

const ButtonPosition = styled.div`
    display: flex;
    justify-content: space-around;
    text-align: center;
    background: #000000;
    width: 100%;

    `;
function ListaPostaci( {postaci }) {
    return (
        <>
            <TitleCharacters>Lista Postaci w bazie:  {postaci.info.count}  </TitleCharacters>
           
            <ButtonPosition>
                
                <Button style={{backgroundColor: 'yellow', color: 'black'}} size='large' variant='outlined' color='primary' onClick='{next}'>BACK</Button>
                <Button style={{backgroundColor: 'yellow', color: 'black'}} size='large' variant='outlined' color='primary' id='next'>NEXT </Button>
            </ButtonPosition>
                
            {postaci.results
                    .filter((item, index) => index <10)
                    .map(({name, species, status, image}) => 
                        <KartaPostaci name={name} species={species} status={status} image={image} />)
            }
            </>)
            
}

export default ListaPostaci