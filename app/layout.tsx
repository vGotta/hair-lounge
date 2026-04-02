import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: "Hair Lounge — Coiffeuse professionnelle | Var (83)",
  description:
    "Salon de coiffure Hair Lounge dans le Var. Coupe, coloration et soins capillaires personnalisés. Prenez rendez-vous en ligne.",
  keywords: [
    "coiffeuse",
    "salon coiffure",
    "Var",
    "83",
    "coupe cheveux",
    "coloration",
    "soins capillaires",
    "Hair Lounge",
  ],
  openGraph: {
    title: "Hair Lounge — Coiffeuse professionnelle | Var (83)",
    description:
      "Salon de coiffure dans le Var. Coupe, coloration et soins personnalisés.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col scroll-smooth">
        <Navbar />
        <main className="pt-0 flex-1">{children}</main>
      </body>
    </html>
  );
}