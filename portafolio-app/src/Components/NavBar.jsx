import { Link } from "react-router-dom"
import '../Pages/CSS/NavBar.css'
import React from "react"

export default function NavBar ({scrollToProjects, scrollToContact, scrollToBlog, darkMode, setDarkMode}) {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };
    
    return (
        <>
            <div className="navbar-container">
                <div className="navbar-sections">
                    <div className="logo">
                        <Link to={"/"}><img onClick={scrollToTop} style={{ cursor: "pointer" }} src="/azlogo.jpg" alt="Logo" /> </Link>
                    </div>
                    <nav className="links">
                        <button className="nav-link" onClick={scrollToBlog}>BLOG</button> 
                        <button className="nav-link" onClick={scrollToContact}>CONTACT</button> 
                        <button className="nav-link" onClick={scrollToProjects}>PROJECTS</button> 
                        <Link to={"/virtualagent"}><button className="nav-link">VIRTUAL AGENT</button> </Link>
                        <a href="/Resume_Abraham Zambrano Tablante.pdf" download="Abraham_Resume.pdf" className="nav-link">
                            DONWLOAD MY RESUME
                        </a>
                            {/* Toggle Switch */}
                        <label className="switch">
                            <input type="checkbox" checked={darkMode} onChange={toggleTheme} />
                            <span className="slider round"></span>
                        </label>   
                    </nav>
                </div>

            </div>
            
        </>
    )
}