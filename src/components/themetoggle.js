import { useContext } from "react";
import { ThemeContext } from './themecontext';

export default function ThemeToggle() {
	const { toggleTheme } = useContext(ThemeContext)

	return <div onClick={toggleTheme}>
		<button>Toggle theme</button>
	</div>
}