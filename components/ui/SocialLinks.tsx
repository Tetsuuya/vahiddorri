import Image from "next/image";
import { SOCIAL_LINKS } from "@/lib/data";

interface SocialLinksProps {
  className?: string;
  itemClassName?: string;
  iconSize?: number;
}

export default function SocialLinks({
  className = "flex items-center gap-2.5",
  itemClassName = "transition-transform hover:scale-110 hover:opacity-100 opacity-80 duration-200",
  iconSize = 22,
}: SocialLinksProps) {
  return (
    <ul className={className} aria-label="Social media channels">
      {SOCIAL_LINKS.map((item) => (
        <li key={item.name}>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.ariaLabel}
            className={`inline-flex items-center justify-center p-1 rounded-full ${itemClassName}`}
          >
            <Image
              src={item.iconSrc}
              alt={item.name}
              width={iconSize}
              height={iconSize}
              className="object-contain filter drop-shadow-sm"
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
