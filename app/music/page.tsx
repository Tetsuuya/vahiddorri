import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TrackCard from "@/components/music/TrackCard";
import Divider from "@/components/ui/Divider";
import { FEATURED_TRACKS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Music & Discography — Vahid Dorri",
  description:
    "Listen to tracks, compositions, and vocal releases by tenor singer and lyricist Vahid Dorri.",
};

export default function MusicPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-20 px-6 sm:px-12 max-w-6xl mx-auto w-full">
        {/* Page Header */}
        <div className="text-center mb-12">
          <Divider type="top" />
          <h1 className="font-serif-heading text-4xl sm:text-5xl font-bold tracking-tight text-white mt-2">
            Music & Compositions
          </h1>
          <p className="text-sm uppercase tracking-[0.25em] text-[#d4af37] mt-3 font-medium">
            Tenor • Classical Crossover • Songwriting
          </p>
          <Divider type="bottom" />
        </div>

        {/* Tracks Grid */}
        <div className="flex flex-col gap-6">
          {FEATURED_TRACKS.map((track) => (
            <TrackCard key={track.id} track={track} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
