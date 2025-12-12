'use client'

import "@/app/styles/header.css"
import Links from "./components/Links";
import Info from "./components/Info";
import ProfileCard from "./components/ProfileCard";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";

export default function Home() {
  return (
    <main>
      
      <header>
        <nav className="nav-container flex justify-evenly">
          <div>
            <p className="logo">Ing. Oscar Duque</p>
          </div>
          <Links />
        </nav>
      </header>

      <section className="p-[70px] h-[950px] flex justify-evenly items-center border-b border-b-[var(--border-glow)]" id="inicio">
        <div>
          <ProfileCard avatarUrl="/Foto.png" miniAvatarUrl="/Avatar.png" showUserInfo={true} enableTilt={true} onContactClick={() => { document.getElementById("contact")?.scrollIntoView() }} />
        </div>
        <div>
          <Info />
        </div>
      </section>

      <section className="about p-[70px] border-b border-b-[var(--border-glow)]" id="about">
        <AboutMe />
      </section>

      <section className="fondo border-b border-b-[var(--border-glow)] p-[70px]" id="projects">
        <Projects />
      </section>

      <section className="p-[70px]" id="contact">
        <ContactMe/>
      </section>


    </main>
  );
}