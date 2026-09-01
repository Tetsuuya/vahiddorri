"use client";

import { useEffect, useState } from "react";

export default function AmbientGlow() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    let ticking = false;
    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const x = (e.clientX / window.innerWidth) * 100;
          const y = (e.clientY / window.innerHeight) * 100;
          setMousePos({ x, y });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Dynamic Cursor Light Beam */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[140px] opacity-25 transition-all duration-700 ease-out will-change-transform"
        style={{
          background: "radial-gradient(circle, rgba(212,175,55,0.2) 0%, rgba(197,160,89,0.05) 50%, transparent 70%)",
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Floating Ambient Golden Orbs (Breathing Warm Light) */}
      <div className="absolute top-[15%] left-[20%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#d4af37]/5 to-transparent blur-[160px] animate-pulse duration-[10000ms]" />
      <div className="absolute bottom-[20%] right-[15%] w-[450px] h-[450px] rounded-full bg-gradient-to-bl from-[#c5a059]/5 to-transparent blur-[150px] animate-pulse duration-[12000ms]" />
    </div>
  );
}
