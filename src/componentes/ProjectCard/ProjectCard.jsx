import "./ProjectCard.css";

function ProjectCard({ project }) {
    const isSingleImage = project.images.length === 1;

    return (
        <div className={`project-card project-${project.id}`}>
            <div className={`project-images ${isSingleImage ? "single-image" : ""}`}>
                {project.images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`${project.title} - imagen ${index + 1}`}
                        className="project-image"
                    />
                ))}
            </div>

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="tech-container">
                {project.technologies.map((tech) => (
                    <span key={tech} className="tech">
                        {tech}
                    </span>
                ))}
            </div>

            <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="github-btn"
            >
                Ver GitHub
            </a>
        </div>
    );
}

export default ProjectCard;