import projects from "../../data/projects"
import ProjectCard from "../ProjectCard/ProjectCard"

function Projects() {
    return(
        <>
        <section id="projects" className="projects">
            <h2>Mis Proyectos</h2>
            {
                projects.map((project) => (
                    <ProjectCard
                    key={project.id}
                    project={project}
                    />
                ))
            }
        </section>
        </>
    )
    
}
export default Projects