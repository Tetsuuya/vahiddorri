export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  iconSrc: string;
  ariaLabel: string;
}

export interface TrackItem {
  id: string;
  title: string;
  genre: string;
  year?: string;
  duration?: string;
  imageSrc?: string;
  audioUrl?: string;
  description?: string;
}

export interface AlbumItem {
  id: string;
  title: string;
  subtitle: string;
  releaseYear: string;
  coverImage: string;
  description: string;
  tracks: { number: number; title: string; duration: string }[];
}

export interface VideoItem {
  id: string;
  title: string;
  category: string;
  embedUrl?: string;
  thumbnailUrl?: string;
  description?: string;
}
