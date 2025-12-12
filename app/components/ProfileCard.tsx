'use client';

import { useRef, MouseEvent, CSSProperties } from 'react';
import '@/app/styles/profileCard.css';

interface ProfileCardProps {
  avatarUrl: string;
  iconUrl?: string;
  grainUrl?: string;
  innerGradient?: string;
  behindGlowEnabled?: boolean;
  behindGlowColor?: string;
  behindGlowSize?: string;
  miniAvatarUrl?: string;
  name?: string;
  title?: string;
  handle?: string;
  status?: string;
  contactText?: string;
  showUserInfo?: boolean;
  enableTilt?: boolean;
  onContactClick?: () => void;
  className?: string;
}

export default function ProfileCard({
  avatarUrl,
  iconUrl,
  grainUrl,
  innerGradient = 'linear-gradient(145deg, rgba(27, 40, 56, 0.6), rgba(0, 255, 157, 0.1))',
  behindGlowEnabled = true,
  behindGlowColor = 'rgba(0, 255, 157, 0.4)',
  behindGlowSize = '50%',
  miniAvatarUrl,
  name = 'Oscar Duque',
  title = 'Full Stack Developer',
  handle = 'oscarduque',
  status = 'Online',
  contactText = 'Contactar',
  showUserInfo = true,
  enableTilt = true,
  onContactClick,
  className = ''
}: ProfileCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!enableTilt || !cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * -10;

    card.style.setProperty('--rotate-x', `${rotateX}deg`);
    card.style.setProperty('--rotate-y', `${rotateY}deg`);
    card.style.setProperty('--pointer-x', `${(x / rect.width) * 100}%`);
    card.style.setProperty('--pointer-y', `${(y / rect.height) * 100}%`);
    
    if (behindGlowEnabled && wrapperRef.current) {
      wrapperRef.current.style.setProperty('--pointer-x', `${(x / rect.width) * 100}%`);
      wrapperRef.current.style.setProperty('--pointer-y', `${(y / rect.height) * 100}%`);
    }
  };

  const handleMouseEnter = () => {
    if (cardRef.current) {
      cardRef.current.classList.add('active');
    }
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    card.style.setProperty('--rotate-x', '0deg');
    card.style.setProperty('--rotate-y', '0deg');
    card.classList.remove('active');
  };

  const wrapperStyle: CSSProperties = {
    '--inner-gradient': innerGradient,
    '--behind-glow-color': behindGlowColor,
    '--behind-glow-size': behindGlowSize,
    '--icon': iconUrl ? `url(${iconUrl})` : 'none',
    '--grain': grainUrl ? `url(${grainUrl})` : 'none',
  } as CSSProperties;

  return (
    <div 
      ref={wrapperRef}
      className={`profile-card-wrapper ${className}`}
      style={wrapperStyle}
    >
      {behindGlowEnabled && <div className="behind-glow" />}
      
      <div
        ref={cardRef}
        className="profile-card"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Imagen principal */}
        <div className="card-avatar">
          <img src={avatarUrl} alt={name} />
        </div>

        {/* Efectos visuales */}
        <div className="card-shine" />
        <div className="card-glare" />

        {/* Contenido superior */}
        <div className="card-content">
          <h3>{name}</h3>
          <p>{title}</p>
        </div>

        {/* Info de usuario abajo */}
        {showUserInfo && (
          <div className="card-footer">
            <div className="user-details">
              <div className="mini-avatar">
                <img src={miniAvatarUrl || avatarUrl} alt={name} />
              </div>
              <div className="user-text">
                <div className="handle">@{handle}</div>
                <div className="status">{status}</div>
              </div>
            </div>
            <button
              className="contact-btn"
              onClick={onContactClick}
              type="button"
            >
              {contactText}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}