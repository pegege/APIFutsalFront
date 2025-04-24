import { notFound } from "next/navigation";

interface Player {
  _id: string;
  name: string;
  nickname: string;
  goals: { match: string; minute: number }[];
  yellowCards: { match: string; minute: number }[];
  redCards: { match: string; minute: number }[];
  assists: number;
  matches: { _id: string; date: string; homeTeam: string; awayTeam: string }[];
  seasons: {
    season: number;
    team: {
      _id: string;
      name: string;
      logoLink: string;
    };
  }[];
}

// 👇 Corregido usando `any` para evitar error de tipo en Vercel
export default async function PlayerPage({ params }: any) {
  if (!params?.id) notFound();

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/players/${params.id}`, {
    cache: "no-store",
  });

  if (!res.ok) notFound();

  const player: Player = await res.json();

  return (
    <main className="p-8">
      <div className="flex flex-col items-center text-center space-y-4 mb-8">
        <h1 className="text-4xl font-bold">{player.nickname}</h1>
        <p className="text-gray-600">{player.name}</p>

        {/* Estadísticas */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-6">
          <StatBox label="Goles" value={player.goals.length} />
          <StatBox label="Partidos" value={player.matches.length} />
          <StatBox label="Amarillas" value={player.yellowCards.length} />
          <StatBox label="Rojas" value={player.redCards.length} />
        </div>
      </div>

      {/* Equipos por temporada */}
      <h2 className="text-2xl font-semibold mb-4">Equipos por temporada</h2>
      <div className="space-y-4">
        {player.seasons.length > 0 ? (
          player.seasons.map((season) => (
            <div
              key={`${season.season}-${season.team._id}`}
              className="flex items-center space-x-4 bg-white p-4 rounded shadow"
            >
              {season.team.logoLink && (
                <img
                  src={season.team.logoLink}
                  alt={season.team.name}
                  className="w-12 h-12 rounded-full"
                />
              )}
              <div>
                <p className="font-semibold">{season.team.name}</p>
                <p className="text-gray-500 text-sm">Temporada {season.season}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-gray-500">Este jugador no tiene temporadas registradas.</div>
        )}
      </div>
    </main>
  );
}

// Componente para estadísticas
function StatBox({ label, value }: { label: string; value: number }) {
  return (
    <div className="bg-white p-4 rounded shadow text-center">
      <p className="text-xl font-bold">{value}</p>
      <p className="text-gray-500 text-sm">{label}</p>
    </div>
  );
}
