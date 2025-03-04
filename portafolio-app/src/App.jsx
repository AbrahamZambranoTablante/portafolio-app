import { useRef } from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './Components/NavBar';
import Home from './Pages/Home';

import NotFound from './Pages/NotFound';
import VirtualAgent from './Pages/VirtualAgent';

function App() {

  const projectsRef = useRef(null);
    const contactRef = useRef(null);
    const blogRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: "smooth" });
    };

  return (
    <>
      <div className="elguebo">
        <Router>
          <NavBar
            scrollToBlog={() => scrollToSection(blogRef)}
            scrollToProjects={() => scrollToSection(projectsRef)}
            scrollToContact={() => scrollToSection(contactRef)}
          />
          <Routes>
            <Route path="/" element={<Home projectsRef={projectsRef} contactRef={contactRef} blogRef={blogRef}/>}/>
            <Route path='/virtualagent' element={ <VirtualAgent /> } />
            <Route path='*' element={ <NotFound /> } />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
