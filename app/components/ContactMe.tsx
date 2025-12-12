'use client'

import "@/app/styles/ContactMe.css"

export default function ContactMe() {
  return (
    <div className="container">
      <div className="section-header">
        <h2 className="section-title">Contacto</h2>
        <p className="section-subtitle">¿Tienes un proyecto en mente? ¡Hablemos!</p>
      </div>
      <div className="contact-grid">
        <div className="contact-info">
          <h3>¡Trabajemos Juntos!</h3>
          <p>Siempre estoy abierto a nuevas oportunidades y proyectos interesantes. Si tienes una idea que quieres convertir en realidad, no dudes en contactarme.</p>
          
          <div className="contact-item">
            <div className="contact-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="contact-details">
              <h4>Email</h4>
              <p>oscar.duque@example.com</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <i className="fas fa-phone"></i>
            </div>
            <div className="contact-details">
              <h4>Teléfono</h4>
              <p>+57 300 123 4567</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="contact-details">
              <h4>Ubicación</h4>
              <p>Valledupar, Cesar, Colombia</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <i className="fab fa-linkedin-in"></i>
            </div>
            <div className="contact-details">
              <h4>LinkedIn</h4>
              <p>linkedin.com/in/oscar-duque</p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <form>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Nombre</label>
              <input type="text" id="name" className="form-input" placeholder="Tu nombre completo" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" id="email" className="form-input" placeholder="tu.email@ejemplo.com" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject" className="form-label">Asunto</label>
              <input type="text" id="subject" className="form-input" placeholder="Asunto del mensaje" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="message" className="form-label">Mensaje</label>
              <textarea id="message" className="form-input form-textarea" placeholder="Cuéntame sobre tu proyecto..." required></textarea>
            </div>
            
            <button type="submit" className="btn" style={{ width: '100%' }}>
              <i className="fas fa-paper-plane"></i>
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}