

// usememo nhận đối số thứ nhất là 1 callback và trả ra giá trị của callback đó,
// giá trị này chỉ được thay đổi khi đối số thứ 2 là dependecies thay đổi
import React, { useMemo, useState } from 'react';
export default function UseMemo() {

const [drink, setDrink] = useState()
const [money, setMoney] = useState(100)
const [dark, setDark] = useState(false)

// first usememo
useMemo(() => {
	switch(money) {
		case 50:
			 setDrink('nước cam ép');
			 break
		case 100:
			setDrink(' sữa tươi ');
			break
		case 200:
			setDrink(' trà sữa ');
			break
		default:
			setDrink('cà phê');
			break
	}
}, [money])

// second useMemo
const themeStyles = React.useMemo(() => {
	return {
		color: dark ? 'white' : 'black',
		backgroundColor: dark ? 'gray' : 'white'
	}
}, [dark])
	return (
		<div className="m-20">
			<p>{drink}</p>
			<button onClick={() => setMoney(50)}>50</button>
			<button onClick={() => setMoney(200)}>200</button>
			<div style={themeStyles}>style</div>
			<button onClick={() => setDark(prev => !prev)}>Change theme</button> 
		</div>
	)
}
