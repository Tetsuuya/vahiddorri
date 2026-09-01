import { NavItem, SocialLink, TrackItem, AlbumItem, VideoItem } from "@/types";

export const SITE_CONFIG = {
  name: "Vahid Dorri",
  title: "Tenor Singer, Songwriter, Lyricist",
  tagline: "TENOR SINGER, SONGWRITER, LYRICIST",
  copyright: `Copyright © ${new Date().getFullYear()} — All rights reserved`,
  bio: "Vahid Dorri is a classical crossover tenor singer, songwriter, and lyricist known for emotive vocal range and classical compositions.",
};

export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home", href: "/" },
  { id: "music", label: "Music", href: "/music" },
  { id: "video", label: "Video", href: "/video" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/vahiddorri",
    iconSrc: "/images/default_fb.png",
    ariaLabel: "Follow Vahid Dorri on Facebook",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/vahiddorri",
    iconSrc: "/images/default_twitter.png",
    ariaLabel: "Follow Vahid Dorri on X / Twitter",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/user/vahiddorri",
    iconSrc: "/images/default_youtube.png",
    ariaLabel: "Subscribe to Vahid Dorri on YouTube",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/vahiddorri/",
    iconSrc: "/images/plus_custom_icon0.png",
    ariaLabel: "Follow Vahid Dorri on Instagram",
  },
];

export const FEATURED_ALBUM: AlbumItem = {
  id: "ep-album",
  title: "Five-Track EP Album",
  subtitle: "Vahid Dorri",
  releaseYear: "2020",
  coverImage: "/images/Music/Vahid-Dorri-EP.jpg",
  description: "A signature 5-track classical crossover EP showcasing soaring tenor vocals, acoustic piano, and poetic lyrical compositions.",
  tracks: [
    { number: 1, title: "Symphonic Prelude", duration: "3:45" },
    { number: 2, title: "Aria of the Night", duration: "4:12" },
    { number: 3, title: "Melodies in C Minor", duration: "3:58" },
    { number: 4, title: "Echoes of Tenor", duration: "4:30" },
    { number: 5, title: "Final Nocturne", duration: "5:02" },
  ],
};

export const FEATURED_TRACKS: TrackItem[] = [
  {
    id: "track-1",
    title: "Symphonic Echoes",
    genre: "Classical Crossover / Tenor",
    duration: "4:32",
    imageSrc: "/images/new-pianos.jpg",
    description: "An orchestral ballad highlighting lyrical depth and soaring vocal harmonies.",
  },
  {
    id: "track-2",
    title: "Midnight Melody",
    genre: "Opera / Acoustic Piano",
    duration: "3:48",
    imageSrc: "/images/new-pianos.jpg",
    description: "An intimate acoustic performance accompanied by grand piano and subtle strings.",
  },
  {
    id: "track-3",
    title: "Aria of Hope",
    genre: "Lyrical Tenor",
    duration: "5:15",
    imageSrc: "/images/new-pianos.jpg",
    description: "Dramatic vocal crescendo blending Italian operatic influence with contemporary poetry.",
  },
];

export const FEATURED_VIDEOS: VideoItem[] = [
  {
    id: "video-1",
    title: "Live Concert Performance",
    category: "Live Stage",
    description: "Full live stage performance accompanied by live strings and grand piano.",
  },
  {
    id: "video-2",
    title: "Official Studio Music Video",
    category: "Music Video",
    description: "Cinematic music video filmed in historic acoustic concert halls.",
  },
];
