import auris from "../assets/imagenes/auris2.png";
import auris1 from "../assets/imagenes/Auris3.png";
import auris2 from "../assets/imagenes/Auris4.png";
import magicmenu from "../assets/imagenes/magic3.png";
import magicmenu2 from "../assets/imagenes/magic2.png";
import magicmenu4 from "../assets/imagenes/magic4.png";
import tareas from "../assets/imagenes/GestorTareas.png";
import tareas1 from "../assets/imagenes/gestor1.png";
import tareas2 from "../assets/imagenes/gestor2.png";
import requisiciones from "../assets/imagenes/Requisicion.png";
import requisiciones1 from "../assets/imagenes/Requis.jpeg";
import requisiciones2 from "../assets/imagenes/Requis1.jpeg";
import farmacia from "../assets/imagenes/Farmacia.png";
import farmacia1 from "../assets/imagenes/far1.png";
import farmacia2 from "../assets/imagenes/far2.png";


const projects = [

    {
        id: 1,
        title: "Sistema de requisiciones",

        images: [
            requisiciones,
            requisiciones1,
            requisiciones2
        ],

        description:
            "Sistema web desarrollado para gestionar requisiciones de herramientas y materiales, permitiendo registrar, consultar, actualizar y eliminar solicitudes mediante operaciones CRUD. Cuenta con un frontend desarrollado con Bootstrap y un backend construido con Flask y MySQL.",

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
        id: 2,

        title: "Magic Menu",

        images: [
            magicmenu,
            magicmenu2,
            magicmenu4
        ],

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

        images: [
            auris,
            auris1,
            auris2
        ],

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

        images: [
            tareas,
            tareas1,
            tareas2
        ],

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

        images: [
            farmacia,
            farmacia1,
            farmacia2
        ],

        description:
            "Aplicación web desarrollada con React para la gestión de pacientes, permitiendo administrar y consultar la información de los pacientes mediante una interfaz dinámica.",

        technologies: [
            "React",
            "JavaScript",
            "Flask",
            "Supabase"
        ],

        github: "https://github.com/JesusCanales02/Patient-manager",

        demo: ""
    }

];


export default projects;