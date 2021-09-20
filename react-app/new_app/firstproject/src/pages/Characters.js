import React, { useState, useEffect} from 'react'
import ListaPostaci from '../components/Characters/ListaPostaci'
import { Button } from '@material-ui/core'
import styled from 'styled-components';
import BasicSelect from '../components/Characters/BasicSelect'


 
const ButtonBox = styled.div`
    width: 100vw;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: rgb(2,0,36);
    background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(255,248,0,1) 29%, rgba(255,248,0,0) 100%);`;
 

function Characters() {
    const [postaci, setPostaci] = useState(null);
    const [page, setPage] = useState(1)
    const [selectStatus, setSelectStatus] = useState('')

    useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}${selectStatus}`)
        .then(response => response.json())
        .then(data => setPostaci(data))
        },[page])


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

    const options = [
        { value: '', label: 'All' },
        { value: '&name=rick&status=Dead', label: 'Dead' },
        { value: '&name=rick&status=Alive', label: 'Alive' },
        { value: '&name=rick&status=unknown', label: 'unknown' }
    
    ]

    const onSelectChange = (e) => {
        setSelectStatus(e.target.value)
    }
    

    console.log(setSelectStatus ,'setSelectStatus')
return (
    <>
        
        <ButtonBox>
            { postaci.info.prev ? (<Button  variant="contained" color="primary" onClick={previous}>Previous</Button>) : null }
            { postaci.info.next ? (<Button  variant="contained" color="primary" onClick={next}>Next</Button>) : null}  
              
        </ButtonBox> 
        <BasicSelect  options={options} onChange={onSelectChange}/>
        <ListaPostaci 
        postaci={postaci} page={page} /> 
    </>
    );
}

 export default Characters