import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Markdown Canvas",
  description:
    "A simple lightweight markdown previewer with extensive customizability",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet"
      />

      <meta property="og:title" content="Markdown Canvas" />
      <meta
        property="og:description"
        content="A simple lightweight markdown previewer with extensive customizability"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://markdowncanvas.netlify.app/" />
      <meta
        property="og:image"
        content="https://raw.githubusercontent.com/gokulcodes/markdown-canvas/main/public/poster.png"
      />
      <meta property="og:site_name" content="Markdown Canvas" />

      <meta property="og:locale" content="en_US" />
      <meta property="og:updated_time" content="2025-04-14T06:42:11.155Z" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
