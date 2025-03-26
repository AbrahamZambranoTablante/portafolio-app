import '../Pages/CSS/Projects.css';
export default function Projects({ projectsRef }) {
    const projects = [
        {
            name: "Pat.io",
            description: "An AI-powered virtual assistant helping migrants with SSN and ITIN procedures.",
            image: "/patio.png",
            link: "https://pat-io.netlify.app/",
        },
        {
            name: "BudgetMin",
            description: "A simple budgeting app to track income and expenses effectively.",
            image: "/budgetmin.png",
            link: "https://budgetmin.netlify.app/",
        },
        {
            name: "NASA APOD",
            description: "Explore NASA's Astronomy Picture of the Day with this interactive app.",
            image: "/nasa-apod.png",
            link: "https://nasa-astronomypictureoftheday.netlify.app/",
        },
    ];

    return (
        <section ref={projectsRef} className="projects-section" id="projects">
            <h2>My Projects</h2>
            <div className="projects-container">
                <div className="projects-scroll">
                    {projects.map((project, index) => (
                        <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="project-card">
                            <img src={project.image} alt={project.name} className="project-image" />
                            <div className="project-info">
                                <h3>{project.name}</h3>
                                <p>{project.description}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
