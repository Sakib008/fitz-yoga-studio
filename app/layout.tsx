import type { Metadata } from "next";
import { Space_Grotesk, DM_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CursorFollower from "@/components/ui/CursorFollower";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmMono = DM_Mono({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Fitz Yoga Studio | Transform Body, Mind & Spirit",
  description: "Authentic yoga classes & personal training in Noida. Join 500+ members practicing Hatha, Vinyasa, Ashtanga, Yin, Power, and Prenatal yoga with expert instructors.",
  keywords: ["yoga", "yoga studio", "Noida", "fitness", "wellness", "meditation", "yoga classes"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${dmMono.variable} antialiased bg-linen text-ink`}
      >
        <CursorFollower />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
