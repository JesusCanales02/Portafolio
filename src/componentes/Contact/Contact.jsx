import "./Contact.css"
import {Mail, BriefcaseBusiness, Phone, GitCommitVertical} from "lucide-react"
function Contact() {
    return(
        <>
        <section id="contact" className="contact">
            <p>
                <Mail size={15}/>
                <span>
                Correo:
                jesus.canales@cetys.edu.mx
                </span>
            </p>

            <p>
                <GitCommitVertical size={15}/>
                <span>
                GitHub:
                https://github.com/JesusCanales02
                </span>
            </p>
            <p>
                <BriefcaseBusiness size={15}/>
                <span>
                LinkedIn:
                https://www.linkedin.com/in/jesús-canales-rojas-79a841403
                </span>
            </p>
            <p>
                <Phone size={15}/>
                <span>
                Teléfono:
                +52 646 947 3859
                </span>
            </p>
        </section>
        </>
    )
}
export default Contact