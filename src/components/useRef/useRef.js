import React, { useRef, useEffect, useState } from 'react'
import { Button } from '@material-ui/core'

// Tính năng truy vấn đến một phần tử DOM
export default function UseRef() {
	const [value, setValue] = useState()
	const inputRef = useRef(null)
	console.log(inputRef.current)
	console.log('log thu nhat')
	useEffect(() => {
		console.log('log thu hai')
	})
	useEffect(() => {
		console.log('dong log thu tu')
		return () => {
			console.log('dong log thu name')
		}
	}, [])
	console.log('log thu ba')
	
	function focus() {
		inputRef.current.focus()
		console.log(inputRef.current.value)
	}
	
	return (
		<div>
			<input className="bg-gray-300" type="text" ref = {inputRef}/>
			<Button onClick={() => focus()}>Click button</Button>
		</div>
	)
}
