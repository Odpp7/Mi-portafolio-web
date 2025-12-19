'use client'

import { Github, FileUser  } from "lucide-react";
import "@/app/styles/header.css"
import { motion } from 'framer-motion';
import Links from "./components/Links";
import Info from "./components/Info";
import ProfileCard from "./components/ProfileCard";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Certificados from "./components/Certificados";
import Chatbot from "./components/ChatBot";

export default function Home() {
  return (
    <main className="overflow-x-hidden">

      <header>
        <nav className="nav-container flex justify-evenly">
          <div className="divlogo">
            <p className="logo">Ing. Oscar Duque</p>
          </div>

          <Links />

          <div className="flex gap-[15px]">
            <a href="/Cv_Oscar_Duque.pdf" download="Cv_Oscar_Duque.pdf" className="social-link1">
              <FileUser className="logos" />
            </a>
            <a href="https://github.com/Odpp7" target="_blank" rel="noopener noreferrer" className="social-link1">
              <Github className="logos" />
            </a>
          </div>
        </nav>
      </header>

      <section className="h-[960px] flex justify-evenly items-center border-b border-b-[var(--border-glow)] inicio overflow-hidden" id="inicio">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <ProfileCard
            avatarUrl="/Foto.png"
            miniAvatarUrl="/Avatar.png"
            showUserInfo={true}
            enableTilt={true}
            onContactClick={() => { document.getElementById("contact")?.scrollIntoView({ behavior: 'smooth' }) }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Info />
        </motion.div>
      </section>

      <section className="about p-[70px] border-b border-b-[var(--border-glow)] overflow-hidden" id="about">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}>
          <AboutMe />
        </motion.div>
      </section>

      <section className="fondo border-b border-b-[var(--border-glow)] p-[70px] overflow-hidden" id="projects">
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}>
          <Projects />
        </motion.div>
      </section>

      <section className="p-[70px] border-b border-b-[var(--border-glow)] fondoCertificado overflow-hidden" id="certificados">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}>
          <Certificados />
        </motion.div>
      </section>

      <section className="p-[70px] fondo2 overflow-hidden" id="contact">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}>
          <ContactMe />
        </motion.div>
      </section>

      <Chatbot />

      <footer>
        <Footer />
      </footer>

    </main>
  );
}