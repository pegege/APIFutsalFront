'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const MIN_SEASON = 2005;
const MAX_SEASON = 2025;
const MIN_JORNADA = 1;
const MAX_JORNADA = 34;

interface TeamInfo {
  _id: string;
  name: string;
}

interface Player {
  _id: string;
  name: string;
  nickname?: string;
}

interface Match {
  _id: string;
  homeTeam: TeamInfo;
  awayTeam: TeamInfo;
  score: string;
  season: number;
  jornada: number;
  startingPlayersHome: Player[];
  startingPlayersAway: Player[];
  substitutesAway: Player[];
  substitutesHome: Player[];
  notPlayedAway: Player[];
  notPlayedHome: Player[];
}

export default function MatchBrowser() {
  const searchParams = useSearchParams();
  const seasonParam = searchParams.get("season");
  const jornadaParam = searchParams.get("jornada");

  const season = Math.min(Math.max(parseInt(seasonParam || `${MAX_SEASON}`, 10), MIN_SEASON), MAX_SEASON);
  const jornada = Math.max(parseInt(jornadaParam || `${MIN_JORNADA}`, 10), MIN_JORNADA);

  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);

  const getURL = (s: number, j: number) => {
    const params = new URLSearchParams({
      season: s.toString(),
      jornada: j.toString(),
    });
    return `/matches?${params.toString()}`;
  };

  useEffect(() => {
    const fetchMatches = async () => {
      setLoading(true);
      try {
        const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/api/matches`);
        url.searchParams.set("season", String(season));
        url.searchParams.set("jornada", String(jornada));

        const res = await fetch(url.toString(), { cache: "no-store" });
        const json = await res.json();
        setMatches(json.data);
      } catch (err) {
        console.error("❌ Error al cargar partidos:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, [season, jornada]);

  return (
    <>
      <div className="flex flex-wrap gap-6 justify-center mb-6">
        <div className="flex items-center gap-2">
          {season < MAX_SEASON && (
            <Link href={getURL(season + 1, jornada)} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">←</Link>
          )}
          <span className="font-semibold">Temporada {season}</span>
          {season > MIN_SEASON && (
            <Link href={getURL(season - 1, jornada)} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">→</Link>
          )}
        </div>
        <div className="flex items-center gap-2">
          {jornada > MIN_JORNADA && (
            <Link href={getURL(season, jornada - 1)} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">←</Link>
          )}
          <span className="font-semibold">Jornada {jornada}</span>
          {jornada < MAX_JORNADA && (
            <Link href={getURL(season, jornada + 1)} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">→</Link>
          )}
        </div>
      </div>

      {loading ? (
        <p className="text-center">Cargando partidos...</p>
      ) : matches.length === 0 ? (
        <p className="text-center text-gray-500">No hay partidos para esta temporada y jornada.</p>
      ) : (
        <ul className="space-y-2">
          {matches.map((match) => (
            <li key={match._id} className="p-4 bg-white rounded shadow hover:bg-blue-50 transition">
              <Link href={`/matches/${match._id}`} className="block">
                <div className="text-lg font-medium truncate">
                  {match.homeTeam.name} vs {match.awayTeam.name}
                </div>
                <div className="text-gray-500 text-sm">
                  {match.score} | Temporada {match.season} | Jornada {match.jornada}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
