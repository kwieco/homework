import { Container, Grid, Paper, makeStyles, Typography } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import React from 'react'


const CardInfo = [
    {
    id: 1,
    title: 'About',
    path: '/about',
    description: 'Something about me...',
  },
  {
    id: 2,
    title: 'Stoper',
    path: '/stoper',
    description: 'Check me stopwatch...',
  },
  {
    id: 3,
    title: 'Counter',
    path: '/counter',
    description: 'Count something...',
  },
  {
    id: 4,
    title: 'Characters',
    path: '/characters',
    description: 'Rick and Morthy characer list...',
  },
  {
    id: 5,
    title: 'Login',
    path: '/login',
    description: 'Open you account...',
  },
  {
    id: 6,
    title: 'Register',
    path: '/registry',
    description: 'Join us...',
  },
]

    const useStyles = makeStyles({
      mainContainer: {
        padding: '50px',
       
      },
      title: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: 'yellow',
      },
      description: {
        marginBottom: '1rem',
        color: "white",
      },
      link: {
        textDecoration: 'none',
        color: "white",
      },
      paper: {
        height: '90%',
        margin: '20px',
        textAlign: 'center',
        backgroundColor: 'black',
        color: "white",
        boxShadow:
          'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
        opacity: .8,

        '&:hover': {
          boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 5px',
          transition: '0.3s',
          opacity: 1,
        },
      },
    })

    


function MainPageCards() {

    const classes = useStyles()
  
    const showCard = CardInfo.map(({ id, title, path, description }) => (
      <Grid className={classes.gridItem} item key={id} xs={12} sm={6} md={4} lg={4} xl={4}>
        <NavLink className={classes.link} to={path}>
          <Paper className={classes.paper} >
            <Typography className={classes.title} color={'primary'}>
              {title}
            </Typography>
            <Typography className={classes.description}>{description}</Typography>
          </Paper>
        </NavLink>
      </Grid>
    ))

  return (
    <Container>
			<Grid container className={classes.mainContainer}>
				{showCard}
			</Grid>
		</Container>
  )
}

export default MainPageCards
