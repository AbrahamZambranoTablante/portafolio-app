import { Link } from "react-router-dom"
import '../Pages/CSS/NavBar.css'

export default function NavBar () {
    
    return (
        <>
            <div className="navbar-container">
                <div className="navbar-sections">
                    <div className="logo">
                        <Link to={"/"}><img src="/azlogo.jpg" alt="Logo" /> </Link>
                    </div>
                    <nav className="links">
                        <a className="nav-link" href="#blog">BLOG</a> 
                        <a className="nav-link" href="#contact">CONTACT</a> 
                        <a className="nav-link" href="#projects">PROJECTS</a> 
                        <Link to={"/virtualagent"}><a className="nav-link">VIRTUAL AGENT</a> </Link>
                    </nav>
                </div>

            </div>
            
        </>
    )
}