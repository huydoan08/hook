import { useState, createContext } from "react";

export const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
  // state
  const [theme, setTheme] = useState({
    isLightTheme: false,
    light: {
      background: "rgb(240, 240, 240)",
      color: "black",
    },
    dark: {
      background: "rgb(39, 39, 39)",
      color: "white",
    },
  });

  // function to toggle theme

  function toggleTheme() {
    setTheme({
      ...theme,
      isLightTheme: !theme.isLightTheme,
    });
  }

  // context data

  const themeContextData = {
    theme,
    toggleTheme,
  };

  //theme Provider

  return (
    <ThemeContext.Provider value={themeContextData}>
      {children}
    </ThemeContext.Provider>
  );
}
