import React, { useState, useEffect } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './PokeCardStyle.css';
import { useHistory } from 'react-router';
import { styled } from '@mui/system';




function Card({ pokemon, isFavourite }) {
    console.log(isFavourite, 'isFavourite2222')
    console.log(pokemon.id, 'pokemon22222')

    const [liked, setLiked] = useState(isFavourite)

    const history = useHistory();
    
    return (

        <div className="card-container" onClick={() => history.push(`/${pokemon.name}`)}> 
        <div className="img-container"><img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} /></div>
        <div className="title"><h2> {pokemon.name}</h2></div>
        <div className='data-container'>

            <div className="single-data">
                <div className="single-data-box_1">{pokemon.height}</div>
                <div className="single-data-box_2">Height</div>
            </div>

            <div className="single-data">
                <div className="single-data-box_1">{pokemon.base_experience}</div>
                <div className="single-data-box_2">Base Experiance</div>
            </div>

            <div className="single-data">
                <div className="single-data-box_1">{pokemon.weight}</div>
                <div className="single-data-box_2">Weight</div>
            </div>

            <div className="single-data">
                <div className="single-data-box_1">{pokemon.abilities[0].ability.name}</div>
                <div className="single-data-box_2">Ability</div>
            </div>
            
        </div>
        
         <div className='like-container'><FavoriteIcon color='error'/></div> 
         <div className='like-container'><FavoriteIcon color='action'/></div>
    </div>
    );
}

export default Card;