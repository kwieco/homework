import React, { useState, useEffect} from 'react'
import ListaPostaci from '../components/Characters/ListaPostaci'
import { Button, MenuItem, Select } from '@material-ui/core'
import styled from 'styled-components';

 
const ButtonBox = styled.div`
    width: 100vw;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: rgb(2,0,36);
    background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(255,248,0,1) 29%, rgba(255,248,0,0) 100%);`;
 
    const CharactersFrame = styled.span `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    `;

function Characters() {
    const [postaci, setPostaci] = useState(null);
    const [page, setPage] = useState(1)
    const [selectStatus, setSelectStatus] = useState('')

    useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}${selectStatus}`)
        .then(response => response.json())
        .then(data => setPostaci(data))
        },[page, selectStatus])


    if(!postaci) {
        return (
        <div className='app'>
            No data! Check database!...
        </div>)
}
    const previous = () => {
        setPage(page - 1)
    }

    const next = () => {
        setPage(page + 1)
    }

    const handleChange = (event) => {
        setSelectStatus(event.target.value);
    };

    console.log(selectStatus ,'selectStatus')
return (
    <>
        
        <ButtonBox>
            { postaci.info.prev ? (<Button  variant="contained" color="primary" onClick={previous}>Previous</Button>) : null }
            { postaci.info.next ? (<Button  variant="contained" color="primary" onClick={next}>Next</Button>) : null}  
              
        </ButtonBox> 

        <CharactersFrame> Filtruj postacie po:
        <Select  value={selectStatus} onChange={handleChange} label="Filter">
          <MenuItem value="">                         <em>All</em>  </MenuItem>
          <MenuItem value={`&status=Dead`}>    Dead       </MenuItem>
          <MenuItem value={`&status=Alive`}>   Alive      </MenuItem>
          <MenuItem value={`&status=unknown`}> unknown    </MenuItem>
        </Select>
        </CharactersFrame>
     
        <ListaPostaci postaci={postaci} page={page} selectStatus={selectStatus} /> 
    </>
    );
}

 export default Characters