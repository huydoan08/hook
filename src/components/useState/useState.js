import { useState } from 'react'

export default function UseState() {
const [text, setText] = useState('old text')
const [count, setCount] = useState(0)
const [info, setInfo] = useState({
	name: "doan van huy",
	age: 27
})

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
		<div>
			<p>{text}</p>
			<p className="mb-6 ml-10 mt-5 text-2xl">you click {count} time</p>
			<p className="mb-6 ml-10 mt-5 text-2xl">my info {JSON.stringify(info)} change</p>
			<button
			className="p-2 bg-blue-500 mr-4 rounded-lg"
			onClick={() => handleCount()}>click me</button>
			<button 
			 className="p-2 bg-red-500 mr-4 rounded-lg"
			 onClick={() => setText('new text')}>Change Text</button>
		</div>
	)
}
