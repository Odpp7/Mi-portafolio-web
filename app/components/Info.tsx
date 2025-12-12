import {Code, Mail} from "lucide-react"
import "@/app/styles/inicio.css"

export default function Info() {
    return (
        <div className="hero-content">
            <h1 className="hero-title">Full Stack Developer</h1>
            <p className="hero-subtitle">Oscar Daniel Duque Paz</p>
            <p className="hero-description">
                Desarrollador apasionado por crear experiencias digitales modernas y eficientes.
                Especializado en desarrollo web, móvil y la realizacion de softwares enfocados en la innovación y la calidad.
            </p>
            <div className="hero-buttons">
                <a href="#projects" className="btn">
                    <Code/>
                    Ver Proyectos
                </a>
                <a href="#contact" className="btn btn-secondary">
                    <Mail/>
                    Contactar
                </a>
            </div>
        </div>
    )
}
