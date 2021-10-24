import React, { useState, useEffect } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import './PokeCardStyle.css';
import { useHistory } from 'react-router';
import { styled } from '@mui/system';
import axios from 'axios';

const S = {
    FavIcon: styled(FavoriteIcon)`
        color: ${({ isLiked }) => (isLiked ? "red" : "grey")};`,

    FlashIcn: styled(FlashOnIcon)`
        color: ${({ onFight }) => (onFight ? "orange" : "grey")};`,
}

const DB_Fav_URL = 'http://localhost:3000/favourites'
const DB_Arena_URL = 'http://localhost:3000/arena'

function Card({ pokemon, isFavourite, isInFight}) {
    console.log(isInFight, 'isInFight')
    console.log(isFavourite, 'isFavourite')
    


    const [like, setLike] = useState(false)
    const [fighterPok, setFighterPok] = useState(false)
    

    useEffect(() => {
        const isLiked = isFavourite.includes(pokemon?.id)
        setLike(isLiked)
        const onFight = isInFight.includes(pokemon?.id)
        setFighterPok(onFight)
    }, [])

    const  onClickFav = async () => {
        if(like) {
            await axios.delete(`${DB_Fav_URL}/${pokemon.id}`
            )
            setLike(false)
        } else {
            
           await axios.post(DB_Fav_URL, {
                id: pokemon?.id,
                name: pokemon?.name,
                img: pokemon?.sprites.other.dream_world.front_default,
                height: pokemon?.height,
                exp: pokemon?.base_experience,
                weight: pokemon?.weight,
                ability: pokemon?.abilities[0].ability.name


            })
            setLike(true)
        }
    }
    const  onClickArena = async () => {
        if(fighterPok) {
            await axios.delete(`${DB_Arena_URL}/${pokemon.id}`
            )
            setFighterPok(false)
        } else {
            if(fighterPok.lenght > 2) {
                return alert("Nie można już dodać pokemonów do Areny. Maksymalna ilość to dwa pokemony")

        } else {
            await axios.post(`${DB_Arena_URL}/`, {
                id: pokemon?.id,
                name: pokemon?.name,
                img: pokemon?.sprites.other.dream_world.front_default,
                height: pokemon?.height,
                exp: pokemon?.base_experience,
                weight: pokemon?.weight,
                ability: pokemon?.abilities[0].ability.name
            })
           
            }
            setFighterPok(true)
        }
    }
    const history = useHistory();
    
    return (
        
        <div className="card-container"> 
            <div className="container" onClick={() => history.push(`/${pokemon.name}`)}>
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
        </div>
        <div >
            <div className='like-container' ><S.FavIcon onClick={onClickFav}   isLiked={like}/></div> 
            <div className='like-container' ><S.FlashIcn onClick={onClickArena}    onFight={fighterPok}/></div> 
         </div>
         
    </div>
    );
}
 
export default Card;