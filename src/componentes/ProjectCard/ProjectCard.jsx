import "./ProjectCard.css";

function ProjectCard({ project }) {

    return (

        <div className="project-card">

            <img
            src={project.image}
            alt={project.title}
            className="project-image"
            />

            <h3>

                {project.title}

            </h3>

            <p>

                {project.description}

            </p>

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