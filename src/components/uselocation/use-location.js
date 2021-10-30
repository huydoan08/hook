import { useLocation } from "react-router-dom";
export default function UseLocation() {
	const location = useLocation();
	console.log(location)
	const atLocationPage = location.pathname === '/uselocation';
	return atLocationPage && 
		<h1>UseLocation hook component {location.pathname}</h1>
	}