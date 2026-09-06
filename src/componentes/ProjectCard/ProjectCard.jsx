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

    // Navegación por teclado
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (currentIndex === null) return;

            if (e.key === "Escape") setCurrentIndex(null);
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "ArrowLeft") prevImage();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [currentIndex]);

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % project.images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    return (
        <div className={`project-card project-${project.id}`}>
            <div className="project-images">
                {project.images.map((image, index) => (
                    <div 
                        key={index} 
                        className="image-wrapper"
                        onClick={() => setCurrentIndex(index)}
                    >
                        <img
                            src={image}
                            alt={`${project.title} - ${index + 1}`}
                            className="project-image"
                        />
                        <div className="overlay-zoom">
                            <span>Ampliar</span>
                        </div>
                    </div>
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
                                alt={`${project.title} ampliada`} 
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