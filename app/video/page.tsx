import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import VideoCard from "@/components/video/VideoCard";
import Divider from "@/components/ui/Divider";
import { FEATURED_VIDEOS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Video Performances & Music Videos — Vahid Dorri",
  description:
    "Watch official music videos, live concert recordings, and studio performances by tenor singer Vahid Dorri.",
};

export default function VideoPage() {
  return (
    <>
      <Navbar />

      <main className="w-full flex-1 flex flex-col items-center">
        {/* Top Hero Banner with vahid-music.png */}
        <section className="relative w-full h-[38vh] min-h-[260px] max-h-[360px] flex items-center justify-center overflow-hidden">
          <Image
            src="/images/Music/vahid-music.png"
            alt="Vahid Dorri Video Banner"
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
        <div className="w-full max-w-7xl px-6 sm:px-12 -mt-12 z-10 pb-20">
          {/* Header Title & Ornaments */}
          <div className="text-center mb-12 select-none">
            <Divider type="top" className="mb-1" />

            <h1 className="font-serif-heading text-4xl sm:text-5xl md:text-6xl font-normal tracking-wide text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
              Video Performances
            </h1>

            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.32em] text-[#d4af37] font-bold mt-2">
              OFFICIAL MUSIC VIDEOS • LIVE SESSIONS
            </p>

            <Divider type="bottom" className="mt-2" />
          </div>

          {/* 3-Column Video Performances Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {FEATURED_VIDEOS.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>

          {/* YouTube Channel Promo Banner */}
          <div className="mt-16 bg-[#121212]/90 border border-white/10 rounded-2xl p-8 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <h2 className="font-serif-heading text-xl sm:text-2xl font-bold text-white">
                Subscribe on YouTube
              </h2>
              <p className="text-xs text-zinc-400 mt-1">
                Stay updated with the latest live performances, operatic arias, and new video releases.
              </p>
            </div>

            <a
              href="https://www.youtube.com/user/vahiddorri?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#c5a059] hover:bg-[#dfbc7a] text-black font-bold text-xs uppercase tracking-[0.2em] rounded-md shadow-lg transition-transform hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              Subscribe Channel →
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
