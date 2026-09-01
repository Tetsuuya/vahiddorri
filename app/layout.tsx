import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-sans-main",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vahiddorri.com"),
  title: "Vahid Dorri — Tenor Singer, Songwriter, Lyricist",
  description:
    "Official website of Vahid Dorri, Tenor Singer, Songwriter, and Lyricist. Discover music, video performances, and latest releases.",
  keywords: [
    "Vahid Dorri",
    "Tenor",
    "Singer",
    "Songwriter",
    "Lyricist",
    "Classical Crossover",
    "Music",
  ],
  authors: [{ name: "Vahid Dorri" }],
  openGraph: {
    title: "Vahid Dorri — Tenor Singer, Songwriter, Lyricist",
    description:
      "Official website of Vahid Dorri, Tenor Singer, Songwriter, and Lyricist. Discover music, video performances, and latest releases.",
    url: "https://www.vahiddorri.com/",
    siteName: "Vahid Dorri",
    images: [
      {
        url: "/images/vahid-main.jpg",
        width: 1200,
        height: 630,
        alt: "Vahid Dorri",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/images/cropped-diamond-1-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    shortcut: "/images/cropped-diamond-1-32x32.png",
    apple: "/images/cropped-diamond-1-32x32.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${montserrat.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#070707] text-[#e0e0e0] font-sans antialiased selection:bg-[#d4af37]/30 selection:text-white flex flex-col justify-between">
        {children}
      </body>
    </html>
  );
}

