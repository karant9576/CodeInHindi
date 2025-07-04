
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useMemo } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import About from "./components/About";
import Blog from "./components/Blog";
// pages
import Htmlinfo from "./Html/Htmlinfo";
import CssInfo from "./css/Cssinfo";
import Jsinfo from "./Js/Jsinfo";
import Reactinfo from "./reactjs/Reactinfo.jsx";
function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeToggle = () => {
    setDarkMode((prev) => !prev);
    document.body.style.background = !darkMode ? "#181c31" : "#fff";
    document.body.style.color = !darkMode ? "#fff" : "#000";
  };

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
          <Route path="/javascript/:topic" element={<Jsinfo  darkMode={darkMode}/>} />
         {/* React js */}
         <Route path="/react" element={<Reactinfo/>}/>

        </Routes>
 
        <Footer darkMode={darkMode} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
