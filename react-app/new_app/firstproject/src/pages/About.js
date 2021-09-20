import { Container, Grid } from '@material-ui/core'
import React from 'react'
import me from '../images/me.png'
import drangonballBack from '../images/dragonballBack.png'



const mainStyle = {
    backImage:{
        backgroundImage:`URL(${drangonballBack})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover',
        display: 'flex',
        
    },
    mainImage: {
        borderRadius: 140
    },
}

const person = {
    name: 'Kamil',
    surname: 'Kwiecień',
    age: '31',
    description: `Cześć! Strona na której się znajdujesz była wykonana jako pierwszy projekt React podczas nauki kursu w firmie DevStock.`,
    
}

const About = () => {
    const {name, surname, age, description } = person
    const myBio = `${name} ${surname}, ${age} lat`

    const text =` ${description}`
    
    return (
        <div >
            <h1>ABOUT</h1>
            <Container size='sm' style={mainStyle.backImage}>
            <img src={me} style={mainStyle.mainImage} alt='AboutMe' />
                <Grid style={{  display: 'flex',
                                alignContent: 'space-evenly',
                                alignItems: 'stretch',
                                justifyItems: 'stretch',
                                flexWrap: 'wrap',
                                flexDirection: 'column',}}>
                    
                    
                    <h2 >{text}</h2>
                    <h2 style={{textAlign: 'right'}}>{myBio} </h2>
                    
                </Grid>
            </Container>
            
        </div>
    )
}

export default About
