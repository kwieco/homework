import { Container, Paper, Grid } from '@material-ui/core'
import React from 'react'
import me from '../images/me.png'
import drangonballBack from '../images/dragonballBack.png'
import { maxWidth } from '@material-ui/system'

const mainStyle = {
    backImage:{
        backgroundImage:`URL(${drangonballBack})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover',
    },
    mainImage: {
        borderRadius: 140,},
    linkStyle: {
        textDecoration: 'none', 
        color: 'black',
    }}

const About = () => {
    return (
        <div >
            <h1>ABOUT</h1>
            <Container size='sm' style={mainStyle.backImage}>
                <Grid style={{display: 'flex'}}>
                    <img src={me} style={mainStyle.mainImage}  alt='AboutMe' />
                    <h2>Cześć! Mam na imię Kamil. Strona na której się znajdujesz była wykonana
                         jako pierwszy projekt React podczas nauki kursu w firmie <a href="http://www.devstock.pl" style={mainStyle.linkStyle}>DevStock</a>.</h2>
                    
                </Grid>
            </Container>
            
        </div>
    )
}

export default About
