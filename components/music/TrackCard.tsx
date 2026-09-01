import Image from "next/image";
import { TrackItem } from "@/types";

interface TrackCardProps {
  track: TrackItem;
}

export default function TrackCard({ track }: TrackCardProps) {
  return (
    <div className="group bg-zinc-950/70 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm transition-all duration-300 hover:border-[#d4af37]/50 hover:shadow-[0_0_25px_rgba(212,175,55,0.15)] flex flex-col sm:flex-row items-center">
      {/* Track Artwork / Thumbnail */}
      <div className="relative w-full sm:w-48 h-44 sm:h-full min-h-[160px] flex-shrink-0 overflow-hidden">
        <Image
          src={track.imageSrc || "/images/new-pianos.jpg"}
          alt={track.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />
      </div>

      {/* Track Details */}
      <div className="p-6 flex-1 flex flex-col justify-between w-full">
        <div>
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
              {track.genre}
            </span>
            {track.duration && (
              <span className="text-xs text-zinc-400 font-mono">
                {track.duration}
              </span>
            )}
          </div>
          <h3 className="font-serif-heading text-xl font-bold text-white mt-1 group-hover:text-[#d4af37] transition-colors duration-200">
            {track.title}
          </h3>
          {track.description && (
            <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
              {track.description}
            </p>
          )}
        </div>

        {/* Action Controls */}
        <div className="mt-4 pt-4 border-t border-zinc-800/80 flex items-center justify-between">
          <button
            type="button"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-white hover:text-[#d4af37] transition-colors cursor-pointer"
          >
            <span className="w-7 h-7 rounded-full bg-[#d4af37] text-black flex items-center justify-center text-xs font-bold pl-0.5">
              ▶
            </span>
            Listen Preview
          </button>
          <span className="text-xs text-zinc-400 uppercase tracking-widest">
            Vahid Dorri
          </span>
        </div>
      </div>
    </div>
  );
}
