import React, {useState} from 'react'
import styled from 'styled-components'


const ValueComponent = styled.span`
    display: flex;
    
    background: linear-gradient(to bottom, #000000 0%, #ffff00 100%);
    margin-top:20px;  
    padding: 20px;
    width: 50px;
    height: 50px;
    justify-content: center;
    align-items: center;
    font-family: sans-serif;
    font-size: 24px;

    `
    
const ButtonComponent = styled.div`
    justify-content: center;
    font-family: sans-serif;
    font-size: 24px;

    `   
const Button = styled.button`
    background-color: #000;
    color: #ffff00;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid black;
    border-radius: 3px;

    &:hover {
        background-color: #ffff00;
        color: #000;
    }
    `
    

function CounterComponent( { defaultValue = 0, step = 1 }) {

    const [value, setValue] = useState(defaultValue)

    const minus = () => {
        setValue(value - step)
    }

    const add = () => {
        setValue(value + step)
    }

    const reset = () => {
        setValue(0)
    }
    


    return (
        <>

            <ValueComponent>{value}</ValueComponent>

            <ButtonComponent> 

                <Button onClick={minus} id='minus'> - </Button>

                <Button onClick={reset} id='reset'> Reset </Button>

                <Button onClick={add} id='add'> + </Button>

            </ButtonComponent>
        </>
    )
}

export default CounterComponent
