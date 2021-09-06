import styled from 'styled-components';
import { NavLink as Link} from 'react-router-dom';
import  {FaBars} from 'react-icons/fa'

export const Nav = styled.div`
    background: #000;
    height: 50px;
    width: 100%;
    display: flex;
    position: sticky;
    justify-content: space-between;
    padding: 12px;
    z-index: 225px;     
`
 
export const NavLink = styled(Link)`
    color: #FFFF00;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:hover {
        color: 'blue';
    }
`
export const Bars = styled(FaBars)`
    display: none;
    color: #FFFFFF;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 25px;
        left: 20%;
        transform: translate (100% , 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
` 

export const NavMenu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    justify-content: right;
    align-items: center;
    margin-right: 24px;
`


export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #FFFF00;
    padding: 10px 22px;
    color: #000;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 1s ease-in-out;
    text-decoration: none;


    &:hover {
        transition: all 0.3s ease-in-out;
        background: #fff;
        color: #010606;
    }
    `;