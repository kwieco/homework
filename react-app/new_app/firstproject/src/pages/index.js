import React from 'react'
import Button from '@material-ui/core/Button'
import buldings from '../images/buldings.jpg'
import { Container, Grid, Paper } from '@material-ui/core'
import { height } from '@material-ui/system'
import { CoverageMap } from 'istanbul-lib-coverage'


// const styles = {
//     paperContainer: {
//         backgroundImage: `url(${"static/src/img/main.jpg"})`
//     }
// };

// export default class Home extends React.Component{
//     render(){
//         return(
//             <Paper style={styles.paperContainer}>

//             </Paper>

const stylee = {
    backImage:{
        backgroundImage:`URL(${buldings})`,
        width: 1232,
        height: 512,
        backgroundSize: 'contain',
        padding: 0,
        margin: 0,
        backgroundPosition: 'center',
        backgroundRepeat: "no-repeat",
        opacity: "0.8",


    }
}
function Home() {
    return (
        <Container style={stylee.backImage}>
                <Button variant='outlined' color='primary'>Kliknij i dowiedz się więcej!</Button>
                <Grid>
                    <Paper></Paper>
                </Grid>
                
        </Container>
    )
}

export default Home
