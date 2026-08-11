import "./Skills.css";

function Skills() {

    const skills = {
        frontend: [
            "React",
            "HTML",
            "Tailwind CSS",
            "Bootstrap",
            "CSS"
        ],

        backend: [
            "Flask",
            "Django",
            "Node.js"
        ],

        DataBase: [
            "MySQL",
            "MongoDB"
        ],

        Mobile: [
            "Flutter",
            "Android Studio"
        ],

        Herramientas: [
            "Git",
            "GitHub",
            "VS Code"
        ],

        Lenguajes: [
            "Python",
            "Java",
            "JavaScript",
            "C#"
        ]
    };

    return (
        <section className="skills">

            <h2>Tecnologías</h2>

            <div className="skills-list">

                {/* Lenguajes */}
                <div className="skill-category">
                    <h3>Lenguajes</h3>

                    <div className="skills-items">
                        {skills.Lenguajes.map((skill) => (
                            <span key={skill} className="skill">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Frontend */}
                <div className="skill-category">
                    <h3>Frontend</h3>

                    <div className="skills-items">
                        {skills.frontend.map((skill) => (
                            <span key={skill} className="skill">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Backend */}
                <div className="skill-category">
                    <h3>Backend</h3>

                    <div className="skills-items">
                        {skills.backend.map((skill) => (
                            <span key={skill} className="skill">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Desarrollo móvil */}
                <div className="skill-category">
                    <h3>Desarrollo Móvil</h3>

                    <div className="skills-items">
                        {skills.Mobile.map((skill) => (
                            <span key={skill} className="skill">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Base de datos */}
                <div className="skill-category">
                    <h3>Base de datos</h3>

                    <div className="skills-items">
                        {skills.DataBase.map((skill) => (
                            <span key={skill} className="skill">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Herramientas */}
                <div className="skill-category">
                    <h3>Herramientas</h3>

                    <div className="skills-items">
                        {skills.Herramientas.map((skill) => (
                            <span key={skill} className="skill">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

            </div>

        </section>
    );
}

export default Skills;