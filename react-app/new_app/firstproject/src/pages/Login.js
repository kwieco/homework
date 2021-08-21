import React, { useState } from 'react'
import LoginForm from '../components/Login/LoginForm';
import {Body, LoginPanelStyle} from '../components/Login/Login.styled'

function LoginPanel() {
    const adminUser = {
        email: "admin@admin.pl",
        password: "admin",
    };

     const [user, setUser] = useState({name: "", email: ""});
     const [error, setError] = useState("");

     const Login = details => {

         if (details.email == adminUser.email && details.password == adminUser.password) {
            setUser({
                name: details.name,
                email: details.email,
            });
        } else {
            setError("Bad email or password")
        }
     }

    const Logout = () => {
        setUser({ name: "", email: ""});
    }

    return (
        <Body>
        <LoginPanelStyle>
            { (user.email != "") ? ( 
            <div className='welcome'>  
                <h2>Welcome, <span>{user.name}</span>
                </h2>
                <button onClick={Logout}>Logout</button>  
            </div> ) : (
                <LoginForm  Login={Login} error={error} />
            )}
        </LoginPanelStyle>
        </Body>
    );
    
    }
export default LoginPanel