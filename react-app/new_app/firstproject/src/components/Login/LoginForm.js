import React, { useState } from 'react'
import {Form,} from '../Login/Login.styled'
import LockIcon from '@material-ui/icons/Lock';



function LoginForm( { Login, error }) {


    const [details, setDetails] = useState({name:"", email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    
    }

    return (
       <Form onSubmit={submitHandler}>
           <div className='formular'>
               <h2> <LockIcon style={{paddingLeft: 3}}/> LOGIN</h2>
               {(error !== "") ? (<div className='error'>{error}</div>) : ""}

                <div className='formular-box'>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' name='email' id='email' onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
                </div>

                <div className='formular-box'>
                    <label htmlFor='pass'>Password:</label>
                    <input type='password' name='password' id='password' onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
                </div>

           <input type="submit" value="Login" />
           
           </div>
       </Form>
    )
}

export default LoginForm
