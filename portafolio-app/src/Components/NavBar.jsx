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
                    <div className="links">
                        <Link to={"/blog"}><p className="blog-button">BLOG</p> </Link>
                        <Link to={"/contact"}><p className="contact-button">CONTACT</p> </Link>
                        <Link to={"/projects"}><p className="projects-button">PROJECTS</p> </Link>
                        <Link to={"/virtualagent"}><p className="virtualagent-button">VIRTUAL AGENT</p> </Link>
                    </div>
                </div>

            </div>
            
        </>
    )
}