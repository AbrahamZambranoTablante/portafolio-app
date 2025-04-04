import { Link } from "react-router-dom";
import "../Pages/CSS/NavBar.css";
import React, { useEffect } from "react";

export default function NavBar({ scrollToProjects, scrollToContact, scrollToBlog, darkMode, setDarkMode }) {
    
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    // Apply dark mode class to body
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, [darkMode]);

    return (
        <>
            <div className={`navbar-container ${darkMode ? "dark-mode" : ""}`}>
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
                            DOWNLOAD MY RESUME
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
    );
}
