import React from 'react'
import buldings from '../images/buldings.jpg'
import { Grid, Button } from '@material-ui/core'



const mainStyle = {
    backImage:{
        backgroundImage:`URL(${buldings})`,
        backgroundSize: 'cover',
        padding: 0,
        margin: 0,
        backgroundPosition: 'center',
        backgroundRepeat: "no-repeat",
        opacity: "0.8",


    },

    buttonPosition: {
        padding: 200,
        display: 'flex',
        justifyContent: 'center',
    }
}
function MainPageHeader() {
    return (
        <div style={mainStyle.backImage}>
                <Grid style={{textAlign: 'center'}}>
                    <h1>Follow your way!</h1>
                    <h2>Future is in your hands</h2>
                </Grid>

                <Grid style={mainStyle.buttonPosition}>
                    <Button  variant='contained' color='primary' size='large'>Kliknij i dowiedz się więcej!
                        
                    </Button>
                </Grid>
                        

           
        </div>
    )
}

export default MainPageHeader
