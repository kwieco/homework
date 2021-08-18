import React from 'react'
import { Stopwatch, TimerBox } from './stopWatch.style';


function DisplayComponent(props) {
    return (
        <Stopwatch>
            <TimerBox>{(props.time.h >= 10)? props.time.h : '0'+ props.time.h}</TimerBox> &nbsp;:&nbsp;
            <TimerBox>{(props.time.m >= 10)? props.time.m : '0'+ props.time.m}</TimerBox> &nbsp;:&nbsp;
            <TimerBox>{(props.time.s >= 10)? props.time.s : '0'+ props.time.s}</TimerBox> &nbsp;:&nbsp;
            <TimerBox>{(props.time.ms >= 10)? props.time.ms : '0'+ props.time.ms}</TimerBox> 
        </Stopwatch>
    )
}

export default DisplayComponent
 