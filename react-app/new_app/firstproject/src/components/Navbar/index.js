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
                <NavLink to="/about" activeStyle>
                    About
                </NavLink>

                <NavLink to="/stoper" activeStyle>
                    Stoper
                </NavLink>

                <NavLink to="/counter" activeStyle>
                    Counter
                </NavLink>

                <NavLink to="/characters" activeStyle>
                    Characters
                </NavLink>

            </NavMenu>

            <NavBtn>
                <NavBtnLink to='/signin'> Sing In</NavBtnLink>
            </NavBtn>
        </Nav>
    </>

);

export default NavBar

