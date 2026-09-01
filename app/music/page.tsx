import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AlbumShowcase from "@/components/music/AlbumShowcase";
import TrackCard from "@/components/music/TrackCard";
import Divider from "@/components/ui/Divider";
import { FEATURED_TRACKS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Music & Compositions — Vahid Dorri",
  description:
    "Listen to official tracks, five-track EP album, and classical crossover compositions by tenor singer Vahid Dorri.",
};

export default function MusicPage() {
  return (
    <>
      <Navbar />

      <main className="w-full flex-1 flex flex-col items-center">
        {/* Top Hero Banner with vahid-music.png */}
        <section className="relative w-full h-[38vh] min-h-[260px] max-h-[360px] flex items-center justify-center overflow-hidden">
          <Image
            src="/images/Music/vahid-music.png"
            alt="Vahid Dorri Music Banner"
            fill
            priority
            sizes="100vw"
            quality={95}
            className="object-cover object-center"
          />
          {/* Ambient gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#080808]" />
        </section>

        {/* Content Container */}
        <div className="w-full max-w-6xl px-6 sm:px-12 -mt-12 z-10 pb-20">
          {/* Header Title & Ornaments */}
          <div className="text-center mb-10 select-none">
            <Divider type="top" className="mb-1" />

            <h1 className="font-serif-heading text-4xl sm:text-5xl md:text-6xl font-normal tracking-wide text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
              Music & Compositions
            </h1>

            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.32em] text-[#d4af37] font-bold mt-2">
              TENOR • CLASSICAL CROSSOVER • SONGWRITING
            </p>

            <Divider type="bottom" className="mt-2" />
          </div>

          {/* Featured Five-Track EP Album Showcase */}
          <AlbumShowcase />

          {/* Additional Compositions Section */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-zinc-800">
              <h2 className="font-serif-heading text-xl sm:text-2xl font-semibold text-white tracking-wide">
                Additional Compositions & Singles
              </h2>
              <span className="text-xs uppercase tracking-widest text-zinc-400">
                Acoustic & Studio
              </span>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {FEATURED_TRACKS.map((track) => (
                <TrackCard key={track.id} track={track} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
