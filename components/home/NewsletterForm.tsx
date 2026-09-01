"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic sanitization & validation
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

    // Simulate secure submission
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 600);
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-black/60 backdrop-blur-md border border-white/10 p-6 sm:p-8 rounded-xl shadow-2xl">
      <div className="text-center mb-5">
        <h2 className="font-serif-heading text-xl sm:text-2xl font-semibold text-white tracking-wide">
          Sign up for free songs!
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 mt-1.5">
          Enter email for exclusive free releases and updates.
        </p>
      </div>

      {status === "success" ? (
        <div className="bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 p-4 rounded-lg text-center text-sm">
          <p className="font-medium">Thank you for subscribing!</p>
          <p className="text-xs text-emerald-400/80 mt-1">
            Check your inbox shortly for your complimentary downloads.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-3 text-xs underline text-emerald-400 hover:text-emerald-200"
          >
            Subscribe another email
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3" noValidate>
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="flex-1">
              <label htmlFor="newsletter-email" className="sr-only">
                Enter email for free songs
              </label>
              <input
                type="email"
                id="newsletter-email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === "error") setStatus("idle");
                }}
                placeholder="Email Address"
                required
                className="w-full px-4 py-3 bg-zinc-900/80 border border-zinc-700 text-white placeholder-zinc-500 rounded-lg focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] text-sm transition-all duration-200"
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-6 py-3 bg-[#c5a059] hover:bg-[#dfbc7a] active:scale-[0.98] text-black font-semibold text-xs tracking-widest uppercase rounded-lg transition-all duration-200 disabled:opacity-50 whitespace-nowrap cursor-pointer"
            >
              {status === "loading" ? "Subscribing..." : "Subscribe"}
            </button>
          </div>

          {status === "error" && (
            <p className="text-xs text-rose-400 text-center mt-1">{errorMessage}</p>
          )}
        </form>
      )}
    </div>
  );
}
