// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
// import { Button, Grid } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//     root: {
//       '& > *': {
//         margin: theme.spacing(1),
//         width: '25ch',
//         display: 'flex',
//         justifyContent: 'center',
//         flexWrap: 'nowrap',
//         flexDirection: 'column',
//         alignContent: 'sapce-around',
//         alignItems: 'center',
//       },
//     },
//   }));

//   const FormStyle = {
//       style: {
//         display: 'flex',
//         justifyContent: 'center',
//         flexWrap: 'nowrap',
//         flexDirection: 'column',
//         alignContent: 'sapce-around',
//         alignItems: 'center',
        
//       }
//   };

//     const GridStyle = {
//         style: {
//         padding: 19,
//         display: 'flex',
//         justifyContent: 'center',
//         }
//     }

// const Registry = () => {

//     const classes = useStyles();

//     return (
//         <div>
//             <h1>Zarejestruj się</h1>
//             <form style={FormStyle.style} className={classes.root} noValidate autoComplete="off">
//               <TextField label="Name" variant="outlined" />
//               <TextField label="Surname" variant="outlined" />
//               <TextField label="E-mail" variant="outlined" type="email"/>
//               <TextField label="Password" variant="outlined" type="password"
//                   autoComplete="current-password"/>
//               <TextField label="Repeat pass" variant="outlined" />

//             </form>
//             <Grid style={GridStyle.style}>
//                 <Button style={FormStyle.style} variant='contained'color='secondary'>Zarejestruj!
//                 </Button>
//             </Grid>
    
//         </div>
//     )
// }

// export default Registry
// import axios from "axios";
// import React, {useState, useEffect } from "react";

// const baseURL = " http://localhost:3000";

// export default function App() {
//   const [post, setPost] = useState(null);

//   useEffect(() => {
//     axios.get(`${baseURL}`).then((response) => {
//       setPost(response.data);
//     });
//   }, []);

//   function createUser() {
//     axios
//       .post(baseURL, {
//         user: "sadasd",
//         password: "asdfghjkl"
//       })
//       .then((response) => {
//         setPost(response.data);
//       });
//   }

//   if (!post) return "No post!"

//   return (
//     <div>
//       <h1>{post.login}</h1>
//       <p>{post.login}</p>
//       <button onClick={createUser}>Create User</button>
//     </div>
//   );
// }

// {
//   "name": "Robert",
//   "surname": "Tarkowski",
//   "login": "Robix90",
//   "login": "admin@admin.pl",
//   "password": "admin"
// }

import axios from 'axios'
import React from 'react'
import RegistryForm from '../components/Registry/RegistryForm'

function Registry() {
  return (
    <div>
     <RegistryForm />
    </div>
  )
}
export default Registry

