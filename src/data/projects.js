import auris from "../assets/imagenes/auris2.png";
import magicmenu from "../assets/imagenes/magic.png";
import tareas from "../assets/imagenes/GestorTareas.png";
import requisiciones from "../assets/imagenes/Requisicion.png";

const projects = [
    {
        id: 1,
        tittle: "Sistema de requisiciones",
        image: requisiciones,
        description: "Sistema web para administrar requisiciones mediante operaciones CRUD.",
        technologies: [
            "Python",
            "Flask",
            "MySQL",
            "Bootstrap",
            "CSS",
            "JavaScript"
        ],
        github: "https://github.com/JesusCanales02/Maquilados",
        demo: ""
    },
    {
        id : 2,
        title: "Magic Menu",
        image : magicmenu,
        description:
            "Aplicación para gestionar y consultar menús digitales.",
        technologies: [
            "Flutter",
            "Dart"
        ],
        github: "https://github.com/JesusCanales02/Magic-menu",
        demo: ""
    },
    {
        id: 3,
        title: "Auris",
        image: auris,
        description:
            "Aplicación móvil para auditorías 5S utilizando Flutter.",
        technologies: [
            "Flutter",
            "Supabase",
            "Dart"
        ],
        github: "https://github.com/JesusCanales02/Auris",
        demo: ""
    },
    {
        id: 4,
        title: "Proyecto Tareas",
        image: tareas,
        description:
            "Aplicación web desarrollada con React para administrar tareas.",
        technologies: [
            "React",
            "JavaScript",
            "CSS"
        ],
        github: "https://github.com/JesusCanales02/Proyecto-tareas",
        demo: ""
    }
]
export default projects