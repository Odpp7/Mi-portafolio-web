"use client";

import { useEffect, useRef } from "react";
import "@/app/styles/particles.css";

export default function Particles() {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;

    container.innerHTML = "";

    const particleCount = 40;
    const lineCount = 12;

    for (let i = 0; i < particleCount; i++) {
      const p = document.createElement("div");
      p.className = "particle";
      p.style.left = `${Math.random() * 100}%`;
      p.style.top = `${Math.random() * 100}%`;
      p.style.animationDelay = `${Math.random() * 6}s`;
      container.appendChild(p);
    }

    for (let i = 0; i < lineCount; i++) {
      const line = document.createElement("div");
      line.className = "connection-line";
      line.style.left = `${Math.random() * 100}%`;
      line.style.top = `${Math.random() * 100}%`;
      line.style.width = `${100 + Math.random() * 200}px`;
      line.style.animationDelay = `${Math.random() * 10}s`;
      container.appendChild(line);
    }
  }, []);

  return <div ref={particlesRef} className="particles" />;
}
