import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Devon's Dapper Dogs Pet Grooming",
  description: "Mobile Dog and Cat Grooming Service - The royal treatment your pet deserves, with the convenience you desire.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${quattrocentoSans.variable} ${quattrocento.variable} font-sans min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
