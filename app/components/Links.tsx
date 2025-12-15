import { useState, useEffect } from "react"

const links = [
    { name: "Inicio", id: "inicio" },
    { name: "Sobre Mi", id: "about" },
    { name: "Proyectos", id: "projects" },
    { name: "Certificados", id: "certificados" },
    { name: "Contacto", id: "contact" }
]

const Links = () => {

    const [activeLink, setActiveLink] = useState('')

    useEffect(() => {
        const HandleScroll = () => {
            const sections = document.querySelectorAll('section[id]')
            sections.forEach((section) => {
                const react = section.getBoundingClientRect()
                if (react.top <= 100 && react.bottom >= 100) { setActiveLink(`#${section.id}`) }
            })
        }

        window.addEventListener('scroll', HandleScroll)
        HandleScroll()
    }, [])

    return (
        <ul className="lista">
            {links.map((link, index) => (
                <li key={index}>
                    <a className={`links ${activeLink === `#${link.id}` ? 'active' : ''}`} href={`#${link.id}`}>{link.name}</a>
                </li>
            ))}
        </ul>
    )
}

export default Links