import { Box, Button, Container, Grid, Input } from '@material-ui/core'
import axios from 'axios'
import React, { useState } from 'react'


function RegistryForm() {
    const url="http://localhost:3000/user"
    const [data, setData] = useState(
        {
        name: "",
        login: "",
        email: "",
        password: ""
    })

    function submit(e) {
        e.preventDefault();
        axios.post('http://localhost:3000/user', data)
        .then(res=>{
            console.log(res.data)

        });

    }

    function handle(e) {
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)

    }
  return (
    <Box maxWidth={550} style={{display: 'contents'}}component="form" sx={{'& .MuiTextField-root': { m: 2, width: '500' },}}noValidate autoComplete="off">
        <Container justifyContent="center" >
            <Grid   container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"> 
            <h1>Zarejestruj się</h1>
        <form >
            <h2>Imię: </h2> <Input onChange={(e)=>handle(e)} id="name" value={data.name} placeholder='name' type='text'></Input>
            <h2>Login: </h2><Input onChange={(e)=>handle(e)} id="login" value={data.login} placeholder='login' type='text'></Input>
            <h2>E-mail: </h2><Input onChange={(e)=>handle(e)} id="email" value={data.email} placeholder='email' type='email'></Input>
            <h2>Hasło: </h2><Input onChange={(e)=>handle(e)} id="password" value={data.password} placeholder='password' type='password'></Input>
    
           
           
        </form>

        <Button style={{margin: 12}} variant="contained" color="secondary" onClick={(e)=>submit(e)}>submit</Button>
        </Grid>
        </Container>
    </Box>
  )
}
export default RegistryForm

