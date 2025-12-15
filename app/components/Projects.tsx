'use client'

import "@/app/styles/Project.css"
import { useState, useEffect, useRef } from 'react';
import { projects } from '@/app/data/MyProjects'
import { ArrowRight, ArrowLeft, Github, SquareArrowOutUpRight } from 'lucide-react'

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsView, setCardsView] = useState(2);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setCardsView(window.innerWidth <= 768 ? 1 : 2);
      setCurrentSlide(0);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxSlide = projects.length - cardsView;
  const slidePercentage = cardsView === 1 ? 100 : 50;

  const nextSlide = () => {
    setCurrentSlide(currentSlide >= maxSlide ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? maxSlide : currentSlide - 1);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) { nextSlide(); }

    if (distance < -minSwipeDistance) { prevSlide(); }

    setTouchStart(0);
    setTouchEnd(0);
  };

  const totalDots = projects.length - cardsView + 1;

  return (
    <div className="container">
      <div className="section-header">
        <h2 className="section-title">Proyectos</h2>
        <p className="section-subtitle">Algunos de mis trabajos más destacados</p>
      </div>

      <div className="carousel-container">
        <button className="carousel-arrow carousel-arrow-left" onClick={prevSlide}>
          <ArrowLeft />
        </button>

        <div className="carousel-wrapper" ref={carouselRef} onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="carousel-track" 
            style={{ transform: `translateX(-${currentSlide * slidePercentage}%)` }}
          >
            {projects.map((project, index) => (
              <div key={index} className="carousel-slide">
                <div className="project-card">
                  <div className="project-image">
                    <img className="w-full h-full object-cover" src={project.imagen} alt={project.title} />
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
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                          <SquareArrowOutUpRight size={18} />Demo
                        </a>
                      )}
                      <a href={project.codigo} target="_blank" rel="noopener noreferrer" className="project-link">
                        <Github size={18} />Código
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="carousel-arrow carousel-arrow-right" onClick={nextSlide}>
          <ArrowRight />
        </button>

        <div className="carousel-dots">
          {Array.from({ length: totalDots }).map((_, index) => (
            <button key={index} className={`carousel-dot ${currentSlide === index ? 'active' : ''}`}  onClick={() => goToSlide(index)} />
          ))}
        </div>
      </div>
    </div>
  );
}