"use client";

import { useEffect, useRef, useState } from "react";

interface TextRevealProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  delay?: number;
}

export default function TextReveal({
  text,
  as: Component = "h1",
  className = "",
  delay = 0,
}: TextRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const words = text.split(" ");

  return (
    <Component ref={ref as any} className={`overflow-hidden ${className}`}>
      {words.map((word, wordIdx) => (
        <span key={wordIdx} className="inline-block whitespace-nowrap mr-[0.28em] last:mr-0">
          <span
            className={`inline-block transform transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isVisible
                ? "translate-y-0 opacity-100 filter-none"
                : "translate-y-full opacity-0 blur-[2px]"
            }`}
            style={{
              transitionDelay: `${delay + wordIdx * 70}ms`,
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </Component>
  );
}
