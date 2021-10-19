import React from 'react'
import { Button, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import { useHistory } from 'react-router'


const S ={
    Typography: styled(Typography) `
        margin: 12px;
    `
};
function Favourites() {

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

            <h1>Favourites </h1>
        </div>
    )
}

export default Favourites
