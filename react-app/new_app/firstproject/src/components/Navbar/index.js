import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavElements';
import logo from './logo.png';
import FaceIcon from '@material-ui/icons/Face';
import TimerIcon from '@material-ui/icons/Timer';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import LockOpenIcon from '@material-ui/icons/LockOpen';



const NavBar = () => (
    <>
        <Nav>
            <NavLink to='/'>
                <img src={logo} height='50' alt='logo'/>LOGO
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/about">
                    <FaceIcon  style={{ color: 'white', padding: 3,}}/>  About
                </NavLink>

                <NavLink to="/stoper">
                    <TimerIcon  style={{ color: 'white', padding: 3,}}/> Stoper
                </NavLink>

                <NavLink to="/counter">
                    <AddCircleOutlineIcon  style={{ color: 'white', padding: 3,}}/> Counter
                </NavLink>

                <NavLink to="/characters">
                    <RecentActorsIcon  style={{ color: 'white', padding: 3,}}/>  Characters
                </NavLink>

                <NavLink to="/login">
                    <LockOpenIcon  style={{ color: 'white', padding: 3,}}/> Login
                </NavLink>

            </NavMenu>

            <NavBtn>
                <NavBtnLink to='/signin'> Rejestracja</NavBtnLink>
            </NavBtn>
            
        </Nav>
    </>

);

export default NavBar

