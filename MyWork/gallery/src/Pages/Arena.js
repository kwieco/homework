import { Button, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import React from 'react'
import { useHistory } from 'react-router'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const S ={
    Typography: styled(Typography) `
        margin: 12px;
    `
};

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Arena() {

    const history = useHistory()

        const Back =() => { 
            history.replace('/')}

    return (
        <> 
            <S.Typography
                variant="h6"
                align='center'
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
                <Button variant="contained" onClick={Back} >Back to Pokemon list</Button>
            </S.Typography>
            <h1>ARENA</h1>
            <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={4}>
                <Item>xs=8</Item>
                </Grid>
                <Grid item xs={4}>
                <Item>xs=4</Item>
                </Grid>
                <Grid item xs={4}>
                <Item>xs=4</Item>
                </Grid>
                <Grid item xs={8}>
                <Item>xs=8</Item>
                </Grid>
            </Grid>
            </Box>
        </>
    )
}

export default Arena
