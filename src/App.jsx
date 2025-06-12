import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import SlidingCards from './components/Slidingcard';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useMemo } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import About from './components/About';
// Dummy Pages (Create these components later)

 // For individual tutorials like HTML, CSS

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeToggle = () => {
    setDarkMode((prev) => !prev);
    document.body.style.background = !darkMode ? '#181c31' : '#fff';
    document.body.style.color = !darkMode ? '#fff' : '#000';
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light',
          ...(darkMode && {
            background: {
              default: '#181c31',
              paper: '#1f233e',
            },
            text: {
              primary: '#ffffff',
            },
          }),
        },
      }),
    [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar darkMode={darkMode} onToggleTheme={handleThemeToggle} />

        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/about" element={<About />} />
          
        </Routes>

        <SlidingCards darkMode={darkMode} />
        <Footer darkMode={darkMode} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
