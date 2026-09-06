import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import "./ProjectCard.css";

function ProjectCard({ project }) {
    const [currentIndex, setCurrentIndex] = useState(null);

    useEffect(() => {
        if (currentIndex === null) return;

        document.body.style.overflow = "hidden";

        const preventWheel = (e) => e.preventDefault();
        window.addEventListener("wheel", preventWheel, { passive: false });
        window.addEventListener("touchmove", preventWheel, { passive: false });

        return () => {
            document.body.style.overflow = "unset";
            window.removeEventListener("wheel", preventWheel);
            window.removeEventListener("touchmove", preventWheel);
        };
    }, [currentIndex]);

    useEffect(() => {
        if (currentIndex === null) return;

    const handleKeyDown = (e) => {
        if (e.key === "Escape") {
            setCurrentIndex(null);
        } else if (e.key === "ArrowRight") {
            setCurrentIndex((prev) => (prev + 1) % project.images.length);
        } else if (e.key === "ArrowLeft") {
            setCurrentIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
        }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
}, [currentIndex, project.images.length]);

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % project.images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    return (
        <div className={`project-card project-${project.id}`}>
            <div className="main-image-container" onClick={() => setCurrentIndex(0)}>
                <img
                    src={project.images[0]}
                    alt={`Portada ${project.title}`}
                    className="main-project-image"
                />
                <div className="overlay-gallery-btn">
                    <span>Ver imagenes ({project.images.length})</span>
                </div>
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

            {currentIndex !== null &&
                createPortal(
                    <div className="image-modal-overlay" onClick={() => setCurrentIndex(null)}>
                        <div className="image-modal-container" onClick={(e) => e.stopPropagation()}>
                            <button className="close-btn" onClick={() => setCurrentIndex(null)}>
                                &times;
                            </button>

                            <button className="nav-btn prev-btn" onClick={prevImage}>
                                &#10094;
                            </button>

                            <img 
                                src={project.images[currentIndex]} 
                                alt={`${project.title} vista ${currentIndex + 1}`} 
                                className="modal-image" 
                            />

                            <button className="nav-btn next-btn" onClick={nextImage}>
                                &#10095;
                            </button>

                            <div className="image-counter">
                                {currentIndex + 1} / {project.images.length}
                            </div>
                        </div>
                    </div>,
                    document.body
                )
            }
        </div>
    );
}

export default ProjectCard;