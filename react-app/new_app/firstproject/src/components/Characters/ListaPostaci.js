import React, {useState} from 'react'
import KartaPostaci from './KartaPostaci'
import styled from 'styled-components'
import { Switch, Grid,  } from '@material-ui/core';


const TitleCharacters = styled.span`
    padding-top: 12px;
    text-align: center;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 24px;
    font-weight: 700;

    `;
const CharactersFrame = styled.span `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    `;

    

function ListaPostaci( {postaci, page} ) {

    const [stats, setStats] = useState(false)
    const changleChangeSwitch = () => {
        setStats(stats => !stats)
    }
    console.log(postaci.results)
    

    return (
        <>
            <TitleCharacters>Lista Postaci w bazie:  {postaci.info.count}  </TitleCharacters>
            <TitleCharacters>Strona: {page} z {postaci.info.pages}  </TitleCharacters>
            <CharactersFrame>
                <Grid item>A-Z</Grid>
                    <Grid item>
                        <Switch checked={stats} onChange={changleChangeSwitch} name="stats" color="primary" />
                    </Grid>
                <Grid item>Z-A</Grid>
            </CharactersFrame>

            <CharactersFrame>
                
                {postaci.results
                                .sort((a, b) => (stats? (a.name < b.name ? 1 : -1) : a.name > b.name ? 1 : -1))
                                .map(({id, name, species, status, image}) => 
                            <KartaPostaci id={id} name={name} species={species} status={status} image={image} />)
                }
            </CharactersFrame>
    
        </>)
}        

export default ListaPostaci