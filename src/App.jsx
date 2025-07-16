import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import About from "./components/About";
import Blog from "./components/Blog";

// pages
import Htmlinfo from "./Html/Htmlinfo";
import CssInfo from "./css/Cssinfo";
import Jsinfo from "./Js/Jsinfo";
import Reactinfo from "./reactjs/Reactinfo.jsx";

function App() {
  //  Get initial theme from localStorage
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true"; // Convert string to boolean
  });

  //  Toggle theme and save to localStorage
  const handleThemeToggle = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
    document.body.style.background = newMode ? "#181c31" : "#fff";
    document.body.style.color = newMode ? "#fff" : "#000";
  };

  //  Apply body background/text color when theme changes
  useEffect(() => {
    document.body.style.background = darkMode ? "#181c31" : "#fff";
    document.body.style.color = darkMode ? "#fff" : "#000";
  }, [darkMode]);

  //  Create theme based on mode
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
      <CssBaseline />
      <Router>
        <Navbar darkMode={darkMode} onToggleTheme={handleThemeToggle} />

        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />

          {/* html routes */}
          <Route path="/html" element={<Htmlinfo />} />
          <Route path="/html/:topic" element={<Htmlinfo darkMode={darkMode} />} />

          {/* css routes */}
          <Route path="/css" element={<CssInfo />} />
          <Route path="/css/:topic" element={<CssInfo />} />

          {/* js routes */}
          <Route path="/javascript" element={<Jsinfo />} />
          <Route path="/javascript/:topic" element={<Jsinfo darkMode={darkMode} />} />

          {/* React js */}
          <Route path="/react" element={<Reactinfo />} />
        </Routes>

        <Footer darkMode={darkMode} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
