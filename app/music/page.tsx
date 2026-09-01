import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AlbumCard from "@/components/music/AlbumCard";
import Divider from "@/components/ui/Divider";
import TextReveal from "@/components/ui/TextReveal";
import { ALBUMS_LIST } from "@/lib/data";

export const metadata: Metadata = {
  title: "Discography & Albums — Vahid Dorri",
  description:
    "Explore the discography, albums, and EP releases by tenor singer and songwriter Vahid Dorri.",
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
          <div className="text-center mb-12 select-none">
            <Divider type="top" className="mb-1" />

            <TextReveal
              text="Albums & Discography"
              as="h1"
              className="font-serif-heading text-4xl sm:text-5xl md:text-6xl font-normal tracking-wide text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]"
            />

            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.32em] text-[#d4af37] font-bold mt-2">
              OFFICIAL RELEASES • DIGITAL ALBUMS
            </p>

            <Divider type="bottom" className="mt-2" />
          </div>

          {/* Scalable Albums Catalog Grid */}
          <div className="flex flex-col gap-8">
            {ALBUMS_LIST.map((album) => (
              <AlbumCard key={album.id} album={album} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
