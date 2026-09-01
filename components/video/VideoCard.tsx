import Image from "next/image";
import { VideoItem } from "@/types";

interface VideoCardProps {
  video: VideoItem;
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <div className="group bg-zinc-950/70 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm transition-all duration-300 hover:border-[#d4af37]/50 hover:shadow-[0_0_25px_rgba(212,175,55,0.15)] flex flex-col">
      {/* Video Container / Thumbnail */}
      <div className="relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden">
        <Image
          src="/images/vahid-main.jpg"
          alt={video.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        {/* Play Button Overlay */}
        <div className="relative z-10 w-16 h-16 rounded-full bg-[#d4af37]/90 text-black flex items-center justify-center text-xl shadow-lg transition-transform duration-300 group-hover:scale-110 pl-1">
          ▶
        </div>
      </div>

      {/* Video Info */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
            {video.category}
          </span>
          <h3 className="font-serif-heading text-xl font-bold text-white mt-1 group-hover:text-[#d4af37] transition-colors">
            {video.title}
          </h3>
          {video.description && (
            <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
              {video.description}
            </p>
          )}
        </div>

        <div className="mt-4 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
          <span className="uppercase tracking-wider">Official Performance</span>
          <a
            href="https://www.youtube.com/user/vahiddorri"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d4af37] hover:underline font-medium"
          >
            Watch on YouTube →
          </a>
        </div>
      </div>
    </div>
  );
}
