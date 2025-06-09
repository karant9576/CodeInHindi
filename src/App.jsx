

import './App.css'
 import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/footer'
import SlidingCards from './components/Slidingcard'
import { useState, useMemo } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeToggle = () => {
    setDarkMode((prev) => !prev);
    document.body.style.background = !darkMode ? "#181c31" : "#fff";
    document.body.style.color = !darkMode ? "#fff" : "#000";
  };

  // Dynamically create the MUI theme based on darkMode
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          ...(darkMode && {
            background: {
              default: "#181c31",
              paper: "#1f233e",
            },
            text: {
              primary: "#ffffff",
            },
          }),
        },
      }),
    [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
  
   <Navbar  darkMode={darkMode} onToggleTheme={handleThemeToggle}/>
   <Home darkMode={darkMode}/>
   <SlidingCards darkMode={darkMode}/>
   <Footer darkMode={darkMode}/>
   </ThemeProvider>
  )
}

export default App
