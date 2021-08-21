import styled from 'styled-components';

export const Body = styled.body`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;

`
export const LoginPanelStyle = styled.span`
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: yellow;
`
 
export const Form = styled.form`
    display: block;
    position: relative;
    width: 50%;
    color: #000;
    
`
export const Stopwatch = styled.div `
    padding: 60px 0px 0px 0px;
    text-align: center;
`

export const Stopwatch2 = styled.div `
    padding: 20px 0px;
    text-align: center;
`
export const TimerBox = styled.span `
        background: #00aba9;
        color: white;
        display: inline-block;
        font-family: monospace;
        font-size: 22px;
        padding: 20px;
        border-radius: 5px;
         width: 70px;
`


export const StopwatchBtnYel = styled.button`
    background: white;
    margin-top: 30px;
    margin-left: 5px;
    padding: 12px 20px;
    font-size: 16px;
    text-transform: uppercase;
    width: 150px;
    transition: background 1s;
    cursor: pointer;
    border: 2px solid #ffc900;
  

    &:hover {
     background: #ffc900;
     border: 2px solid #ffc900;
     color: #fff;
    }
    `
    export const StopwatchBtnGre = styled.button`
    background: white;
    margin-top: 30px;
    margin-left: 5px;
    padding: 12px 20px;
    font-size: 16px;
    text-transform: uppercase;
    width: 150px;
    transition: background 1s;
    cursor: pointer;
    border: 2px solid #00aba9;
  

    &:hover {
     background: #00aba9;
     border: 2px solid #00aba9;
     color: #fff;
    }
    `
    export const StopwatchBtnRed = styled.button`
    background: white;
    margin-top: 30px;
    margin-left: 5px;
    padding: 12px 20px;
    font-size: 16px;
    text-transform: uppercase;
    width: 150px;
    transition: background 1s;
    cursor: pointer;
    border: 2px solid #c85454;
  

    &:hover {
     background: #c85454;
     border: 2px solid #c85454;
     color: #fff;
    }
    `
