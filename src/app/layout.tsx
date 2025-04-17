// src/app/layout.tsx
import { Inter, Quattrocento_Sans, Quattrocento } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const quattrocentoSans = Quattrocento_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-quattrocento-sans",
});
const quattrocento = Quattrocento({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-quattrocento",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="image_src"
          href="https://dapperdoggies.com/logo-v3.png?v=2"
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:url" content="https://dapperdoggies.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Devon's Dapper Dogs Pet Grooming"
        />
        <meta
          property="og:description"
          content="Mobile Dog Grooming Service – The royal treatment your pet deserves, with the convenience you desire."
        />
        <meta
          property="og:image"
          content="https://dapperdoggies.com/logo-v3.png?v=2"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="1200" />
        <meta
          property="og:image:alt"
          content="Devon's Dapper Dogs Pet Grooming Logo"
        />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://dapperdoggies.com/" />
        <meta
          name="twitter:title"
          content="Devon's Dapper Dogs Pet Grooming"
        />
        <meta
          name="twitter:description"
          content="Mobile Dog Grooming Service – The royal treatment your pet deserves, with the convenience you desire."
        />
        <meta
          name="twitter:image"
          content="https://dapperdoggies.com/logo-v3.png?v=2"
        />

        {/* Favicon and App Icons */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />

        <title>Devon's Dapper Dogs Pet Grooming</title>
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${quattrocentoSans.variable} ${quattrocento.variable} font-sans min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
