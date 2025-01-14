import { Link } from "react-router-dom"

export default function NavBar () {
    
    return (
        <>
            <div className="navbar-container">
                <div className="links">
                    <Link to={"/"}><p className="home-button">HOME</p> </Link>
                    <Link to={"/blog"}><p className="blog-button">BLOG</p> </Link>
                    <Link to={"/contact"}><p className="contact-button">CONTACT</p> </Link>
                    <Link to={"/projects"}><p className="projects-button">PROJECTS</p> </Link>
                </div>
            </div>
            
        </>
    )
}