"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 bg-black/40 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="font-serif-heading text-base sm:text-lg font-bold tracking-[0.25em] text-white hover:text-[#d4af37] transition-colors duration-300 uppercase"
        >
          Vahid Dorri
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`text-xs tracking-[0.2em] uppercase font-medium transition-all duration-200 relative py-1 ${
                  isActive
                    ? "text-[#d4af37] font-semibold"
                    : "text-zinc-300 hover:text-white"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#d4af37] shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-zinc-300 hover:text-white focus:outline-none"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`h-0.5 w-full bg-current transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-current transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-0.5 w-full bg-current transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-black/95 border-b border-zinc-800 px-6 py-6 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-base tracking-[0.2em] uppercase font-medium py-2 border-b border-zinc-900/60 ${
                    isActive ? "text-[#d4af37]" : "text-zinc-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
