"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/data";
import SocialLinks from "@/components/ui/SocialLinks";
import TextReveal from "@/components/ui/TextReveal";

export default function ParallaxExperience() {
  const [scrollY, setScrollY] = useState(0);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedEmail = email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!trimmedEmail) {
      setStatus("error");
      setErrorMessage("Please enter your email address.");
      return;
    }

    if (!emailRegex.test(trimmedEmail)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 600);
  };

  // Parallax calculations based on viewport height (vh)
  const windowHeight = typeof window !== "undefined" ? window.innerHeight : 800;
  const progress = Math.min(1, Math.max(0, scrollY / (windowHeight || 800)));

  // Hero fade and translate
  const heroOpacity = Math.max(0, 1 - progress * 1.5);
  const heroTranslateY = progress * -60;
  const heroBgScale = 1 + progress * 0.08;
  const heroBgDim = progress * 0.4;

  return (
    <div className="relative w-full">
      {/* SECTION 1: FIXED/STICKY HERO (Street Portrait) */}
      <section className="sticky top-0 h-screen w-full flex flex-col justify-between items-center overflow-hidden z-10">
        {/* Background Image with Dynamic Parallax & Dim */}
        <div
          className="absolute inset-0 -z-10 origin-center will-change-transform"
          style={{
            transform: `scale(${heroBgScale})`,
          }}
        >
          <Image
            src="/images/vahid-main.jpg"
            alt="Vahid Dorri - Tenor Singer"
            fill
            sizes="100vw"
            priority
            quality={95}
            className="object-cover object-center"
          />
          {/* Dynamic dark tint that increases as you scroll */}
          <div
            className="absolute inset-0 bg-black transition-colors"
            style={{ opacity: 0.2 + heroBgDim }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />
        </div>

        {/* Top Spacer */}
        <div className="h-16" />

        {/* Center Hero Content (Fades & drifts upward on scroll) */}
        <div
          className="flex flex-col items-center text-center max-w-2xl mx-auto px-4 my-auto select-none will-change-[transform,opacity]"
          style={{
            opacity: heroOpacity,
            transform: `translateY(${heroTranslateY}px)`,
          }}
        >
          {/* Top Diamond Ornament (A bit smaller) */}
          <div className="relative w-10 sm:w-11 h-3 mb-2 opacity-90 transition-transform duration-300 hover:scale-110">
            <Image
              src="/images/icon_divider3.png"
              alt="Decorative top icon"
              fill
              sizes="(max-width: 640px) 40px, 44px"
              className="object-contain"
            />
          </div>

          {/* Artist Name */}
          <TextReveal
            text={SITE_CONFIG.name}
            as="h1"
            className="font-serif-heading text-4xl sm:text-5xl md:text-6xl font-normal tracking-wide text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]"
          />

          {/* Bottom Divider (Smaller accent dash) */}
          <div className="relative w-4 sm:w-5 h-[1px] my-2 opacity-70">
            <Image
              src="/images/divider_bottom3.jpg"
              alt="Decorative bottom divider"
              fill
              sizes="(max-width: 640px) 16px, 20px"
              className="object-contain"
            />
          </div>

          {/* Subtitle */}
          <div className="mt-0.5">
            <Link
              href="/music"
              className="inline-block text-[9.5px] sm:text-[10.5px] font-bold tracking-[0.32em] uppercase text-zinc-300 hover:text-[#d4af37] transition-all duration-300 py-1"
            >
              {SITE_CONFIG.tagline}
            </Link>
          </div>
        </div>

        {/* Hero Bottom Bar */}
        <div
          className="w-full px-6 sm:px-10 py-4 flex items-center justify-between pointer-events-none will-change-opacity"
          style={{ opacity: heroOpacity }}
        >
          <div className="w-10" />

          {/* Animated Scroll Down Indicator */}
          <div
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth",
              });
            }}
            className="flex flex-col items-center opacity-60 hover:opacity-100 transition-all cursor-pointer animate-bounce pointer-events-auto group"
          >
            <span className="text-[9px] uppercase tracking-[0.25em] text-white/70 group-hover:text-[#d4af37] transition-colors mb-1">
              Scroll Down
            </span>
            <svg
              className="w-3.5 h-3.5 text-white group-hover:text-[#d4af37] transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>

          {/* Social Icons */}
          <div className="pointer-events-auto">
            <SocialLinks iconSize={22} itemClassName="hover:scale-110 transition-transform duration-200" />
          </div>
        </div>
      </section>

      {/* SECTION 2: PIANO THEATER CURTAIN REVEAL (Slides up over fixed Hero) */}
      <section className="relative z-20 min-h-screen w-full flex flex-col justify-between items-center shadow-[0_-35px_80px_rgba(0,0,0,0.95)] border-t border-white/10 bg-black overflow-hidden">
        {/* Background Piano Image with Subtle Counter-Parallax */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/new-pianos.jpg"
            alt="Piano keys"
            fill
            sizes="100vw"
            priority
            quality={95}
            className="object-cover object-center"
          />
          {/* Subtle multi-layer ambient dark overlay */}
          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-black/50" />
        </div>

        {/* Top Spacer for Centering */}
        <div className="h-16" />

        {/* Centered Newsletter Glassmorphic Card (Refined & Compact) */}
        <div className="w-full max-w-md mx-auto px-4 z-10 my-auto">
          <div className="relative group bg-[#161616]/95 border border-white/15 hover:border-[#d4af37]/40 px-6 py-8 sm:px-10 sm:py-9 shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-md transition-all duration-300 text-center rounded-sm">
            {/* Subtle corner golden accent glow */}
            <div className="absolute -inset-[1px] rounded-sm bg-gradient-to-b from-[#d4af37]/20 via-transparent to-transparent -z-10 opacity-60 group-hover:opacity-100 transition-opacity" />

            <h2 className="text-white text-sm sm:text-base font-bold tracking-[0.2em] uppercase mb-3 drop-shadow">
              SIGN UP FOR FREE SONGS!
            </h2>

            {status === "success" ? (
              <div className="bg-zinc-900 border border-[#d4af37]/40 p-5 text-zinc-200 text-xs animate-in fade-in zoom-in-95 duration-300">
                <p className="font-semibold text-white tracking-wide">Thank you for subscribing!</p>
                <p className="text-[11px] text-zinc-400 mt-1">
                  Your complimentary songs and updates will arrive in your inbox.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-3 inline-block text-[10px] uppercase tracking-widest text-[#d4af37] hover:underline cursor-pointer"
                >
                  Sign up another email →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col items-center w-full" noValidate>
                <label
                  htmlFor="piano-email-input"
                  className="text-zinc-300 text-xs font-normal mb-2.5 tracking-wide"
                >
                  Enter email for free songs*
                </label>

                <div className="w-full max-w-sm">
                  <input
                    type="email"
                    id="piano-email-input"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === "error") setStatus("idle");
                    }}
                    placeholder="Email Address"
                    required
                    className="w-full bg-white text-black text-center text-xs py-2.5 px-3 outline-none border border-transparent focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]/30 placeholder:text-zinc-400 placeholder:text-center transition-all"
                  />

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full mt-2.5 bg-[#0d0d0d] hover:bg-[#1f1f1f] active:scale-[0.99] text-white hover:text-[#d4af37] text-[10.5px] font-bold tracking-[0.25em] uppercase py-3 border border-zinc-700 hover:border-[#d4af37] transition-all duration-300 cursor-pointer disabled:opacity-50"
                  >
                    {status === "loading" ? "SUBSCRIBING..." : "SUBSCRIBE"}
                  </button>
                </div>

                {status === "error" && (
                  <p className="text-[11px] text-rose-400 mt-2 font-medium">{errorMessage}</p>
                )}
              </form>
            )}
          </div>
        </div>

        {/* Section 2 Footer Bar */}
        <div className="w-full px-6 sm:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 z-10 bg-black/70 backdrop-blur-md sm:bg-black/40 border-t border-white/5">
          <p className="text-[11px] text-zinc-400 font-normal tracking-wide text-center sm:text-left">
            {SITE_CONFIG.copyright}
          </p>

          <div className="flex items-center">
            <SocialLinks iconSize={22} itemClassName="hover:scale-110 transition-transform duration-200" />
          </div>
        </div>
      </section>
    </div>
  );
}
