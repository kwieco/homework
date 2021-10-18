import React, { useState } from   'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
// const Card = styled.span `
//     background-color: #fff;
//     color: #000;
//     display: grid;
//     align-items: center;
//     max-width: 325px;
// `

// const Picture = styled.img`
//     margin-bottom: 8px; 
//     border: 1px solid silver; 
//     background: black; 
//     padding: 4px;
//     border-radius: 3px;
//     box-shadow: 1px 1px 3px silver; 
//     `;

// const Frame = styled.div `
//     border: 1px solid black;
//     background: white; 
//     padding: 4px;
//     max-width: 300px;
//     box-shadow: 1px 1px 3px silver;
//     margin-bottom: 12px;
// `
// const TextData = styled.span`
//     display: flex;
//     flex-direction: column;
//     align-content: space-around;
//     flex-wrap: wrap;
// `;

function PokeCard( { data }) {
    console.log(data.url)
    const [pokemon, setPokemon] = useState(null);

    const fetchPokemonDetails = async => {

    }

    return (
        <>
            <div className="card-container"> 
            <div className="img-container"><img src={image} alt={name} /></div>
            <div className="title"><h2> {name}</h2></div>
            <div className='data-container'>

                {/* <div className="single-data">
                    <div className="single-data-box_1">{height}</div>
                    <div className="single-data-box_2">Height</div>
                </div>

                <div className="single-data">
                    <div className="single-data-box_1">{exp}</div>
                    <div className="single-data-box_2">Base Experiance</div>
                </div>

                <div className="single-data">
                    <div className="single-data-box_1">{weight}</div>
                    <div className="single-data-box_2">Weight</div>
                </div>

                <div className="single-data">
                    <div className="single-data-box_1">{ability}</div>
                    <div className="single-data-box_2">Ability</div>
                </div> */}
                
            </div>
            <div className='like-container'><FavoriteIcon color='error'/></div>
        </div>
    </>
    )
}

export default PokeCard