import React from 'react'
import styled from 'styled-components'

const AboutMe = styled.h2`
    border: 1px solid #000;
    background-color: grey;
`;

const about = () => {
    return (
        <div>
            <h1>ABOUT</h1>
            <AboutMe>Mam na imię Kamil. Mam 31 lat! Kiedyś było fajnie, studia i takie tam... nie to co tera! Praca praca praca !</AboutMe>
        </div>
    )
}

export default about
