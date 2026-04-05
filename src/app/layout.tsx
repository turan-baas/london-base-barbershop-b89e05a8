import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import PinriseBanner from '@/components/PinriseBanner';

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "London Base Barbershop | Premium Barbershop in Queensway, London",
  description:
    "Experience the finest grooming at London Base Barbershop. Located at 175 Queensway, London W2 5HL. Classic cuts, modern styles, and premium grooming services.",
  keywords: "barbershop, London, Queensway, haircut, grooming, shave, men's hair",
  openGraph: {
    title: "London Base Barbershop",
    description: "Premium Barbershop in Queensway, London",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}        <PinriseBanner />
              
{/* Pinrise Sales Banner */}
<script src="https://portal.pinrise.io/api/portal/banner.js?id=b89e05a8-3806-4a6b-b9b0-7bbd046a6259" defer></script>
      </body>
    </html>
  );
}
