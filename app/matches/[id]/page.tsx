import { notFound } from "next/navigation";
import { type FC } from "react";

interface Match {
  _id: string;
  homeTeam: { name: string } | string;
  awayTeam: { name: string } | string;
  score: string;
  season: number;
  startingPlayersHome: any[];
  startingPlayersAway: any[];
  substitutesAway: any[];
  substitutesHome: any[];
  notPlayedAway: any[];
  notPlayedHome: any[];
}

const MatchPage: FC<any> = async ({ params }) => {
  if (!params?.id) notFound();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/matches/${params.id}`,
    { cache: "no-store" }
  );

  if (!res.ok) notFound();

  const match: Match = await res.json();
  console.log("Match data:", match);

  
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">
      {typeof match.homeTeam === "object" ? match.homeTeam.name : match.homeTeam} vs{" "}
      {typeof match.awayTeam === "object" ? match.awayTeam.name : match.awayTeam}

      </h1>

      <div className="mb-2 text-gray-600">
        {match.score} | Temporada {match.season}
      </div>

      <h2 className="text-xl font-semibold mt-6 mb-2">Cinco inicial - Local</h2>
      <ul className="list-disc list-inside mb-4">
        {match.startingPlayersHome.map((player: any, index: number) => (
          <li key={player?._id?.toString() || index}>
            {player?.nickname || player?.name || "Jugador desconocido"}
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">Cinco inicial - Visitante</h2>
      <ul className="list-disc list-inside">
        {match.startingPlayersAway.map((player: any, index: number) => (
          <li key={player?._id?.toString() || index}>
            {player?.nickname || player?.name || "Jugador desconocido"}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default MatchPage;
