"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo o título */}
        <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700">
          LNFS DB
        </Link>

        {/* Links de navegación */}
        <div className="flex space-x-6 text-gray-700 font-semibold">
          <Link href="/matches" className="hover:text-blue-600 transition">
            Partidos
          </Link>
          <Link href="/teams?page=1&season=2025" className="hover:text-blue-600 transition">
            Equipos
          </Link>
          <Link href="/search" className="hover:text-blue-600 transition">
            Buscar
          </Link>
        </div>
      </div>
    </nav>
  );
}
