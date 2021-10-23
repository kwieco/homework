
import React, {useState} from 'react'
import './ArenaCardStyle.css';

   

function ArenaCard({img, name, height, weight, ability, exp, winner})  {
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null)
    return (
        <>
        <div>
            {loading && <h1>Waiting for pokemon details...</h1>}
            {error && <h1>Error</h1>}
        </div>
            {img &&
            <div className='card-container2'>
                
                    <div className="img-container" ><img src={img} alt='pokemon'/></div>
                    <div className="title"><h2>{name}</h2></div>
                    <div className='data-container'>

                    <div className="single-data">
                        <div className="single-data-box_1">{height}</div>
                        <div className="single-data-box_2">Height</div>
                    </div>

                        <div className="single-data">
                            <div className="single-data-box_1">{exp}</div>
                            <div className="single-data-box_2">Base Experiance</div>
                        </div>

                        <div className="single-data">
                            <div className="single-data-box_1" >{weight}</div>
                            <div className="single-data-box_2">Weight</div>
                        </div>

                        <div className="single-data">
                            <div className="single-data-box_1">{ability}</div>
                            <div className="single-data-box_2">Ability</div>
                        </div>
                        
                    </div>
                
            </div>}
        
    </>
    )
}

export default ArenaCard

