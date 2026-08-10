import "./Hero.css";
import { Download } from "lucide-react";
import jesus from "../../assets/imagenes/Jesús.png"

function Hero() {
    return (
        <section id="home" className="hero">

            <div className="hero-content">
                <h1>
                    Jesús Canales
                </h1>

                <h2>
                    Software Engineer
                </h2>

                <p className="hero-description">
                    Soy Ingeniero de Software enfocado en 
                    desarrollo Full Stack y aplicaciones móviles. 
                    He trabajado con JavaScript, React, Python, Flask, Java, Flutter, MySQL, entre otras tecnologías, desarrollando aplicaciones y sistemas tanto en frontend como en backend. 
                    
                </p>

                <a
                    href="/CV Jesús Canales.pdf"
                    download
                    className="btn-primary"
                >
                    <Download size={20}/>
                    Descargar CV
                </a>

            </div>

            <div className="hero-image">
                <img src={jesus}
                alt="Jesus Canales" 
                className="profile-image"/>

            </div>

        </section>
    );
}

export default Hero;