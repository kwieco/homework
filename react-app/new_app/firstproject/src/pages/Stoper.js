import React, {useState} from 'react';
import DisplayComponent from '../components/stopwatch/DisplayComponent';
import BtnComponent from '../components/stopwatch/BtnComponent';
import { MainSections, ClockHolder, Body} from '../components/stopwatch/stopWatch.style';


function Stoper () {
	const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
	const [interval, setInt] = useState();
	

	const start = () => {
		run();
		setInt(setInterval(run,10));
	};

	const stop = () => {
		clearInterval(interval);

	};

	const reset = () => {
		clearInterval(interval);
		setTime({ms:0, s:0, m:0, h:0}) 
	};

	const resume = () => start();
	let updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;
 
	const run = () => {
		if (updatedM === 60) {
			updatedH++;
			updatedM = 0;
		}
		if (updatedS === 60) {
			updatedM++;
			updatedS = 0;
		}
		if (updatedMs === 100) {
			updatedS++;
			updatedMs = 0;
		}
		updatedMs++;
		return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH});
	};
    return (
		<Body>
        <MainSections>
			<ClockHolder>
					<DisplayComponent time={time}  />
					<BtnComponent start={start}  stop={stop} resume={resume} reset={reset}/>
			</ClockHolder>

        </MainSections>
		</Body>
    )
}

export default Stoper;
