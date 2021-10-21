import { Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router'


const S ={
    Typography: styled(Typography) `
        justify-content: 'center';
        margin: 12px;
        `
};


const url = 'https://pokeapi.co/api/v2/pokemon'
function PokeDetails() {

    
    const {name} = useParams();
    const [pokemonDetails, setPokemonDetails] = useState('')
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null)

    const detailPokemon = async () => {
        const result = await fetch(`${url}/${name}`);
        const data = await result.json();
        setPokemonDetails(data)
        console.log(data, 'pokemondetalils')
    };

    useEffect(() => {

        detailPokemon();
    },[])

    const history = useHistory()

        const Back = () => { 
            history.replace('/')}
    return (
        <div>
            <div>
            {loading && <h1>Waiting for pokemon details...</h1>}
            {error && <h1>Error</h1>}
            </div>
            {pokemonDetails &&
            <>
                <S.Typography
                    variant="h6"
                     align='center'
                    justifyContent='center'
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                <Button variant="contained" onClick={Back} >Back to Pokemon list</Button>
                </S.Typography>
                <div className="container">
                <div className="card-container"> 
                    <div className="img-container"><img src={pokemonDetails.sprites.other.dream_world.front_default} alt={pokemonDetails.name} /></div>
                    <div className="title"><h2> {pokemonDetails.name}</h2></div>
                    <div className='data-container'>

                        <div className="single-data">
                            <div className="single-data-box_1">{pokemonDetails.height}</div>
                            <div className="single-data-box_2">Height</div>
                        </div>

                        <div className="single-data">
                            <div className="single-data-box_1">{pokemonDetails.base_experience}</div>
                            <div className="single-data-box_2">Base Experiance</div>
                        </div>

                        <div className="single-data">
                            <div className="single-data-box_1">{pokemonDetails.weight}</div>
                            <div className="single-data-box_2">Weight</div>
                        </div>

                        <div className="single-data">
                            <div className="single-data-box_1">{pokemonDetails.abilities[0].ability.name}</div>
                            <div className="single-data-box_2">Ability</div>
                        </div>
            
                    </div>
                </div>
                </div>
                </>  }
            

          
            {/* <div >
            <div><img src={pokemonDetails.sprites.other.dream_world.front_default} alt={pokemonDetails.name} /></div>
                <div><h2> {pokemonDetails.name}</h2></div>
                <div>

                <div >
                    <div>{pokemonDetails.height}</div>
                    <div>Height</div>
                </div>

                <div>
                    <div>{pokemonDetails.base_experience}</div>
                    <div>Base Experiance</div>
                </div>

                <div>
                    <div>{pokemonDetails.weight}</div>
                    <div>Weight</div>
                </div>

                <div >
                    <div>{pokemonDetails.abilities[0].ability.name}</div>
                    <div>Ability</div>
                </div>
            
            </div>
            </div> */}
        </div>
    )
}

export default PokeDetails
