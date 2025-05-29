import { useRef, useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';

function App() {

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark"; // Load theme from local storage
  });

  useEffect(() => {
      if (darkMode) {
          document.body.classList.add("dark-mode");
          localStorage.setItem("theme", "dark"); // Save to local storage
      } else {
          document.body.classList.remove("dark-mode");
          localStorage.setItem("theme", "light");
      }
  }, [darkMode]);


    const projectsRef = useRef(null);
    const contactRef = useRef(null);
    const blogRef = useRef(null);
    const virtualRef = useRef(null)
    const aboutmeRef = useRef(null)

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: "smooth" });``
    };

  return (
    <>
      <div className="elguebo">
        <Router>
          <NavBar
            scrollToBlog={() => scrollToSection(blogRef)}
            scrollToProjects={() => scrollToSection(projectsRef)}
            scrollToContact={() => scrollToSection(contactRef)}
            scrollToVirtual={() => scrollToSection(virtualRef)}
            scrollToAbout={() => scrollToSection(aboutmeRef)}
            darkMode={darkMode} setDarkMode={setDarkMode}
          />
          <Routes>
            <Route path="/" element={<Home aboutmeRef={aboutmeRef} virtualRef={virtualRef} projectsRef={projectsRef} contactRef={contactRef} darkMode={darkMode} blogRef={blogRef}/>}/>
            <Route path='*' element={ <NotFound /> } />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
