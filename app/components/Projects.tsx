'use client'

import "@/app/styles/Project.css"
import { useState } from 'react';
import { projects } from '@/app/data/MyProjects'
import { ArrowRight, ArrowLeft, Github, SquareArrowOutUpRight } from 'lucide-react'


export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cardsview = 2
  const maxSlide = projects.length - cardsview

  const nextSlide = () => {
    setCurrentSlide(currentSlide >= maxSlide ? 0 : currentSlide + 1)
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? maxSlide : currentSlide - 1)
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  };

  const totalDots = projects.length - cardsview + 1

  return (
    <div className="container">
      <div className="section-header">
        <h2 className="section-title">Proyectos</h2>
        <p className="section-subtitle">Algunos de mis trabajos más destacados</p>
      </div>

      <div className="carousel-container">
        <button className="carousel-arrow carousel-arrow-left" onClick={prevSlide}>
          <i className="fas fa-chevron-left"><ArrowLeft /></i>
        </button>

        <div className="carousel-wrapper">
          <div className="carousel-track" style={{ transform: `translateX(-${currentSlide * 50}%)` }} >
            {projects.map((project, index) => (
              <div key={index} className="carousel-slide">
                <div className="project-card">
                  <div className="project-image">
                    <img className="w-full h-full object-cover" src={project.imagen} alt="" />
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tech">
                      {project.techs.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link"><SquareArrowOutUpRight />Demo</a>
                      )}
                      <a href={project.codigo} target="_blank" rel="noopener noreferrer" className="project-link"><Github />Código</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="carousel-arrow carousel-arrow-right" onClick={nextSlide}>
          <i className="fas fa-chevron-right"><ArrowRight /></i>
        </button>

        <div className="carousel-dots">
          {Array.from({ length: totalDots }).map((_, index) => (
            <button key={index} className={`carousel-dot ${currentSlide === index ? 'active' : ''}`} onClick={() => goToSlide(index)} />
          ))}
        </div>
      </div>
    </div>
  );
}