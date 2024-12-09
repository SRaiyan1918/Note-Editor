import './StopWatch.css'
import React, {useState, useRef} from 'react';

function StopWatch() {
	const [time, setTime] = useState(0);
	const [isRunning, setIsRunning] = useState(false);
	const intervalRef = useRef(null);
	const [laps, setLaps] = useState([])

	const startStopWatch = ()=> {
		if (!isRunning) {
			setIsRunning(true)
			intervalRef.current = setInterval(()=>{
				setTime((prevTime) => prevTime +1)
			},1000)
		}
	}

	const stopStopWatch = ()=> {
		if (isRunning) {
			clearInterval(intervalRef.current)
			setIsRunning(false)
		}
	}

	const resetStopWatch = () => {
		clearInterval(intervalRef.current)
		setIsRunning(false)
		setTime(0)
		setLaps([])
	}

	const lapsStopWatch = () => {
		setLaps([...laps, time])
	}

	return (
		<div className='container'>
			<h1> StopWatch </h1>
			<div className='out-circle mx-auto'>
				<div className={`my-5 ${isRunning ? 'blink' : ''}`} id='circle'>
					<div className="fs-1 fw-bolder">{time}</div>
				</div>
			</div>
			<hr />
			<div className='container'>
				<div className='row my-5'>
					<div className='col mx-4 my-1'>
						<button className='btn btn-success my-2' onClick={startStopWatch}>Start</button>
						<button className='btn btn-warning my-2' onClick={stopStopWatch}>Stop</button>
					</div>
					<div className='col mx-4 my-1'>
						<button className='btn btn-primary my-2' onClick={lapsStopWatch}>Laps</button>
						<button className='btn btn-danger my-2' onClick={resetStopWatch}>Reset</button>
					</div>
				</div>
			</div>
			<div className='container'>
				<div>
				      {laps.length > 0 ? (
				        laps.map((lap, index) => (
					<div key={index}>
						<span>{lap}</span>
					</div>
				        ))
				      ) : (
				        <p className="text-center">No laps available</p>
				      )}
				 </div>
			</div>
		</div>
	)


}

export default StopWatch
