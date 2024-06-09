import type { Metadata } from "next";

import { Poppins } from "next/font/google";
import "./globals.css";

const inter = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Home",
  description: " Musiver Music Aggregator | Musiver List Digital Stote | List Digital Stote | Music Aggregator | Music Publishing | Copyrights Service | Promotion Tools",
  creator: "Suputra Dana",
  publisher: "Suputra Dana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={(inter.className = " bg-slate-950")}>{children}</body>
    </html>
  );
}
