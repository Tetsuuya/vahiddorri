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
  id: "five-track-ep",
  title: "Five-Track EP Album",
  subtitle: "Vahid Dorri",
  releaseYear: "2015",
  price: "$10 CAD",
  coverImage: "/images/Music/Vahid-Dorri-EP.jpg",
  description:
    "Vahid Dorri five-track EP album (Digital version). Original songs composed by Stefán Dickerson.",
  credits: [
    "Vahid Dorri five-track EP album (Digital version)",
    "Original songs composed by Stefán Dickerson",
    "Canvasvision Music BMI",
    "Copyright 2015 — All rights reserved",
  ],
  tracks: [
    {
      number: 1,
      title: "Visions of a dream",
      credits: "Music and Lyrics by Stefán Dickerson",
      duration: "3:45",
      audioSrc: "/audio/1-visions-of-a-dream.mp3",
    },
    {
      number: 2,
      title: "Never know why",
      credits: "Music and Lyrics by Stefán Dickerson",
      duration: "3:38",
      audioSrc: "/audio/2-never-know-why.mp3",
    },
    {
      number: 3,
      title: "When seasons change",
      credits: "Music and Lyrics by Stefán Dickerson",
      duration: "4:09",
      audioSrc: "/audio/3-when-seasons-change.mp3",
    },
    {
      number: 4,
      title: "My funny valentine",
      credits: "Music by Richard Rodgers, Lyrics by Lorenz Hart",
      duration: "5:32",
      audioSrc: "/audio/4-my-funny-valentine.mp3",
    },
    {
      number: 5,
      title: "Nature boy",
      credits: "Music by Eden Ahbez",
      duration: "5:34",
      audioSrc: "/audio/5-nature-boy.mp3",
    },
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
