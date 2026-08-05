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
                    Desarrollo aplicaciones web utilizando React,
                    JavaScript, Python y Flutter. Me enfoco en crear
                    interfaces modernas y soluciones funcionales para
                    resolver problemas reales.
                </p>

                <a
                    href="/CV_Jesus_Canales.pdf"
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