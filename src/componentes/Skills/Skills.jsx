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