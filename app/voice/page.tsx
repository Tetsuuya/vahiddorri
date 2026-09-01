import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import VoicePlayer from "@/components/music/VoicePlayer";
import Divider from "@/components/ui/Divider";

export const metadata: Metadata = {
  title: "Five-Track EP Album — Vahid Dorri",
  description:
    "Listen to Vahid Dorri's Five-Track EP Album featuring Visions of a dream, Never know why, When seasons change, My funny valentine, and Nature boy.",
};

export default function VoicePage() {
  return (
    <>
      <Navbar />

      <main className="w-full flex-1 flex flex-col items-center pt-28 pb-20 px-6 sm:px-12 max-w-6xl mx-auto">
        <div className="text-center mb-8 select-none">
          <Divider type="top" className="mb-1" />
          <h1 className="font-serif-heading text-4xl sm:text-5xl font-normal tracking-wide text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
            Five-Track EP Album
          </h1>
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.32em] text-[#d4af37] font-bold mt-2">
            VAHID DORRI • OFFICIAL DIGITAL RELEASE
          </p>
          <Divider type="bottom" className="mt-2" />
        </div>

        <VoicePlayer />
      </main>

      <Footer />
    </>
  );
}
