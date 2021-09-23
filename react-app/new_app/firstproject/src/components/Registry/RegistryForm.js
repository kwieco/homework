import { Box, Button, Input } from '@material-ui/core'
import axios from 'axios'
import React, { useState } from 'react'
import { Form } from '../Login/Login.styled'

function RegistryForm() {
    const url="http://localhost:3000/user/"
    const [data, setData] = useState({
        name: "",
        login: "",
        email: "",
        password: ""
    })

    // const updatedProfile = 
    //     {
    //         "name": "Robert2",
    //         "surname": "Tarkowski2",
    //         "login": "Robix90333",
    //         "email": "admdssdain@admin.pl",
    //         "password": "admasdasin"
    //       }
    const AddNewPerson = () => {
        const updatedProfile = 
        {
            "id": 99,
            "name": "Robert2",
            "surname": "Tarkowski2",
            "login": "Robix90333",
            "email": "admdssdain@admin.pl",
            "password": "admasdasin"
        }

        axios.post('http://localhost:3000/user', updatedProfile)
    }

    // function submit(e) {
    //     e.preventDefault();
    //     axios.post('http://localhost:3000/user', updatedProfile)
    //     .then(res=>{
    //         console.log(res.data)

    //     })

    // }

    // function handle(e) {
    //     const newData = {...data}
    //     newData[e.target.id] = e.target.value
    //     setData(newData)
    //     console.log(newData)

    // }
  return (
    <Box maxWidth={280} component="form" sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}noValidate autoComplete="off">
        <div >
        <form >
            {/* <Input onChange={(e)=>handle(e)} id="name" value={data.name} placeholder='name' type='text'></Input>
            <Input onChange={(e)=>handle(e)} id="login" value={data.login} placeholder='login' type='text'></Input>
            <Input onChange={(e)=>handle(e)} id="email" value={data.email} placeholder='email' type='email'></Input>
            <Input onChange={(e)=>handle(e)} id="password" value={data.password} placeholder='password' type='password'></Input> */}
            <Button variant="contained" color="secondary" onClick={AddNewPerson}>submit</Button>
        </form>
        </div>
    </Box>
  )
}
export default RegistryForm

