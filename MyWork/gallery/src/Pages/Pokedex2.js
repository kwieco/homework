import React, { useState, useEffect } from 'react';
import CardOfPokemon from '../components3/Card/CardOfPokemon';
import { getPokemon } from '../components3/pokemon';
import { Button, Stack } from '@mui/material';
import { Box, styled } from '@mui/system';
import { useHistory } from 'react-router';



const S ={
    Box: styled(Box) `
        width: 80%;
        display: grid;
        margin: 0 auto;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-gap: 5px;
    `
};

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/?limit=15'
const db_url = 'http://localhost:3000/favourites' 

function Pokedex2() {
    const [pokemonData, setPokemonData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [isFavourite, setIsFavourite] = useState([])
    const [favourite, setFavourite] = useState([])
    const [next, setNext] = useState('');
    const [prev, setPrev] = useState('');
    const [loading, setLoading] = useState(true);
    
    

const fetchFav = async () => {
    const result = await fetch(db_url);
    const data = await result.json();
    setIsFavourite(data)
}
      const getAllPokemon = (BASE_URL) => {
        return new Promise((resolve, reject) => {
            fetch(BASE_URL)
            .then(res => res.json())
            .then(data => { resolve(data)
                })
        });
    }
  
    useEffect(() => {
      async function fetchData() {
        const response = await getAllPokemon(BASE_URL)
        setNext(response.next);
        setPrev(response.previous);
        await loadPokemon(response.results);
        setLoading(false);
      }
      fetchFav();
      fetchData();
    }, [])

  
  
    const nextPage = async () => {
      setLoading(true);
      const data = await getAllPokemon(next);
      await loadPokemon(data.results);
      setNext(data.next);
      setPrev(data.previous);
      setCurrentPage(currentPage +1)
      setLoading(false);
    }
  
    const prevPage = async () => {
      if (!prev) return;
      setLoading(true);
      const data = await getAllPokemon(prev);
      await loadPokemon(data.results);
      setNext(data.next);
      setPrev(data.previous);
      setCurrentPage(currentPage -1)
      setLoading(false);
    }

    async function loadPokemon(data) {
    const pokemonDetailData = await Promise.all(data.map(async (pokemon) => {
      let singlePokemon = await getPokemon(pokemon);
      return singlePokemon;
      
    }));
    setPokemonData(pokemonDetailData);

    console.log(pokemonDetailData, 'siiingleee')
  }


  
    return (
      <>
        
        <div>
          {loading ? <h1 style={{ textAlign: 'center' }}>Looking for pokemons...</h1> : (
            <>
              <Stack spacing={2} direction="row" justifyContent="center">
                <h2>PAGE: {currentPage}</h2>
              </Stack>
              <Stack spacing={2} direction="row" justifyContent="center">
                <Button variant='contained' color='primary' onClick={prevPage}>Prev</Button>
                {currentPage <=10 ? <Button variant='contained' color='primary' onClick={nextPage}>Next</Button> : 
                <Button variant='contained' color='primary' disabled onClick={nextPage}>Next</Button>}
              </Stack>
              <S.Box>
                {pokemonData.map(( pokemon, i) => {
                  console.log(pokemon.name, 'poooookkk') 
                  return <CardOfPokemon  key={i} isFavourite={isFavourite.map(({ id }) => +id)} pokemon={pokemon} />
                })}
              </S.Box>

            </>
          )}
        </div>
      </>
    );
  }
  

export default Pokedex2;

