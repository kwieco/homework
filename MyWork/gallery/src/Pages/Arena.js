
import React from 'react'
import { useHistory } from 'react-router'
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { Button, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';



const S ={
    Typography: styled(Typography) `
        margin: 12px;
        justify-content: 'center';
    `,

    Typography2: styled(Typography)`
       display: flex;
        align-content: flex-end;
        flex-direction: row;
        flex-wrap: wrap; 
        font-size: 35px;
    `,

};

    const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    height: 475,
    width: 250,
    color: theme.palette.text.secondary,
    }));

function Arena() {

    const history = useHistory()

        const Back = () => { 
            history.replace('/')}

    return (
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
            
            <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
                justifyContent="center"
            >
                <Item elevation='16'>Pokemon1</Item>
                <S.Typography2>VS</S.Typography2>
                <Item elevation='16'>Pokemon2</Item>
            </Stack>
        </>
    )
}

export default Arena
