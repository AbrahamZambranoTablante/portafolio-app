import { Link } from "react-router-dom"
import '../Pages/CSS/NavBar.css'
import React from "react"

export default function NavBar ({scrollToProjects, scrollToContact, scrollToBlog}) {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
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
                    </nav>
                </div>

            </div>
            
        </>
    )
}