import React, { useState } from 'react'
import MovingBall from './MovingBall'

export default function App() {
	const [playing, setPlaying] = useState(true)
	const [speed, setSpeed] = useState(180)
	const [dir, setDir] = useState(1)
	const [size, setSize] = useState(40)

	function reset() {
		// toggle play to reset position in child by remount
		setPlaying(false)
		setTimeout(() => setPlaying(true), 10)
	}

	return (
		<div className="page">
			<h1>Moving Ball</h1>

			<div className="controls">
				<button onClick={() => setPlaying((p) => !p)}>{playing ? 'Pause' : 'Play'}</button>
				<button onClick={() => setDir((d) => -d)}>Direction: {dir > 0 ? '→' : '←'}</button>
				<button onClick={reset}>Reset</button>
				<label className="control">
					<span>Speed: {Math.round(speed)} px/s</span>
					<input
						type="range"
						min="30"
						max="600"
						value={speed}
						onChange={(e) => setSpeed(Number(e.target.value))}
					/>
				</label>
				<label className="control">
					<span>Size: {size}px</span>
					<input type="range" min="20" max="120" value={size} onChange={(e) => setSize(Number(e.target.value))} />
				</label>
			</div>

			<MovingBall key={size + '-' + dir} speed={speed} playing={playing} direction={dir} size={size} />

			<p>Controls: play/pause, change speed and direction, reset position.</p>
		</div>
	)
}
