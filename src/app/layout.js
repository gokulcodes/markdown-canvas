import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
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
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Host+Grotesk:ital,wght@0,300..800;1,300..800&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Playwrite+PE:wght@100..400&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&family=Space+Grotesk:wght@300..700&display=swap"
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
      <body className={`${spaceGrotesk.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
