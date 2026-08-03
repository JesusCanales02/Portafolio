function ProjectCard({project}) {
    return(
        <>
        <div>
            <h3>{project.tittle}</h3>
            <p>{project.description}</p>
            <h4>tecnologias</h4>

            <ul>
                {project.technologies.map((tech, index) => (
                    <li key={index}>
                        {tech}
                    </li>
                ))}
            </ul>
            <a
            href={project.github}
            target="_black"
            rel="noreferrer"
            >
                Ver github
            </a>
        </div>
        </>
    )
}
export default ProjectCard