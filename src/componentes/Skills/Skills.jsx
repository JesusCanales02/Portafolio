import "./Skills.css";

function Skills() {

    const skills = [
        "React",
        "JavaScript",
        "Python",
        "Flask",
        "Flutter",
        "MySQL",
        "Git",
        "GitHub"
    ];

    return (

        <section className="skills">

            <h2>Tecnologías</h2>

            <div className="skills-container">

                {skills.map((skill) => (

                    <span key={skill} className="skill">

                        {skill}

                    </span>

                ))}

            </div>

        </section>

    );

}

export default Skills;