import { Card, CardContent, Typography, Paper, CardMedia, CardActions, Button, Icon  } from '@mui/material'
import { Box, styled } from '@mui/system'
import { green } from '@mui/material/colors';
import React, { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { pink } from '@mui/material/colors';
import './PokeCardStyle.css'


const PokeList = ({image, name, height, exp, weight, ability}) => {
    
    const [like, setLike] = useState(1)


    return (
        
        <div className="card-container"> 
            <div className="img-container"><img src={image} alt={name} /></div>
            <div className="title"><h2> {name}</h2></div>
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
                    <div className="single-data-box_1">{weight}</div>
                    <div className="single-data-box_2">Weight</div>
                </div>

                <div className="single-data">
                    <div className="single-data-box_1">{ability}</div>
                    <div className="single-data-box_2">Ability</div>
                </div>
                
            </div>
            <div className='like-container'><FavoriteIcon sx={{ color: pink[500] }}/></div>
        </div>
    )
}

export default PokeList
