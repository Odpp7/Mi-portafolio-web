'use client'

import "@/app/styles/ContactMe.css"
import { Mail, MapPin, Linkedin, Send } from 'lucide-react'
import { useState } from 'react'

export default function ContactMe() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: ''})
  const [enviado, setEnviado] = useState(false)
  const [mensaje, setMensaje] = useState('')

  const HandleSubmit = async (e:React.FormEvent) => {
    e.preventDefault();

    setEnviado(true)
    setMensaje('Enviando correo...')

    const respuesta = await fetch('api/contact', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })

    if(respuesta.ok){
      setMensaje("Enviado correctamente")
      setFormData({ name: '', email: '', subject: '', message: '' })
    } else{
      setMensaje("Error al enviar")
    }

    setEnviado(false)
  }

  return (
    <div className="container">
      <div className="section-header">
        <h2 className="section-title">Contacto</h2>
        <p className="section-subtitle">¿Tienes un proyecto en mente? ¡Hablemos!</p>
      </div>
      <div className="contact-grid">
        <div className="contact-info">
          <h3 className="trabajemos">¡Trabajemos Juntos!</h3>
          <p className="parrafo">Siempre estoy abierto a nuevas oportunidades y proyectos interesantes. Si tienes una idea que quieres convertir en realidad, no dudes en contactarme.</p>
          
          <div className="contact-item">
            <div className="contact-icon">
              <Mail/>
            </div>
            <div className="contact-details">
              <h4>Email</h4>
              <p>oddpaz7@gmail.com</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <MapPin/>
            </div>
            <div className="contact-details">
              <h4>Ubicación</h4>
              <p>Valledupar, Cesar, Colombia</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <Linkedin />
            </div>
            <div className="contact-details">
              <h4>LinkedIn</h4>
              <p>linkedin.com/in/oscar-duque</p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <form onSubmit={HandleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Nombre</label>
              <input 
                type="text" 
                id="name" 
                className="form-input" 
                placeholder="Tu nombre completo" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input 
                type="email" 
                id="email" 
                className="form-input" 
                placeholder="tu.email@ejemplo.com" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject" className="form-label">Asunto</label>
              <input 
                type="text" 
                id="subject" 
                className="form-input" 
                placeholder="Asunto del mensaje" 
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message" className="form-label">Mensaje</label>
              <textarea 
                id="message" 
                className="form-input form-textarea" 
                placeholder="Cuéntame sobre tu proyecto..." 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
              ></textarea>
            </div>
            
            {mensaje && <p style={{textAlign: 'center', marginBottom: '10px', color:'white'}}>{mensaje}</p>}
            
            <button type="submit" className="btn" style={{ width: '100%' }} disabled={enviado}> 
              <Send/> Enviar Correo
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}