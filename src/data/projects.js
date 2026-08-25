import auris from "../assets/imagenes/auris2.png";
import magicmenu from "../assets/imagenes/magic.png";
import tareas from "../assets/imagenes/GestorTareas.png";
import requisiciones from "../assets/imagenes/Requisicion.png";
import farmacia from "../assets/imagenes/Farmacia.png"

const projects = [
    {
        id: 1,
        title: "Sistema de requisiciones",
        image: requisiciones,
        description: "Sistema web desarrollado para gestionar requisiciones de herramientas y materiales, permitiendo registrar, consultar, actualizar y eliminar solicitudes mediante operaciones CRUD. Cuenta con un frontend desarrollado con Bootstrap y un backend construido con Flask y MySQL.",
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
            "Aplicación móvil desarrollada con Flutter para ofrecer a los usuarios una forma más interactiva y atractiva de consultar el menú de un restaurante. Busca mejorar la experiencia del usuario al explorar los platillos mediante una interfaz visual, dinámica y fácil de utilizar.",
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
            "Aplicación móvil desarrollada con Flutter para realizar auditorías de metodología 5S. Permite gestionar departamentos, cuestionarios y evaluaciones, facilitando el seguimiento de las auditorías y el registro de evidencias mediante fotografías y comentarios.",
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
            "Aplicación web desarrollada con React para la gestión de tareas, permitiendo crear, organizar, actualizar y eliminar actividades mediante una interfaz dinámica e intuitiva.",
        technologies: [
            "React",
            "JavaScript",
            "CSS"
        ],
        github: "https://github.com/JesusCanales02/Proyecto-tareas",
        demo: ""
    },
    {
        id: 5,
        title: "Gestión de pacientes",
        image: farmacia,
        description:
            "Aplicación web desarrollada con React para la gestión de tareas, permitiendo crear, organizar, actualizar y eliminar actividades mediante una interfaz dinámica e intuitiva.",
        technologies: [
            "React",
            "JavaScript",
            "Flask",
            "Supabase"
        ],
        github: "https://github.com/JesusCanales02/Patient-manager",
        demo: ""
    }
]
export default projects