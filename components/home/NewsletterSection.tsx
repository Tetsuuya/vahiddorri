"use client";

import { useState } from "react";
import Image from "next/image";
import SocialLinks from "@/components/ui/SocialLinks";
import { SITE_CONFIG } from "@/lib/data";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

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

  return (
    <section className="relative w-full h-screen min-h-[600px] flex flex-col justify-between items-center overflow-hidden">
      {/* Background Piano Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/new-pianos.jpg"
          alt="Piano keys background"
          fill
          sizes="100vw"
          priority
          quality={95}
          className="object-cover object-center"
        />
        {/* Subtle dark tint */}
        <div className="absolute inset-0 bg-black/15" />
      </div>

      {/* Empty top spacer for centering */}
      <div className="h-16" />

      {/* Centered Newsletter Card matching original layout */}
      <div className="w-full max-w-xl mx-auto px-4 z-10">
        <div className="bg-[#1c1c1c]/95 border border-white/10 px-8 py-10 sm:px-12 sm:py-12 shadow-2xl text-center">
          <h2 className="text-white text-base sm:text-lg font-bold tracking-[0.15em] uppercase mb-4">
            SIGN UP FOR FREE SONGS!
          </h2>

          {status === "success" ? (
            <div className="bg-[#111111] border border-white/20 p-5 text-zinc-200 text-sm">
              <p className="font-semibold text-white">Thank you for subscribing!</p>
              <p className="text-xs text-zinc-400 mt-1">
                Your complimentary songs will arrive in your inbox.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-3 text-xs underline text-zinc-300 hover:text-white"
              >
                Sign up another email
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col items-center w-full" noValidate>
              <label
                htmlFor="piano-email"
                className="text-zinc-300 text-xs sm:text-sm font-normal mb-3"
              >
                Enter email for free songs*
              </label>

              <div className="w-full max-w-md">
                <input
                  type="email"
                  id="piano-email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  placeholder="Email Address"
                  required
                  className="w-full bg-white text-black text-center text-sm py-2.5 px-4 outline-none border border-transparent focus:border-[#d4af37] placeholder:text-zinc-400 placeholder:text-center"
                />

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full mt-3 bg-[#111111] hover:bg-black text-white text-xs font-bold tracking-[0.2em] uppercase py-3 border border-zinc-700 hover:border-white transition-colors duration-200 cursor-pointer disabled:opacity-50"
                >
                  {status === "loading" ? "SUBSCRIBING..." : "SUBSCRIBE"}
                </button>
              </div>

              {status === "error" && (
                <p className="text-xs text-rose-400 mt-2">{errorMessage}</p>
              )}
            </form>
          )}
        </div>
      </div>

      {/* Bottom Bar: Copyright on bottom-left / center, Social Links on bottom-right */}
      <div className="w-full px-6 sm:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 z-10 bg-black/60 backdrop-blur-sm sm:bg-transparent">
        <p className="text-xs text-zinc-300 font-normal tracking-wide">
          {SITE_CONFIG.copyright}
        </p>

        <div className="flex items-center">
          <SocialLinks iconSize={28} itemClassName="hover:scale-110 transition-transform duration-200" />
        </div>
      </div>
    </section>
  );
}
