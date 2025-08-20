import type { Metadata } from "next";
import { Geist, Geist_Mono, Alike_Angular, Alex_Brush } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const alikeAngular = Alike_Angular({
  variable: "--font-alike-angular",
  subsets: ["latin"],
  weight: ["400"],
});

const alexBrush = Alex_Brush({
  variable: "--font-alex-brush",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Treasure Island Reimagined: Jane Hawkins and the Pirate's Gold",
  description: "A new stage adaptation of the classic novel featuring Jane Hawkins and the Pirate's Gold",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/img/favicons/20813-8-skull-photos_16x16.ico", sizes: "16x16", type: "image/x-icon" },
      { url: "/img/favicons/20813-8-skull-photos_32x32.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/img/favicons/20813-8-skull-photos_48x48.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/img/favicons/20813-8-skull-photos_64x64.ico", sizes: "64x64", type: "image/x-icon" },
    ],
    apple: "/img/favicons/20813-8-skull-photos_64x64.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/wrt6vxk.css" />
        <link rel="preload" href="https://use.typekit.net/wrt6vxk.css" as="style" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/x-icon" sizes="16x16" href="/img/favicons/20813-8-skull-photos_16x16.ico" />
        <link rel="icon" type="image/x-icon" sizes="32x32" href="/img/favicons/20813-8-skull-photos_32x32.ico" />
        <link rel="icon" type="image/x-icon" sizes="48x48" href="/img/favicons/20813-8-skull-photos_48x48.ico" />
        <link rel="icon" type="image/x-icon" sizes="64x64" href="/img/favicons/20813-8-skull-photos_64x64.ico" />
        <link rel="apple-touch-icon" href="/img/favicons/20813-8-skull-photos_64x64.ico" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${alikeAngular.variable} ${alexBrush.variable} antialiased`}
      >
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
