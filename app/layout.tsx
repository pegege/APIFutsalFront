import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar"; // 🚀 IMPORTA EL NAVBAR

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LNFS Database",
  description: "Stats LNFS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}>
        <Navbar /> {/* 🚀 Aquí ponemos el Navbar */}
        <main className="pt-24">{children}</main> {/* ⬅️ padding para que no tape el navbar */}
      </body>
    </html>
  );
}
