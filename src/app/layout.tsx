import type React from "react";
import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/navbar";
import MouseMoveEffect from "@/components/mouse-move-effect";
import JumpToTop from "@/components/jump-to-top";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });
// const nunito = Nunito({ subsets: ["latin"] });q

export const metadata: Metadata = {
  title: {
    default: "Saifuzzaman Emon – Video Editor & Motion Graphics Designer",
    template: "%s | Saifuzzaman Emon",
  },
  description:
    "Turning raw footage into visual stories — with style, precision, and a touch of cinematic magic. Niloy Bhowmick specializes in DaVinci Resolve, Premiere Pro, and After Effects — delivering cinematic edits, motion graphics, and polished storytelling.",
  keywords: [
    "Video Editor",
    "Motion Graphics Designer",
    "DaVinci Resolve",
    "Premiere Pro",
    "After Effects",
    "Color Grading",
    "YouTube Video Editing",
    "Course Video Editing",
    "Logo Animation",
    "Visual Storytelling",
    "Freelance Video Editor",
    "Bangladesh Video Editor",
    "Cinematic Editing",
    "Content Creator",
    "Lower Thirds",
    "Audio Sync",
  ],
  authors: [{ name: "Saifuzzaman Emon", url: "" }],
  creator: "Saifuzzaman Emon",
  publisher: "Saifuzzaman Emon",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "",
    title: "Saifuzzaman Emon – Video Editor & Motion Graphics Designer",
    description:
      "Passionate Video Editor and Motion Graphics Designer delivering clean, cinematic edits and dynamic visual storytelling using Premiere Pro, and After Effects.",
    siteName: "Saifuzzaman Emon Portfolio",
    images: [
      {
        url: "Saifuzzaman Emon.jpeg",
        width: 1200,
        height: 630,
        alt: "Saifuzzaman Emon - Video Editor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saifuzzaman Emon – Video Editor & Motion Graphics Designer",
    description:
      "Crafting cinematic edits, motion graphics, and powerful stories. Let's make your content stand out.",
    creator: "", // update if you have a real Twitter handle
    images: ["/Saifuzzaman Emon.jpeg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "",
  },
  category: "Video Editing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content="#020817" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "",
              "@type": "Person",
              name: "Saifuzzaman Emon",
              url: "",
              image: "/Saifuzzaman Emon.jpeg",
              sameAs: [
                "",
                "", // update if available lower icon links
                "", // update if available
                "", // update if available
              ],
              jobTitle: "Video Editor & Motion Graphics Designer",
              knowsAbout: [
                "Video Editing",
                "Motion Graphics",
                "Adobe Premiere Pro",
                "Adobe After Effects",
                "Color Grading",
                "Audio Syncing",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
              alumniOf: {
                "@type": "Organization",
                name: "",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.className} min-h-screen text-white`}
        style={{
          background: "#020817",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="grid-background-large min-h-screen">
          <MouseMoveEffect />
          <Navbar />
          <main className="pt-16">{children}</main>
          <Footer />
          <JumpToTop />
          <Toaster position="top-center" />
        </div>
      </body>
    </html>
  );
}
