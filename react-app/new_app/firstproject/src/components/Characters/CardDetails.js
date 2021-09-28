import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'


const Cards = styled.div `
    background-color: #fff;
    color: #000;
    display: flex;
    align-items: center;
    max-width: 750;
`
const Frame = styled.div `
    border: 1px solid black;
    background: white; 
    padding: 4px;
    max-width: 300px;
    box-shadow: 1px 1px 3px silver;
    margin-bottom: 12px;
`
const TextData = styled.span`
    display: flex;
    flex-direction: column;
    align-content: space-around;
    flex-wrap: wrap;
    font-size: 23px;
`;


export default function CardDetails() {
    let { id } = useParams();
    const [characterDetails, setCharacterDetails] = useState('')

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(response => response.json())
            .then(data => setCharacterDetails(data))
            },[id])

    // useEffect(() => {
    //     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    //     // .then(res => res.json())
    //     .then(res => console.log(res.data, 'res'))
    //     .then(res => setCharacterDetails(res.data))


    // }, [id])


    console.log(characterDetails ,'selectStatus')
    // let {image, name, orgin, location, species, gender, status} = characterDetails;
    // const  { image } = characterDetails
    return (
        <div>
            <h2> Character Details - {id} </h2>
            <Link to={`/characters`}> Go Back</Link>

            <Cards >
                <Frame>
                    <img src={characterDetails.image} alt={characterDetails.name}></img>
                </Frame>
                <TextData >

                        <TextData>Name: {characterDetails.name}</TextData>
                        <TextData>Species: {characterDetails.species}</TextData>
                        <TextData>Gender: {characterDetails.gender}</TextData>
                        <TextData>Status: {characterDetails.status}</TextData>

                </TextData>



            </Cards>
        </div>
    )
}
