
import React from 'react'
import './PokeCardStyle.css';


const FavCard = ({pokemon}) => {
    console.log(pokemon ,'pokemon')
    return (
        <>
        <div className="card-container">
            
                <div className="img-container" ><img src={pokemon.img} alt={pokemon.name} /></div>
                <div className="title"><h2> {pokemon.name}</h2></div>
                <div className='data-container'>

                <div className="single-data">
                    <div className="single-data-box_1">{pokemon.height}</div>
                    <div className="single-data-box_2">Height</div>
                </div>

                    <div className="single-data">
                        <div className="single-data-box_1">{pokemon.exp}</div>
                        <div className="single-data-box_2">Base Experiance</div>
                    </div>

                    <div className="single-data">
                        <div className="single-data-box_1" >{pokemon.weight}</div>
                        <div className="single-data-box_2">Weight</div>
                    </div>

                    <div className="single-data">
                        <div className="single-data-box_1">{pokemon.ability}</div>
                        <div className="single-data-box_2">Ability</div>
                    </div>
                    
                </div>
               
        </div>
    </>
    )
}

export default FavCard
