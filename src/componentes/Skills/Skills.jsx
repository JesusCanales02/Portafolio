import "./Skills.css";

function Skills() {

    const skills = {
        frontend : [
        "React",
        "HTML",
        "Tailwind CSS",
        "Bootstrap",
        "CSS",
    ],

        backend : [
            "Flask",
            "Django",
            "Node.js"
        ],

        DataBase : [
            "MySQL",
            "MongoDB"
        ],

        Mobile: [
            "Flutter",
            "Android Studio"
        ],

        Herramientas : [
            "Git",
            "GitHub",
            "VS Code"
        ],

        Lenguajes:[
            "Python",
            "Java",
            "Javascript",
            "C#"
        ]
}

    return (

        <section className="skills">

            <h2>Tecnologías</h2>

            <div className="skills-container">
                <h3>Lenguajes de progración</h3>
                <div className="Skills-lenguaje">
                    {skills.Lenguajes.map((skill)=>(
                        <span key={skill} className="skill">
                            {skill}
                        </span>
                    ))}
                </div>

                <div className="skills-container">
                    <h3>Frontend</h3>
                    <div className="Skills-lenguaje">
                        {skills.frontend.map((skill) => (
                            <span key={skill} className="skill">
                            {skill}
                        </span>
                        ))}
                    </div>
                </div>

                <div className="skills-container">
                    <h3>Backend</h3>
                    <div className="Skills-lenguaje">
                        {skills.backend.map((skill) => (
                            <span key={skill} className="skill">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="skills-container">
                    <h3>Desarrollo Movíl</h3>
                    <div className="Skills-lenguaje">
                        {skills.Mobile.map((skill) => (
                            <span key={skill} className="skill">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="skills-container">
                    <h3>Base de datos</h3>
                    <div className="Skills-lenguaje">
                        {skills.DataBase.map((skill) => (
                            <span className="skill" key={skill}>
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="skills-container">
                    <h3>Herramientas</h3>
                    <div className="Skills-lenguaje">
                        {skills.Herramientas.map((skill) =>(
                            <span className="skill" key={skill}>
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