import React from 'react'
import { Stopwatch2, StopwatchBtnRed, StopwatchBtnGre, StopwatchBtnYel } from './stopWatch.style';

function BtnComponent(props) {
    return (
        <Stopwatch2>
            
            <StopwatchBtnGre  onClick={props.start}>Start</StopwatchBtnGre>
            <StopwatchBtnRed  onClick={props.stop}>Stop</StopwatchBtnRed>
            <StopwatchBtnYel  onClick={props.reset}>Reset</StopwatchBtnYel>
            <StopwatchBtnGre onClick={props.resume}>Resume</StopwatchBtnGre>
                     
        </Stopwatch2>
    );
}

export default BtnComponent
 