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
