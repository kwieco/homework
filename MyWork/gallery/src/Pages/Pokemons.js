/* eslint-disable react-hooks/rules-of-hooks */
import { Pagination, Typography, typographyClasses, Stack } from '@mui/material';
import styled from 'styled-components';
import React, { useState, useEffect} from 'react'
import PokeList from '../components/ListOfPocemons/PokeList';
import { useHistory } from 'react-router';


const CardDisplay = styled.div`
    display: flex;
    flex-direction: row;
    align-items: space-around;
    flex-wrap: wrap;
    justify-content: center;
`;
const BASE_URL = `https://pokeapi.co/api/v2/pokemon/?limit=15`
function Pokemons() {
    const [allPokemons, setAllPokemons] = useState([])
    const [pokemonOffset, setPokemonOffset] = useState(0)
    const [page, setPage] = useState(1)
    const [loadMore, setLoadMore] = useState(BASE_URL);
    const [isPending, setIsPending] = useState()
    

    const getAllPokemons = async () => {
        const res = await fetch(loadMore)
        const data = await res.json();

        setLoadMore(data.next)

        function createPokemonObj (result) {
            result.forEach(async (pokemon) => {
                setIsPending(true)
                setAllPokemons(null)
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                const data = await res.json()
                console.log(data, 'res')
                setIsPending(false)
                setAllPokemons(data)
                
            });
        }

        createPokemonObj(data.results)

    }
    useEffect(() => {
        getAllPokemons()
        },[])

    if(!setAllPokemons) {
        return (
        <div>
            No data! Check database!...
        </div>)
}
        const previous = () => {
            setPage(page - 15)
        }

        const next = () => {
            setPage(page + 15)
        }

        let history = useHistory();

return (
    <>
        <Stack spacing={2} display='flex' alignItems='center'  flexDirection='column' justifyContent='center'>
            <Typography  display='flex' flexDirection='row'justifyContent='center'>Page: {page}</Typography>
            <Pagination 
                defaultPage={page} 
                onChange={(event, value) => setPage(value)} 
                color="primary" 
                count={11}  />
        </Stack>
        <CardDisplay onClick={({pokemon}) => history.push(`/${pokemon.data.name}`)}>
        {allPokemons
        .map( pokemon => 
            <PokeList 
            image={pokemon.sprites.other.dream_world.front_default}
            name={pokemon.name}
            height={pokemon.height}
            exp={pokemon.base_experience}
            weight={pokemon.weight}
            ability={pokemon.abilities[0].ability.name}
            
            />

        
        )}
        </CardDisplay>
        
        
    </>
    );
}

 export default Pokemons