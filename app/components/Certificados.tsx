'use client'

import "@/app/styles/Certificados.css"
import { CalendarDays, ShieldCheck } from "lucide-react";
import { Certificate } from "../data/Certificados";

export default function Certificados() {
    return (
        <div className="container">
            <div className="section-header">
                <h2 className="section-title">Cursos y Certificados</h2>
                <p className="section-subtitle">Formación continua y certificaciones profesionales</p>
            </div>

            <div className="cursos-grid">
                {Certificate.map((Certificado, index) => (
                    <div key={index} className="curso-card">
                        <div className="curso-header">
                            <div className="curso-icon">
                                <img src={Certificado.imagen} alt={Certificado.titulo} />
                            </div>
                        </div>
                        <div className="curso-info">
                            <h3 className="curso-title">{Certificado.titulo}</h3>
                            <p className="curso-institution">{Certificado.academia}</p>
                        </div>

                        <div className="curso-details">
                            <span className="curso-date"><CalendarDays/>{Certificado.fecha}</span>
                        </div>
                        <div className="curso-footer">
                            <a href="#" className="curso-link"><ShieldCheck/>Ver Certificado</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}