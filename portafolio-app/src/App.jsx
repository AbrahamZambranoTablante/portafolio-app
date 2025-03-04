import { useRef } from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Blog from './Pages/Blog';
import NotFound from './Pages/NotFound';
import VirtualAgent from './Pages/VirtualAgent';

function App() {

  return (
    <>
      <div className="elguebo">
        <Router>
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/virtualagent' element={ <VirtualAgent /> } />
            <Route path='*' element={ <NotFound /> } />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
