import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Elite Woodcraft - Premium Custom Woodcarving",
  description: "Discover exceptional custom woodcarving craftsmanship. Bespoke wooden products for discerning clients who value quality and artistry.",
};

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${geistSans.className} ${geistMono.className} antialiased`}
        style={{
          fontFamily: `${geistSans.variable}, ${geistMono.variable}`
        }}
      >
        <Header />
        <main style={{ paddingTop: '80px' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
