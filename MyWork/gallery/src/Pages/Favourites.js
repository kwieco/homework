import React, {useState, useEffect} from 'react'
import { Button, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import { useHistory } from 'react-router'
import { getPokemon } from '../components3/pokemon';
import CardOfPokemon from '../components3/Card/CardOfPokemon';
import { Box } from '@mui/system';
import FavCard from '../components3/Card/FavCard'

const S ={
    Typography: styled(Typography) `
        margin: 12px;
    `,
    Box: styled(Box) `
        width: 80%;
        display: grid;
        margin: 0 auto;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-gap: 5px;
    `
};
 
const db_url = 'http://localhost:3000/favourites' 

function Favourites() {
    const [pokemonData, setPokemonData] = useState([])

const fetchFav = async () => {
    const result = await fetch(db_url);
    const data = await result.json();
    setPokemonData(data)
    console.log ('dataddfrge' , data)
}
  
    useEffect(() => {
        fetchFav();

    }, [])
    console.log ('pokemonData' , pokemonData)

  
    const history = useHistory()

        const Back = () => { 
            history.replace('/')}


    return (
        <div>
            <S.Typography
                variant="h6"
                align='center'
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
                <Button variant="contained" onClick={Back} >Back to Pokemon list</Button>
            </S.Typography>

            <h1>Favourites</h1>

            <S.Box>
                {pokemonData.map( pokemon =>  
                
                <FavCard pokemon={pokemon}/>
                
                ) }
            </S.Box>
        </div>
    )
}

export default Favourites
