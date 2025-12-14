import "@/app/styles/AboutMe.css"
import BounceCards from "./BounceCards"

const images = [
    "/Foto1.jpg",
    "/foto3.jpg",
    "/Foto5.jpg",
    "/Foto4.jpg",
    "/Foto2.jpg"
];

const transformStyles = [
    "rotate(5deg) translate(-120px)",
    "rotate(0deg) translate(-60px)",
    "rotate(-5deg)",
    "rotate(5deg) translate(60px)",
    "rotate(-5deg) translate(120px)"
];

export default function AboutMe() {
    return (
        <div className="container">
            <div className="section-header">
                <h2 className="section-title">Sobre Mí</h2>
                <p className="section-subtitle">Desarrollador con experiencia en tecnologías modernas y mejores prácticas</p>
            </div>
            <div className="about-grid">
                <div className="about-content">
                    <p>¡Hola! Soy Oscar Duque, Full Stack Developer con formación certificada y un fuerte interés en crear interfaces modernas, fluidas y bien estructuradas. Me apasiona especialmente el desarrollo Front-End y la creación de experiencias digitales que sean tanto atractivas como funcionales.</p>

                    <p>Además del trabajo en la web, desarrollo aplicaciones móviles que integran interfaces cuidadas y buen rendimiento. También tengo experiencia en Back-End y en arquitecturas completas, lo que me permite abordar proyectos de forma integral y mantener la coherencia entre cliente y servidor.</p>

                    <p>En mis tiempos libres soy un apasionado por: </p>

                    <BounceCards
                        className="custom-bounceCards"
                        images={images}
                        animationDelay={1}
                        animationStagger={0.08}
                        easeType="elastic.out(1, 0.5)"
                        transformStyles={transformStyles}
                        enableHover={true}
                    />

                </div>

                <div className="experience-timeline">
                    <div className="timeline-item">
                        <div className="timeline-year">2024 - Present</div>
                        <div className="timeline-title">Full Stack Developer & Estudiante de Ingeniería de Sistemas</div>
                        <div className="timeline-description">
                            Actualmente continúo desarrollando proyectos personales y profesionales mientras curso la carrera de Ingeniería de Sistemas. He ampliado mis conocimientos en arquitectura de aplicaciones, bases de datos, frameworks modernos y buenas prácticas.
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-year">2023 - 2024</div>
                        <div className="timeline-title">Full Stack Developer</div>
                        <div className="timeline-description">
                            Desarrollo de aplicaciones web utilizando React, TailwindCSS, Node.js y bases de datos tanto relacionales como no relacionales.
                            Creación de interfaces modernas, APIs robustas y experiencias optimizadas.
                            Fortalecí mis fundamentos en diseño responsivo, manejo de estado, autenticación y despliegue.
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-year">2022 - 2023</div>
                        <div className="timeline-title">Bilingual Call Center Agent</div>
                        <div className="timeline-description">
                            Trabaje en un call center bilingüe donde desarrollé fuertes habilidades de comunicación, dominio del idioma inglés y trabajo en equipo.
                            Durante este tiempo participé en un área técnica interna que despertó mi interés por la computación y la programación,
                            lo que me llevó a iniciar mi camino como desarrollador.
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
