import { SITE_CONFIG } from "@/lib/data";
import SocialLinks from "@/components/ui/SocialLinks";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-black/60 backdrop-blur-sm py-6 px-6 sm:px-12 z-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-xs tracking-wider text-zinc-400 text-center sm:text-left">
          {SITE_CONFIG.copyright}
        </p>

        {/* Social Icons */}
        <div className="flex items-center">
          <SocialLinks iconSize={26} />
        </div>
      </div>
    </footer>
  );
}
