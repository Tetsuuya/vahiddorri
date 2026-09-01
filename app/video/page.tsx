import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import VideoCard from "@/components/video/VideoCard";
import Divider from "@/components/ui/Divider";
import { FEATURED_VIDEOS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Video Performances — Vahid Dorri",
  description:
    "Watch official videos, live concerts, and performances by tenor singer Vahid Dorri.",
};

export default function VideoPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-20 px-6 sm:px-12 max-w-6xl mx-auto w-full">
        {/* Page Header */}
        <div className="text-center mb-12">
          <Divider type="top" />
          <h1 className="font-serif-heading text-4xl sm:text-5xl font-bold tracking-tight text-white mt-2">
            Video Performances
          </h1>
          <p className="text-sm uppercase tracking-[0.25em] text-[#d4af37] mt-3 font-medium">
            Live Concerts • Acoustic Sessions • Studio Recordings
          </p>
          <Divider type="bottom" />
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FEATURED_VIDEOS.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
