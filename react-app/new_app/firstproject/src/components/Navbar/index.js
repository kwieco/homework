import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavElements';
import logo from './logo.png';

const NavBar = () => (
    <>
        <Nav>
            <NavLink to='/'>
                <img src={logo} alt='logo'/>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/about">
                    About
                </NavLink>

                <NavLink to="/stoper">
                    Stoper
                </NavLink>

                <NavLink to="/counter">
                    Counter
                </NavLink>

                <NavLink to="/characters">
                    Characters
                </NavLink>

                <NavLink to="/login">
                    Login
                </NavLink>

            </NavMenu>

            <NavBtn>
                <NavBtnLink to='/signin'> Rejestracja</NavBtnLink>
            </NavBtn>
            
        </Nav>
    </>

);

export default NavBar

