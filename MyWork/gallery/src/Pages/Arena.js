import React, {useState, useEffect } from 'react'
import { useHistory} from 'react-router'
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { Button, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';
import ArenaCard from '../components3/Card/ArenaCard';


 

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

    const db_arena_url = 'http://localhost:3000/arena' 
 
function Arena() {

    const [pokemonData, setPokemonData] = useState([])
    const [winner, setWinner] = useState('')
    const [show, setShow] = useState(false);

    const arenaPokemon = async () => {
        const result = await fetch(db_arena_url);
        const data = await result.json();
        setPokemonData(data)
    }
      
        useEffect(() => {
            arenaPokemon();
        }, [])
        

    const history = useHistory()

        const Back = () => { 
            history.replace('/')}
    
    const  fight = () => {
        
        if(pokemonData.length <2) { return alert("Muszą być dwa pokemony")
        } else {
            if(pokemonData[0].exp*pokemonData[0].weight >= pokemonData[1].exp*pokemonData[1].weight) 
            {
                return setWinner(pokemonData[0].name)
                
                        
            } else
            {    
                return setWinner(pokemonData[1].name)
            }
            
            
        }
        
    }
    
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
                    <Item elevation='16'>
                

                    <ArenaCard 
                    img={pokemonData[0]?.img}
                    name={pokemonData[0]?.name}
                    exp={pokemonData[0]?.exp}
                    height={pokemonData[0]?.height}
                    weight={pokemonData[0]?.weight}
                    ability={pokemonData[0]?.ability}
     
                    />

            
                        
                    </Item>
                    <S.Typography2>VS</S.Typography2>
                    <Item elevation='16'>
                        
                    <ArenaCard 
                    img={pokemonData[1]?.img}
                    name={pokemonData[1]?.name}
                    exp={pokemonData[1]?.exp}
                    height={pokemonData[1]?.height}
                    weight={pokemonData[1]?.weight}
                    ability={pokemonData[1]?.ability}
        
                    />

                    </Item>
                </Stack>
                <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
                justifyContent="center"
                margin='30px'
            >
                <Button onClick={fight} variant="contained" size="large" endIcon={<SendIcon />}>
                        FIGHT!
                </Button>
                
                
                </Stack>
                <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
                justifyContent="center"
                margin='30px'
            ><S.Typography2>Wygrywa: {winner} </S.Typography2>
            </Stack>
                
        </>
    )
}

export default Arena