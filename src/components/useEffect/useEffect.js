import { useEffect, useState } from "react";
import { Button } from '@material-ui/core';

export default function UseEffect() {
	const [count, setCount] = useState(0)
	const [info, setInfo] = useState({
		name: "doan van huy",
		age: 27
	})
	const [action, setAction] = useState('')
	const [height, setHeight] = useState({height: false})
	
	useEffect(() => {
		console.log("useEffect runed")
	}, [count, action])

	

	useEffect(() => {	
		function handleShowText() {
			setHeight(!height)
			console.log(height)
		}	
			const btn = document.getElementById('btn')
			btn.addEventListener('keyup', handleShowText)
			return () => btn.removeEventListener('keyup', handleShowText)
	}, [height])

	function handleCount() {
		setCount(count + 1)
		setInfo(prev => {
			// do logic here
			return {
			...prev, 
			bio: "yeu mau hong"
		}})
	}
	return (
		<div className="ml-10">
			<p className="mb-6 ml-10 mt-5 text-2xl">you click {count} time</p>
			<p className="mb-6 ml-10 mt-5 text-2xl">my info {JSON.stringify(info)} change</p>
			<button
			className="p-2 bg-blue-500 mr-4 rounded-lg"
			onClick={() => setCount(handleCount)}>click me</button>
			<button
			className="p-2 bg-green-500 mr-4 rounded-lg"
			onClick={() => setAction('user')}>user</button>
			<button
			className="p-2 bg-red-500 mr-4 rounded-lg"
			onClick={() => setAction('comment')}>comment</button>
			<Button id="btn" variant="outlined">Listen Dom event</Button>
			{height && <p className="text-red-700">show</p>}
		</div>
	)
}