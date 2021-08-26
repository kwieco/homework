import React from 'react'
import buldings from '../images/buldings.jpg'
import { Grid, Button } from '@material-ui/core'



const mainStyle = {
    backImage:{
        backgroundImage:`URL(${buldings})`,
        width: 1333,
        height: 512,
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
            
                <Grid style={mainStyle.buttonPosition}>
                    <Button  variant='contained' color='primary' size='large'>Kliknij i dowiedz się więcej!
                        
                    </Button>
                </Grid>
                        

           
        </div>
    )
}

export default MainPageHeader
