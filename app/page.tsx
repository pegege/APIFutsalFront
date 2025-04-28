import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-50">
      <h1 className="text-4xl font-bold mb-6 text-center">Proyecto LNFS - Estadísticas Históricas</h1>

      <p className="text-lg text-gray-700 mb-10 max-w-2xl text-center">
        Portal de consulta de datos de la Liga Nacional de Fútbol Sala. Temporadas desde 2005 hasta 2025. Accede a información sobre equipos, jugadores, partidos y estadísticas.
      </p>

      <div className="flex flex-wrap gap-6 justify-center">
        <Link href="https://futsal-api-five.vercel.app/teams?page=1&season=2025" className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Equipos</h2>
          <p className="text-gray-500">Explora los equipos históricos de la LNFS</p>
        </Link>

        <Link href="/players" className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-green-600 mb-2">Jugadores</h2>
          <p className="text-gray-500">Consulta datos y trayectorias de jugadores</p>
        </Link>

        <Link href="/matches" className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-purple-600 mb-2">Partidos</h2>
          <p className="text-gray-500">Resultados, alineaciones y eventos históricos</p>
        </Link>

        <Link href="/search" className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-pink-600 mb-2">Buscador</h2>
          <p className="text-gray-500">Busca jugadores o equipos rápidamente</p>
        </Link>
      </div>

      <p className="text-sm text-gray-400 mt-12">
        Proyecto personal no oficial. Datos recopilados desde fuentes públicas de LNFS.
      </p>
    </main>
  );
}
