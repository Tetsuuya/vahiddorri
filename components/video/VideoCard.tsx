import { VideoItem } from "@/types";

interface VideoCardProps {
  video: VideoItem;
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <div className="group bg-[#121212]/90 border border-white/10 hover:border-[#d4af37]/50 rounded-2xl overflow-hidden backdrop-blur-md shadow-2xl transition-all duration-300 hover:shadow-[0_15px_35px_rgba(212,175,55,0.15)] flex flex-col">
      {/* 16:9 Responsive Video Embed Container */}
      <div className="relative w-full aspect-video bg-black overflow-hidden">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?rel=0`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          className="absolute inset-0 w-full h-full border-0"
        />
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
          <span className="uppercase tracking-wider text-[10.5px]">Official Video</span>
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
