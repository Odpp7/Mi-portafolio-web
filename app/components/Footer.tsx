'use client'

import "@/app/styles/Footer.css"
import {Linkedin, Github} from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2025 Oscar Duque. Todos los derechos reservados.</p>
        <p>Diseñado y desarrollado con ❤️ en Colombia</p>
        <div className="footer-social">
          <a href="#" target="_blank" rel="noopener noreferrer" className="social-link">
            <Linkedin/>
          </a>
          <a href="https://github.com/Odpp7" target="_blank" rel="noopener noreferrer" className="social-link">
            <Github/>
          </a>
        </div>
      </div>
    </footer>
  );
}