import '../Pages/CSS/Home.css'
import Contact from './Contact';
import Projects from './Projects';
import Blog from './Blog';
import VirtualAgent from './VirtualAgent';
import AboutMe from './AboutMe';

export default function Home ({aboutmeRef, virtualRef, projectsRef, contactRef, blogRef, darkMode}) {

    return (
        <>
            <div className="home-container">
                
                <section ref={aboutmeRef}>
                    <AboutMe/>
                </section>

                <section ref={projectsRef}>
                    <Projects darkMode={darkMode} />
                </section>

                <section ref={virtualRef}>
                    <VirtualAgent/>
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