"use client";

import { useState } from "react";
import Image from "next/image";
import { VideoItem } from "@/types";

interface VideoCardProps {
  video: VideoItem;
}

export default function VideoCard({ video }: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  // High-res YouTube thumbnail URL (cached instantly)
  const thumbnailUrl = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;

  return (
    <div className="group luxury-card rounded-2xl overflow-hidden shadow-2xl flex flex-col transition-transform duration-300 hover:-translate-y-1">
      {/* 16:9 Responsive Video Container */}
      <div className="relative w-full aspect-video bg-black overflow-hidden select-none">
        {isPlaying ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0 animate-in fade-in duration-300"
          />
        ) : (
          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            data-cursor="play"
            className="relative w-full h-full block cursor-pointer group/btn"
            aria-label={`Play ${video.title}`}
          >
            {/* Instant High-Res Cached Thumbnail */}
            <Image
              src={thumbnailUrl}
              alt={video.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority
              className="object-cover transition-transform duration-700 group-hover/btn:scale-105"
            />
            {/* Ambient Darkened Cinema Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20 group-hover/btn:opacity-60 transition-opacity" />

            {/* Glowing Golden Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex items-center justify-center">
                <div className="absolute -inset-2 rounded-full bg-[#d4af37]/30 blur-md group-hover/btn:bg-[#d4af37]/60 transition-all duration-300" />
                <div className="relative w-14 h-14 rounded-full bg-[#d4af37] text-black flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.8)] transition-transform duration-300 group-hover/btn:scale-110 pl-1">
                  <svg
                    className="w-6 h-6 fill-current text-black"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Bottom Quick Badge */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white/90">
              <span className="bg-black/80 backdrop-blur-md px-2.5 py-1 rounded border border-white/10 text-[10.5px] uppercase tracking-wider text-[#d4af37] font-semibold">
                ▶ Watch Video
              </span>
              <span className="text-[11px] text-zinc-300 font-medium bg-black/60 px-2 py-0.5 rounded">
                YouTube
              </span>
            </div>
          </button>
        )}
      </div>

      {/* Video Info */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {video.category && (
            <span className="text-[10.5px] uppercase tracking-[0.2em] text-[#d4af37] font-bold">
              {video.category}
            </span>
          )}
          <h3 className="font-serif-heading text-lg sm:text-xl font-bold text-white mt-1 group-hover:text-[#d4af37] transition-colors">
            {video.title}
          </h3>
          {video.description && (
            <p className="text-xs text-zinc-400 mt-2 leading-relaxed line-clamp-2">
              {video.description}
            </p>
          )}
        </div>

        {/* Card Footer */}
        <div className="mt-4 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
          <span className="uppercase tracking-wider text-[10.5px]">Performance</span>
          <a
            href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d4af37] hover:underline font-semibold text-[11px]"
          >
            Watch on YouTube →
          </a>
        </div>
      </div>
    </div>
  );
}
