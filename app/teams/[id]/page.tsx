import { notFound } from "next/navigation";

interface Player {
  _id: string;
  name: string;
  nickname: string;
  role?: string; // Posición opcional
}

interface Team {
  _id: string;
  name: string;
  logoLink: string;
  players: Player[];
}

// ⚠️ Cambio clave: usar `any` en los props para evitar el fallo de tipo en Vercel
export default async function TeamPage({ params }: any) {
  if (!params?.id) notFound();

  const res = await fetch(`https://fantasyfutsal.onrender.com/api/teams/${params.id}`, {
    cache: "no-store",
  });

  if (!res.ok) notFound();

  const team: Team = await res.json();

  return (
    <main className="p-8">
      <div className="flex items-center space-x-4 mb-6">
        <img
          src={team.logoLink}
          alt={team.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <h1 className="text-3xl font-bold">{team.name}</h1>
      </div>

      <h2 className="text-xl font-semibold mb-4">Plantilla</h2>

      {team.players.length > 0 ? (
        <ul className="space-y-2">
          {team.players.map((player) => (
            <li
              key={player._id}
              className="p-4 bg-white rounded-lg shadow flex flex-col"
            >
              <span className="text-lg font-bold">{player.nickname}</span>
              <span className="text-gray-500">{player.name}</span>
              {player.role && (
                <span className="text-sm text-gray-400">
                  Posición: {player.role}
                </span>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No hay jugadores registrados para este equipo.</p>
      )}
    </main>
  );
}
