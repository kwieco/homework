import styled from 'styled-components';

export const Body = styled.body`
    background: #000;
    margin: 0px;

`
export const MainSections = styled.div`
    background: transparent;
    max-width: 750px;
    width: 90%;
    height: 500x;
    margin: 30px auto;
`
 
export const ClockHolder = styled.div`
    width: 100%;
    margin: 30px auto;
    padding-top: 20px;
    position: relative;
`
export const Stopwatch = styled.div `
    margin: 60px;
    padding: 30px;
    text-align: center;
    border: 2px solid #FFF;
`

export const Stopwatch2 = styled.div `
    padding: 0px 0px;
    text-align: center;
`
export const TimerBox = styled.span `
        background: #FFFF00;
        color: black;
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
    font-weight: 700;
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
    font-weight: 700;
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
    font-weight: 700;
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
