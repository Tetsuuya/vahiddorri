"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on devices with fine pointer (mouse)
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;
    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      // Check hover targets under cursor
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveEl = target.closest("a, button, [role='button'], input, textarea, select");
      const playTarget = target.closest("[data-cursor='play']");

      if (playTarget) {
        setIsHovered(true);
        setCursorText("PLAY");
        setIsPointer(true);
      } else if (interactiveEl) {
        setIsHovered(true);
        setCursorText("");
        setIsPointer(true);
      } else {
        setIsHovered(false);
        setCursorText("");
        setIsPointer(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Smooth Lerp loop for buttery fluid cursor motion
    const render = () => {
      currentX += (mouseX - currentX) * 0.18;
      currentY += (mouseY - currentY) * 0.18;
      setPosition({ x: currentX, y: currentY });
      rafId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden hidden md:block">
      {/* Outer Luxury Ring */}
      <div
        className={`fixed top-0 left-0 flex items-center justify-center rounded-full transition-[width,height,background-color,border-color] duration-300 ease-out will-change-transform ${
          cursorText
            ? "w-16 h-16 bg-[#d4af37]/90 border border-white text-black font-bold text-[10px] tracking-widest shadow-[0_0_25px_rgba(212,175,55,0.6)]"
            : isHovered
            ? "w-12 h-12 bg-[#d4af37]/15 border border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.3)] backdrop-blur-[1px]"
            : "w-8 h-8 border border-[#d4af37]/60 bg-transparent"
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        {cursorText && (
          <span className="select-none animate-in fade-in duration-200">
            {cursorText}
          </span>
        )}
      </div>

      {/* Center Precision Dot (Only when not showing text) */}
      {!cursorText && (
        <div
          className={`fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#d4af37] transition-opacity duration-200 will-change-transform ${
            isHovered ? "opacity-40" : "opacity-90"
          }`}
          style={{
            transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
          }}
        />
      )}
    </div>
  );
}
