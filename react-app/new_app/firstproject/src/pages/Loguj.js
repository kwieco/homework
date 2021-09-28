import { Button } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Body, LoginPanelStyle } from '../components/Login/Login.styled';
import LoginForm from '../components/Login/LoginForm';

function Loguj() {

    const [user, setUser] = useState(null);
    const [error, setError] = useState("");
    const [usersFromDataBase, setUsersFromDataBase] = useState([]);
    const history = useHistory()
    useEffect(() => {
        axios.get('http://localhost:3000/user')
            .then(result => {
                console.log(result.data, 'result')
                setUsersFromDataBase(result.data)
            })
    }, [])

    const Login = details => {
        const choosenUser = usersFromDataBase.find(singleElementFromDb => singleElementFromDb.email === details.email && singleElementFromDb.password === details.password) 
        if (choosenUser ) {
            setUser( {
                name: choosenUser.name,
                email: choosenUser.email,
            })
        } else {
            setError('Bad email or password')

        }
            
    }
    const Logout =() => { 
        setUser(null)
        history.replace('/')
    }
    return (
        <Body>
            <LoginPanelStyle>
             { user ? (                
                <div className='welcome'>  
                <h2>Welcome, <span>{user.name}</span>
                </h2>
                 <Button variant='outlined'color="secondary" onClick={Logout}>Logout</Button>  
             </div>) : (
                 <LoginForm  Login={Login} error={error} />
             )}
        </LoginPanelStyle>
        </Body>
    )
}

export default Loguj
