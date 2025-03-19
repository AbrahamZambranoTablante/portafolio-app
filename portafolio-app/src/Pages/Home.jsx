import '../Pages/CSS/Home.css'
import Contact from './Contact';
import Projects from './Projects';
import Blog from './Blog';

export default function Home ({projectsRef, contactRef, blogRef}) {

    return (
        <>
            <div className="home-container">
                <div className="profile__container">

                    <div className="profile__picture">
                        <img src='/profilepicture.jpg' alt='Abraham Zambrano Profile Picture'/>
                    </div>

                    <div className="profile__name">
                        <h1>Abraham Zambrano</h1>
                    </div>

                    <h2 className="profile__quote">
                        <span>"</span>guebo y cuca pa siempre<span>"</span>
                    </h2>

                    <div className="profile__description">
                        <h3>About Me</h3>
                        <p>A passionate and driven software engineer, blending expertise in frontend and backend development with a deep curiosity for technology and a knack for logical thinking. I thrive on creating impactful, user-centered projects that not only solve complex problems but also make a real difference. With a unique background in tax preparation and customer service, I really want to bring a human touch to tech, communicating with diverse audiences and delivering solutions that resonate. From project management to networking, I excel in collaborative environments, always striving to innovate and push boundaries. Bilingual, results-focused, and on a mission to leave a lasting mark in the tech world, one game-changing project at a time.</p>
                    </div>
                    
                </div>

                <section ref={projectsRef}>
                    <Projects/>
                </section>

                <section ref={blogRef}>
                    <Blog/>
                </section>

                <section ref={contactRef}>
                    <Contact/>
                </section>
            </div>
        </>
    )
}